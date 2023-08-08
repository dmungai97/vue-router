<template>
  <main>
    <div class="links">
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/about">About</RouterLink>
    </div>
    <RouterView/>

  </main>
</template>

<script setup>
import {RouterLink,RouterView} from 'vue-router'
</script>

<style scoped>
.links{
  padding: 20px;
}
.links a{
  margin:0 5px;
  text-decoration: none;
  
}
.active{
  font-weight: bold;
  color: #8beb0e;
}
</style>