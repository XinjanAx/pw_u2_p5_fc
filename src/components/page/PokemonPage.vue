<template>
<h1>Adivina el Pokemon</h1>
<poke-image :pokeid="6" :pokeShow="true"/>
<poke-opciones :pokeid="6"/>
  
</template>

<script>
import PokeImage from "../PokeImage.vue";
import PokeOpciones from "../PokeOpciones.vue";
import obtenerIDFachada from "../helper/PokeHelper.js";

obtenerIDFachada()

export default {
    components:{
        PokeImage,
        PokeOpciones
    },
    data(){
        return{
            id:null
        }
    },
    methods:{
    }
    

}
</script>

<style>

</style>