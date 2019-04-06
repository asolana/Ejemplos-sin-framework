var listMascota = [];
//Recuperacion de datos
fetch('http://www.mocky.io/v2/5ca7748e520000630097b5d0').then(function(response){
    console.log('Respuesta: ',response);
    return response.json();
}).then(function(json_data){
    // console.log('JSON: ',json_data);
    generadorLista(json_data);
}).catch(function(err){
    console.log('Error: ',err);
});


function generadorLista(json) {
    listMascota = json;
}
console.log(listMascota);





/* Codigo para crear las 500 mascotas
let mascota = {
    id:0,
    nombre:name,
    foto:'src'
};



for (let i = 0; i < 500; i++) {
    listMascota.push({id:i,nombre:`mascota ${i}`,foto:'src'});
}

console.log(JSON.stringify(listMascota));


*/ 