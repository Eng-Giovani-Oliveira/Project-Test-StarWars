<template>
  <div id="app">
    <router-link to="/">Login</router-link> |
    <router-link to="/home">Home</router-link> 
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app',
}
</script>
<style>

</style>