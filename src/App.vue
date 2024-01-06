<template>
  <div id="div_u">
    <p>hola vue</p>
    <deber-calcuadora/>
    <p>chao vue</p>
  </div>  
</template>

<script>
import DeberCalcuadora from './components/DeberCalcuadora.vue';
export default {
  name: 'App',
  components: {
    DeberCalcuadora
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(255, 255, 255, 0.77);
  margin: 0;
  padding: 0;

}
body{
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("./assets/fondo.png");
}
p{
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0 0 20px #9901aa;
}
</style>
