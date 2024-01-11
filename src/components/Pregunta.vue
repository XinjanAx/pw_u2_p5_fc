<template>
<div id="contenedor">
    <img v-if="img" class="gojō" v-bind:src="img" alt="jujutsu">
    <div class="dark"></div>
    <div class="div_pre">
        <input v-model="pregunta" type="text">
        <p>Recuerda q debes parpadear y tomar awita</p>
        <div v-if="validacion">
            <h2>{{pregunta}}</h2>
            <p>{{respuesta}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            pregunta: '',
            respuesta: null,
            img: null,
            validacion:false
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
            this.validacion= true;
            this.respuesta='.';
            const {answer, image} = await fetch('https://yesno.wtf/api').then(ret=>ret.json())
            this.respuesta='..';
            this.respuesta='...';
            this.respuesta = answer=='yes'?'SI':'NO';
            this.img = image;
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
    backdrop-filter: blur(10px);
    box-shadow: 0 0 20px rgba(140, 0, 255, 0.329);
}

.div_pre{
    position: relative;
}
</style>