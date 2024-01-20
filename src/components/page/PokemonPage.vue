<template>
<h1 v-if="!winnerId">Cargando...</h1>
<div v-else>
    <h1>Adivina el Pokemon</h1>
    <poke-image :pokeid="winnerId" :pokeShow="gano"/>
    <poke-opciones @clickOpcion ="jugar($event)" :pokeArreglo="pokeArreglo"/>
    
</div>

  
</template>

<script>
import PokeImage from "../PokeImage.vue";
import PokeOpciones from "../PokeOpciones.vue";
import obtenerIDFachada from "../helper/PokeHelper.js";


export default {
    components:{
        PokeImage,
        PokeOpciones
    },
    data(){
        return{
            pokeArreglo:null,
            winnerId:null,
            gano:false
        }
    },

    beforeCreate(){
        console.log('antes de crear el componente');
    },
    created(){
        console.log('se crear el componente');

    },
    beforeMount(){
        console.log('antes de montar el componente');

    },
    mounted(){
        console.log("se monta el componente");
        this.cargaInicial()
    },
    beforeUpdate(){
        console.log('antes de actualizar el componente');

    },
    updated(){
        console.log('se actualiza el componente');
    },
    beforeDestroy(){
        console.log("se destruye el componente");
    },

    methods:{
        async cargaInicial(){
            console.log("carga inicial");
            const pokemones = await obtenerIDFachada()
            console.log(pokemones);
            this.pokeArreglo=pokemones;
            const arregloId=Math.floor(Math.random()*4)
            this.winnerId = pokemones[arregloId].id;
            console.log(this.winnerId);
        },
        clickON(dato){
            console.log("click padre");
            console.log(dato);
        },
        jugar(datoId){
            if(datoId==this.winnerId)this.gano=true;
            console.log(this.gano);
        }
    }
    

}
</script>

<style>
h1{
  font-weight: bold;
  color: whitesmoke;
  text-shadow: 0 0 20px #9901aa;
}
</style>