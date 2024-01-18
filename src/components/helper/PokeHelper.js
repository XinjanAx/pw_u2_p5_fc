const obtenerID = async ()=>{
    const pokeId1= obtenerAleatorio(600);
    const pokeId2= obtenerAleatorio(600);
    const pokeId3= obtenerAleatorio(600);
    const pokeId4= obtenerAleatorio(600);
    await obrenerPokemon(pokeId1,pokeId2,pokeId3,pokeId4);
}
const obrenerPokemon = async (p1,p2,p3,p4) =>{
    const n1 = await ConsultarPokeNombre(p1);
    const n2 = await ConsultarPokeNombre(p2);
    const n3 = await ConsultarPokeNombre(p3);
    const n4 = await ConsultarPokeNombre(p4);
    const pk1 = {id:p1,nombre:n1}
    const pk2 = {id:p2,nombre:n2}
    const pk3 = {id:p3,nombre:n3}
    const pk4 = {id:p4,nombre:n4}

    const arregloID = [pk1,pk2,pk3,pk4]
    return arregloID;
}
async function ConsultarPokeNombre (id){
    const data= await consumirAPI(id);
    return data.name;
}
const consumirAPI = async (id)=>{
    return  await fetch('https://pokeapi.co/api/v2/pokemon/'+id).then(ret=>ret.json())
 
}

const obtenerAleatorio=(m)=>{
    return 1+Math.floor(Math.random()*m)
}

const obtenerIDFachada=()=>{
    obtenerID();
}
export default obtenerIDFachada