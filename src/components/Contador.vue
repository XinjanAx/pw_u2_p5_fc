<template>
    <h2>hola comp</h2>
    <h1>Contador {{titulo}}</h1>
    <h3>{{count}} <sup>2</sup> = {{obtenerCuadradoComp}}</h3>
    <button @click="btn_mas">+1</button>
    <button @click="btn_menos">-1</button>
    <h2>chao comp</h2>
</template>

<script>
export default {
    //props:["titulo",'valor'], forma de declaracion 1
    props:{
        titulo:String, //declaracion 2 espesificar el tipo de dato
        valor: {
            type: Number,
            required: true,
            default:100,
            validator(value){
                return value>20
            }
        }
    },
    data(){
        return{
            count: this.valor,
        }
    },
    methods:{
        obtenerCuadrado(){
            return this.count*this.count;
        },
        btn_mas(){
             return this.count+=1;
        },
        btn_menos(){
            this.count-=1;
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

<style scoped>
*{
    background-color: rgba(123, 0, 255, 0.338);
}

button{
    margin: o 10px;
    padding: 5px 15px;
    background-color: rgb(165, 43, 226);
    border-radius: 5px;
    border: 0.5px solid white;
    color: white;
    cursor: pointer;
}
button:hover{
    background-color: rgb(0, 0, 145);
}
h1{
    font-family: cursive;
}
h2{
    color: goldenrod;
}

</style>