<template>
<div id="contenedor">
    <header><h1>Pokedex &#128128;</h1></header>
    <form class="form" >
        <div class="div_id">
        <p>ID: <input @keypress.enter="consumirAPI()" type="number" v-model="id"></p>
        </div>
        <div id="div_poke" v-if="validador">
            <p type="Nombre:"><input type="text" v-model="nombre"></p>
            <img v-bind:src="img" alt="">
            <p type="weight:"><input type="text" v-model="ancho"></p>
            <p type="Experciencia base:"><input type="text" v-model="exp_base"></p>
        </div>
    </form>
    
</div>

</template>

<script>
export default {
    data(){
        return{              
            id:null,
            nombre:null,
            ancho:null,
            exp_base:null,
            img:null,
            validador:false 
        }
    },
    methods:{
        async consumirAPI(){
            this.validador=true;
            const {name, weight,base_experience,sprites} = await fetch('https://pokeapi.co/api/v2/pokemon/'+this.id).then(ret=>ret.json())
            this.nombre=name;
            this.ancho=weight;
            this.exp_base=base_experience;
            this.img=sprites.front_default;
        }

    }
    

}
</script >

<style scoped>
.contenedor{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
p:before{
    content: attr(type);
    display: block;
    margin: 5px 2px;
    font-family: 'Courier New', Courier, monospace;
    color: #ffffff; 
}
input{
    border-radius: 5px;
    border: none;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
}
</style>