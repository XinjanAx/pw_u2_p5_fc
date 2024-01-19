<template>
  <div class="container">
    <img :src="urlImg" alt="no img">
    <label for="">{{texto}}</label>

  </div>
</template>

<script>
export default {
    props:{
        urlImg:String,
        texto:String
    }
}
</script>

<style>
.container{
    display: grid;
   justify-content: center;
   align-items: center;
   margin: 0px 37px
}


img{
    width: 200px;
    
}


label{
    font-size: 27px;
}
</style>