<template>
  <main class="container">
    <div class="content">
      <div class="introduction">
        <img alt="darth logo" src="../assets/Darth-Vader-icon.png">
         <h1>Star Viewars</h1>
           <h3>Visualizador de dados sobre Star Wars</h3>
           </div>
           <div class="sign">
           </div>
          <div id="firebaseui-auth-container">
          <h3>Acesse a plataforma de forma fácil!</h3>  
        </div>
       <div v-if="isSignedIn">
      <button @click="handleSignOut">Sign Out</button>
     </div>
    </div>
  </main>  
</template>

<script>
import { ref } from 'vue'
import firebaseConfig from '../config/firebaseConfig'
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app'

firebase.initializeApp(firebaseConfig);import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { getAuth, signOut } from "firebase/auth"

const auth = getAuth()
export default {
  name: 'Login',
  props: {
    msg: String
  },
    setup() {
    const user = ref(null)
    const isSignedIn = ref(false)

    const uiConfig = {
      signInFlow: 'popup',
      signinSuccessUrl: 'http://localhost:8080/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID      
      ],
      callbacks: {
        signInSuccessWithAuthResult: function (authResult) {
          user.value = authResult.user.displayName;
          console.log(authResult)
          isSignedIn.value = true;
          console.log('Signed in by user ' + user.value)
 
          // so it doesn't refresh the page
          return false
        },
      }
    }

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth())

    ui.start('#firebaseui-auth-container', uiConfig)

    const handleSignOut = () => {
      signOut(auth).then(() => {
       // Sign-out successful.
       user.value = null;
       isSignedIn.value = false;
       console.log('Signed out')
       ui.start('#firebaseui-auth-container', uiConfig)
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
    }

    return {
      user,
      isSignedIn,
      handleSignOut,
    }
  }
}
</script>

<style scoped>
.container {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #40454a;
  color: #fff;
}

.content {
  display: flex;
  flex-direction: column;
}

.introduction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 75px;
}

.introduction h1 {
  font-size: 50px;
  margin-bottom: 15px;
}

.introduction h3 {
  font-weight: 400;
  font-size: 20px;
}

.sign p {
  margin-bottom: 5px;
  font-size: 20px;
  margin-left: auto 100px;
}

@media(min-width: 1024px) {
  .content {
    flex-direction: row;
  }

  .introduction {
    margin-right: 100px;
    margin-bottom: 0;
  }
}
</style>