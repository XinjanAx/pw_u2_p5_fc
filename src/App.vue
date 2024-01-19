<template>
<div class="container">
  <div id="div_casino" v-if="valodador">
    <h1>Casino pokemon</h1>
    <h2>Puntaje:{{puntaje}}</h2>
    <h2>Intentos:{{intento}}</h2>
    <div class="pantalla">
      <Imagen :urlImg="url1" :texto="texto1"/>
      <Imagen :urlImg="url2" :texto="texto2"/>
      <Imagen :urlImg="url3" :texto="texto3"/>
    </div>
    
    <button v-on:click="jugar()">JUGAR</button>
  </div>
  <div v-if="!validadro">
    <div id="div_msm_win" v-if="win">
      <h1>Puntaje:{{puntaje}}</h1>
      <h1>Has ganado un premio de 10 000 dolares</h1>
      <button @click="reiniciar()">Reiniciar</button>
    </div>
    <div id="div_msm_lose" v-if="lose">
      <h1>Has utilisado tus 5 intentos</h1>
      <h1>Puntaje:{{puntaje}}</h1>
      <button @click="reiniciar()">Reiniciar</button>
    </div>
  </div>

</div>
  
</template>

<script>
import Imagen from './components/imagen.vue';
export default {
  name: 'App',
  components: {
    Imagen
  },
  data(){
    return{
      puntaje:0,
      intento:0,
      url1:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      url2:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      url3:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      texto1:"xxxxxxxxxxx",
      texto2:"xxxxxxxxxxx",
      texto3:"xxxxxxxxxxx",
      valodador:true,
      win: false,
      lose: false
    }
  },
  methods:{
    async jugar(){
      const dato1 = await this.consumirAPI();
      const dato2 = await this.consumirAPI();
      const dato3 = await this.consumirAPI();

      this.texto1 = dato1.answer;
      this.texto2 = dato2.answer;
      this.texto3 = dato3.answer;

      this.url1 = dato1.image;
      this.url2 = dato2.image;
      this.url3 = dato3.image;
      this.evaluarREsultado();
    },
    async consumirAPI(){
      return await fetch("https://yesno.wtf/api").then(res=>res.json())
    },
    evaluarREsultado(){
      this.intento++;
      if(this.texto1==="yes"&&this.texto2==="yes"&&this.texto3==="yes"){
        this.puntaje+=5;
      }else if(
        (this.texto1==="yes"&&this.texto2==="yes")
      ||(this.texto2==="yes"&&this.texto3==="yes")
      ||(this.texto1==="yes"&&this.texto3==="yes")
      ){
        this.puntaje+=3;
      }else if(
        this.texto1==="yes"
      ||this.texto2==="yes"
      ||this.texto3==="yes"
      ){
        this.puntaje+=1;
      }
      if(this.puntaje>=10){
        this.lose=false;
        this.win=true;
        this.valodador=false;
      }
      if(this.intento==5){
        this.win=false;
        this.lose=true;
        this.valodador=false;
      }
    },


    reiniciar(){
      this.puntaje=0;
      this.intento=0;
      this.url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";
      this.url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg";
      this.url3="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg";
      this.texto1="xxxxxxxxxxxx";
      this.texto2="xxxxxxxxxxxx";
      this.texto3="xxxxxxxxxxxx";
      this.valodador=true;
      this.win=false;
      this.lose=false;
    }


  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: 0;
  padding: 0;
}
.pantalla{
  display: flex;
    justify-content: center;
    align-items: center;
}
button{
    margin: 30px;
    font-size: 20px;
    width: 140px;
    border-radius: 5px;
    color: whitesmoke;
    background-color: rgb(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    border: none;
}
button:hover{
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
