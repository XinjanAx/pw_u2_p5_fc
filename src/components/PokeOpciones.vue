<template>
  <div class="div_opciones">
    <ul>
        <li v-for="pokeI in pokeArreglo" :key="pokeI.id" @click="$emit('clickOpcion',pokeI.id)">{{pokeI.nombre}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props:{
        pokeArreglo:{
            type: Array,
            required: true
        }
    },
    data(){
        return
    }
}
</script>

<style>
.div_opciones{
    display: flex;
    justify-content: center;
}
ul{
    list-style: none;
}
li{
    width: 205px;
    background-color: whitesmoke;
    border-radius: 5px;
    margin: 10px 0;
}
li:hover{
    filter: brightness(0.8);
}
</style>