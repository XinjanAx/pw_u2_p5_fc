<template>
    <h1>Contador {{titulo}}</h1>
    <h1>{{count}} <sup>2</sup> = {{obtenerCuadradoComp}}</h1>
    <h1>{{count}} <sup>2</sup> = {{obtenerCuadradoComp}}</h1>
    {{obtenerCuadrado()}}
    <h2>adios comp</h2>
</template>

<script>
export default {
    props:["titulo"],
    data(){
        return{
            count: 5,
        }
    },
    methods:{
        obtenerCuadrado(){
           
            return this.count*this.count;
        }
    },
    computed:{
        obtenerCuadradoComp(){
            console.log("cuadrado comp");
            return this.count*this.count;
        }
    }
}
</script>

<style>

</style>