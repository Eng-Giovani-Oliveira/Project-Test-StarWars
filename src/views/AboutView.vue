<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
      <button @click="handleSignOut">Sair</button>
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
  name: 'About',
  props: {
  },
    setup() {
    const user = ref(null)
    const isSignedIn = ref(false)

    const handleSignOut = () => {
      signOut(auth).then(() => {
       // Sign-out successful.
       user.value = null;
       isSignedIn.value = false;
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