<template>
<div class="container">
  <div class="img">
    <img alt="logo starwars" src="../assets/logo5.png">
     </div>
     <div class="row">
      <button class="planets" @click="allPlanets">Planets</button>
      <button class="Films" @click="allmovies">Movies</button>
      <div>
    </div>
      </div>
      <button class="logout" @click="handleSignOut">Sair</button>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import api from '../config/api'
import firebaseConfig from '../config/firebaseConfig'
import firebase from 'firebase/compat/app'
import axios from "axios"
firebase.initializeApp(firebaseConfig)
import 'firebaseui/dist/firebaseui.css'
import { getAuth, signOut } from "firebase/auth"
import router from '@/router'

export default {
  name: 'HomeViews',
    setup() {
   const auth = getAuth()
   const starwars = ref([])
   const fetchStarwars = () => api.get('/films/1/')
   .then((response) => {
    console.log(response)
   })
onMounted(fetchStarwars)
    
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
      starwars,
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
  background-attachment: fixed;
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
color:#FFD700;
width: 80px;
height: 30px;
border-color:#ebdb04;
border-radius: 4px;
font-size: large;
text-align: center;
background-color: #000000;
align-items: center;
}
.msg {
  color: #fff;
}
.planets {
cursor: pointer;
color:#FFD700;
width: 80px;
height: 30px;
border-color:#ebdb04;
border-radius: 4px;
font-size: large;
text-align: center;
margin: 0 15px;
align-items: center;
background-color: #000000;   
}
</style>