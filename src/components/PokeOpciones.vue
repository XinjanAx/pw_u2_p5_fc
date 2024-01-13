<template>
  <div class="div_opciones">
    <ul>
        <li>1</li>
        <li>2</li>
        <li>{{pokeid}}</li>
        <li>4</li>       
    </ul>

  </div>
</template>

<script>
export default {
    props:{
        pokeid:{
            type: Number,
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