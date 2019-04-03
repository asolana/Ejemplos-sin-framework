const generadorNombreMascota = function(name,age,price,count){
    let list = []
    for (let i = 1; i <= count; i++) {
        let listItem = {id:i,nombre:name+i,edad:age,precio:price};
        list.push(listItem);        
    }
    return list;
};
const generadorLista = function(list,anchor){
    let liString = '';

    
    
    for (let i = 0; i < list.length; i++) {
        liString += '<li>'+list[i].id+'<ul>';
        liString += '<li>'+list[i].nombre+'</li>';
        liString += '<li>'+list[i].edad+'</li>';
        liString += '<li>'+list[i].precio+'</li>';
        liString += '</ul></li>';

    }

    anchor.innerHTML = liString;
};

var listaMascotas = generadorNombreMascota("mascota",4,10,1000);
generadorLista(listaMascotas, listMascotas);


//Closure
// (function(anclaje){

//     //Codigo

// })('id');
