<template>
<h1>Adivina el Pokemon</h1>
<poke-image :pokeid="6" :pokeShow="true"/>
<poke-opciones :pokeid="6"/>
  
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
    monted(){
        console.log("montado");
        this.cargaInicial()
    },
    data(){
        return{
            id:null
        }
    },
    methods:{
        async cargaInicial(){
            console.log("carga inicial");
            const pokemones = await obtenerIDFachada()
            console.log(pokemones);
        }
    }
    

}
</script>

<style>

</style>