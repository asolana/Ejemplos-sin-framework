const generadorNombreMascota = function(name,count){
    let list = []
    for (let i = 1; i <= count; i++) {
        list.push({id:i,nombre:name+i,edad:parseInt((Math.random())*10),precio:parseInt((Math.random())*100)});        
    }
    return list;
};
const generadorLista = function(list,anchor){
    let liString = '';

    
    
    for (let i = 0; i < list.length; i++) {
    //     liString += '<li>ID: '+list[i].id+'<ul>';
    //     liString += '<li>Nombre: '+list[i].nombre+'</li>';
    //     liString += '<li>Edad: '+list[i].edad+'</li>';
    //     liString += '<li>Precio: '+list[i].precio+'</li>';
    //     liString += '</ul></li>';
    liString += `
    <li>ID: ${list[i].id}<ul>
        <li>Nombre: ${list[i].nombre}</li>
        <li>Edad: ${list[i].edad}</li>
        <li>Precio: ${list[i].precio}</li>
    </ul></li>`;
    }

    anchor.innerHTML = liString;
};

var listaMascotas = generadorNombreMascota("mascota",1000);
generadorLista(listaMascotas, listMascotas);


//Closure
// (function(anclaje){

//     //Codigo

// })('id');
