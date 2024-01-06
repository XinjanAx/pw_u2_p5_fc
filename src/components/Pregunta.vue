<template>
<div id="contenedor">
    <img class="gojō" src="https://i.pinimg.com/originals/d2/23/d9/d223d948ba7dd7c538a969d712d64bfe.gif" alt="jujutsu">
    <input type="text">
    <div class="dark"></div>
    <div class="div_pre">
        <input v-model="pregunta" type="text">
        <p>Recuerda q debes parpadear y tomar awita</p>
        <h2>{{pregunta}}</h2>
        <h1>Si,No....</h1>
    </div>
    


</div>
</template>

<script>
export default {
    data(){
        return{
            pregunta: '¿Vas a tomar awita?'
        }
    },
    watch:{
        pregunta(value,oldValue){
            console.log(value);
            console.log(oldValue);
            if(value.includes('?'))this.consumirAPI();else return; 
        }
    },
    methods:{
        async consumirAPI(){
            const {answer, image} = await fetch('https://yesno.wtf/api').then(ret=>ret.json())
            console.log('answer: '+answer);
            console.log('image: '+image);
        }
    }
    

}
</script>

<style scoped>
*{
    color: white;
}
.dark, .gojō{
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    
}
.dark{
    background-color: rgba(0, 0, 0, 0.4);
}
input{
    width: 250px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: rgb(0, 0, 0, 0.2);
    box-shadow: 0 0 20px rgba(140, 0, 255, 0.329);
}

.div_pre{
    position: relative;
}
</style>