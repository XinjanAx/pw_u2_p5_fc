const obtenerID=()=>{
    const pokeId1=obtenerAleatorio(600);
    const pokeId2=obtenerAleatorio(600);
    const pokeId3=obtenerAleatorio(600);
    const pokeId4=obtenerAleatorio(600);
    const pokeArray = [pokeId1,pokeId2,pokeId3,pokeId4];
    obrenerPokemon(pokeArray);
}
const obrenerPokemon = (pokeArray) =>{
    const n1 = consumirAPU(pokeArray[0]);
    const n2 = consumirAPU(pokeArray[0]);
    const n3 = consumirAPU(pokeArray[0]);
    const n4 = consumirAPU(pokeArray[0]);

}
function consumirAPU(id){
    return "nombre"
}

const obtenerAleatorio=(m)=>{
    return 1+Math.floor(Math.random()*m)
}

const obtenerIDFachada=()=>{
    obtenerID();
}
export default obtenerIDFachada