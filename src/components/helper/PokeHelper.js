const obtenerID=()=>{
    const pokeId1=obtenerAleatorio(600)
    const pokeId2=obtenerAleatorio(600)
    const pokeId3=obtenerAleatorio(600)
    const pokeId4=obtenerAleatorio(600)
    const PokeArray = [pokeId1,pokeId2,pokeId3,pokeId4]
}
const obtenerAleatorio=(m)=>{
    return 1+Math.floor(Math.random()*m)
}

const obtenerIDFachada=()=>{
    obtenerID();
}
export default obtenerIDFachada