<template>
<div class="container">
  <div class="img">
    <img alt="darth logo" src="../assets/logo5.png">
     </div>
     <div>
      <button class="Films">Films</button>
      </div>
      <button class="logout" @click="handleSignOut">Sair</button>
    </div>
</template>

<script>
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
    const handleSignOut = () => {
      signOut(auth).then(() => {      
       router.push("/")
       console.log('Signed out')
      }).catch((error) => {
        console.log(error)
      })
    }
    return {
      handleSignOut,
    }
  }
}
</script>

<style scoped>

.container {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #40454a;
}
.logout {
  border-color:#f61f0e;
background:linear-gradient(to bottom, #fca8a1 5%, #f61f0e 100%);
color:#fff;
height: 30px;
width: 60px;
cursor: pointer;
margin-top: 300px;
border-radius: 4px;
font-size: large;
}
.Films {
cursor: pointer;
color:#000000;
width: 60px;
border-color:#ebdb04;
border-radius: 4px;
font-size: large;
}
</style>