<template>
  <div class="container">
        <head></head>
        <nav></nav>
        <section>
            <div class="div_calculadora">
                
                <div class="div_botones">
                    <div class="display">
                        <label id="a" >{{a}}</label>
                        <label id="op">{{oper}}</label>
                        <label id="b" >{{b}}</label>
                        <div>
                            <label id="pantalla">{{ret}}</label>
                        </div>
                    </div>
                    <button class="btn_doble" @click="resetear()">C</button>
                    <!--Decimal: &#8592;
                        Hex: &#x2190;
                        css:before \02190
                        alert(): \u2190-->
                    <button @click="borrar()">&#8592</button>

                    <button @click="operacion('/')">/</button>

                    <button @click="concatenar(7)">7</button>
                    <button @click="concatenar(8)">8</button>
                    <button @click="concatenar(9)">9</button>

                    <button @click="operacion('x')">X</button>

                    <button @click="concatenar(4)">4</button>
                    <button @click="concatenar(5)">5</button>
                    <button @click="concatenar(6)">6</button>

                    <button @click="operacion('-')">_</button>

                    <button @click="concatenar(1)">1</button>
                    <button @click="concatenar(2)">2</button>
                    <button @click="concatenar(3)">3</button>

                    <button @click="operacion('+')">+</button>

                    <button class="btn_doble" @click="concatenar(0)">0</button>
                    <button @click="concatenar('.')">.</button> 

                    <button @click="calcular()">=</button>
                </div>
            </div>
        </section>
        <footer></footer>
    </div>
</template>

<script>
export default {
    data(){
        return{
            a:'',
            b:'',
            ret:'',
            oper:'',
            siguiente : false
        }
        
    },
    methods:{
        concatenar(num){
            if(!this.siguiente){
                this.a = this.a+num;  
            }else{
                this.b = this.b+num; 
            }
        },
        operacion(op){
            this.siguiente = true;
            this.oper=op;
        },
        calcular(){
            if(!this.a==''&&!this.b==''){
                switch(this.oper){
                    case '+':
                        this.ret = parseFloat(this.a) + parseFloat(this.b);
                    break;
                    case '-':
                        this.ret = parseFloat(this.a)-parseFloat(this.b);
                    break;
                    case 'x':
                        this.ret = parseFloat(this.a)*parseFloat(this.b);
                    break;
                    case '/':
                        this.ret = parseFloat(this.a)/parseFloat(this.b);
                    break;
                }
                
            }else{
                this.ret="numero?";
            }
        },
        borrar(){
            if(!this.b==''){
                this.b=this.b.slice(0,-1);
            }else if(!this.oper==''){
                this.oper='';
                this.siguiente = false;
            }else if(!a==''){
                this.a=this.a.slice(0,-1);
            }
            this.ret='';            
        },
        resetear(){
            this.a='';
            this.b='';
            this.oper='';
            this.ret='';
            this.siguiente = false;
        }
    }
}
</script>

<style scoped>
*{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.div_calculadora{
    background-color: rgb(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    padding: 15px;
    border-radius: 32px;
    box-shadow: 20px 20px 20px rgba(140, 0, 255, 0.329);
}
.div_botones{
    display: grid;
    border-radius: 7px;
    grid-template-columns: repeat(4,75px);
    grid-template-rows: 100px repeat(5,75px);
    
}
button{
    border-radius: 20px;
    margin: 5px;
    padding: 0;
    font-size: 20px;
    box-shadow: 5px 5px 10px -3px rgba(0, 0, 0, 0.421);
}
.btn_doble{
    grid-column:  span 2;
}
button:active{
    background-color:hsl(166, 100%, 15%);
    color: #AE81D3;
}
.display{
    grid-column:  span 4;
    padding: 15px;
    margin: 10px 20px;
    border-color: rgb(40, 169, 0);
    background-color: rgb(0, 0, 0,0.5);
    border-radius: 20px;
    text-align: right;
    color: white;
    box-shadow: 0px 0px 0px 7px rgba(0, 0, 0, 0.337); 
}
</style>