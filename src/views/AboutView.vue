<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
   <div v-if="isSignedIn">
      <button @click="handleSignOut">Sign Out</button>
     </div>
</template>
