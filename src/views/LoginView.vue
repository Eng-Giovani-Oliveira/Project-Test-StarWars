<template>
  <main class="container">
    <div class="content">
      <div class="introduction">
        <img alt="darth logo" src="../assets/Darth-Vader-icon.png">
         <h1>Star NeWars</h1>
           <h3>Visualizador de dados sobre Star Wars</h3>
           </div>
           <div class="sign">
           </div>
          <div id="firebaseui-auth-container">
          <h4>Acesse a plataforma de forma fácil!</h4>  
        </div>
    </div>
  </main>  
</template>

<script>
import { ref } from 'vue'
import firebaseConfig from '../config/firebaseConfig'
import firebase from 'firebase/compat/app'

firebase.initializeApp(firebaseConfig);import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { getAuth } from "firebase/auth"
import router from '@/router';

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
          console.log(authResult)
          isSignedIn.value = true;
          router.push("/home")
        },
      }
    }

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth())

    ui.start('#firebaseui-auth-container', uiConfig)


    return {
      user,
      isSignedIn,
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