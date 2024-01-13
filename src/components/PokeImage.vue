<template>
<div class="div_pokeimg">
  <img v-if="!pokeShow" class="poke_perfil" v-bind:src="imagen" alt="no img">
  <img class="pokemon" :src="imagen" alt="no img">
</div>

</template>

<script>
export default {
    props:{
        pokeid:{
            type: Number,
            required: true
        },
        pokeShow:{
            type: Boolean,
            required:true,
        }
    },
    computed:{
        imagen(){
            return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+this.pokeid+".svg"
        }
    }

}
</script>

<style>
.poke_perfil{
    filter: brightness(0);
    position: absolute;
}
img{
    height: 200px;
    
   
    
    
}
.div_pokeimg{
    height: 200px;
}
</style>