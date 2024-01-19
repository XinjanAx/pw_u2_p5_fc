<template>
<h1>Adivina el Pokemon</h1>
<poke-image :pokeid="6" :pokeShow="true"/>
<poke-opciones :pokeid="6"/>
  
</template>

<script>
import PokeImage from "../PokeImage.vue";
import PokeOpciones from "../PokeOpciones.vue";
import obtenerPokemonFachada from "../helper/PokeHelper.js";



export default {
    components:{
        PokeImage,
        PokeOpciones
    },
    mounted(){
        console.log("montado");
        this.cargaInicial()
    },
    methods:{
        async cargaInicial(){
            console.log("carga inicial");
            const pokemones = await obtenerPokemonFachada()
            console.log(pokemones);
        }
    }
    

}
</script>

<style>

</style>