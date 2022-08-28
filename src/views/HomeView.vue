<template>
  <router-view />
  <div class="container">
    <h1>This is an Home page</h1>
    <div>
      <button class="logout" @click="handleSignOut">Sair</button>
     </div>
  </div>
 
</template>

<script>
import { ref } from 'vue'
import firebaseConfig from '../config/firebaseConfig'
import firebase from 'firebase/compat/app'

firebase.initializeApp(firebaseConfig)
import 'firebaseui/dist/firebaseui.css'
import { getAuth, signOut } from "firebase/auth"
import router from '@/router'

const auth = getAuth()

export default {
  name: 'Home',
  props: {
    msg: String
  },
    setup() {
    const user = ref(null)
    const isSignedIn = ref(false)

    const handleSignOut = () => {
      signOut(auth).then(() => {
       // Sign-out successful.
      
       router.push("/")
       console.log('Signed out')
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
.logout {
  border-color:#f61f0e;
background:linear-gradient(to bottom, #fca8a1 5%, #f61f0e 100%);
color:#fff;
height: 30px;
width: 60px;
cursor: pointer;
}

</style>