<template>
<div>
  <img alt="emiolo logo" src="./assets/pngwing.png">
  </div>
  <div>
  <Login msg="Faça login para acessar informações de Star Wars"/>
  </div>
</template>

<script>
import Login from './pages/Login.vue'
export default {
  name: 'App',
  components: { Login }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>