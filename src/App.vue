<template>
  <div id="div_u">
    <span>hola vue</span>
    <PokemonPage/>
    <span>chao vue</span>
  </div>  
</template>

<script>
import PokemonPage from './components/page/PokemonPage.vue';
export default {
  name: 'App',
  components: {
    PokemonPage
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
span{
  font-size: 30px;
  font-weight: bold;
  color: whitesmoke;
  text-shadow: 0 0 20px #9901aa;
}
</style>
