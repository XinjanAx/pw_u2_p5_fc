<template>
  <div id="div_u">
    <p>hola vue</p>
    <pregunta/>
    <p>chao vue</p>
  </div>  
</template>

<script>
import Pregunta from './components/Pregunta.vue';
export default {
  name: 'App',
  components: {
    Pregunta
  },
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(0, 0, 0, 0.77);
  margin: 0;
  padding: 0;

}
p{
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0 0 20px #9901aa;
}
</style>
