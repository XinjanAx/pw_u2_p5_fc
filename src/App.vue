<template>
  <h2>hola app</h2>
  <img src="https://i.pinimg.com/originals/d2/23/d9/d223d948ba7dd7c538a969d712d64bfe.gif" alt="logo">
  <Contador titulo="A"/>
  <Contador titulo="B"/>
  <h2>chao app</h2>
</template>

<script>
import Contador from './components/Contador.vue'


export default {
  name: 'App',
  components: {
    Contador
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
