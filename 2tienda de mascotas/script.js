const generadorNombreMascota = function(tag,count){
    let list = []
    for (let i = 1; i <= count; i++) {
        list.push(tag+" "+i);        
    }
    return list;
};
const generadorLista = function(list,anchor){
    let liString = '';

    
    //Forma facil
    // for (let i = 0; i < list.length; i++) {
    //     liString += '<li>'+list[i]+'</li>';
    // }

    //Forma compleja
    liString = (','+list.toString()+',').replace(/,/g,'</li><li>');
    liString = liString.substring(5,liString.length-4);

    anchor.innerHTML = liString;
};

var listaMascotas = generadorNombreMascota("mascota",1000);
generadorLista(listaMascotas, listName);


//Closure
// (function(anclaje){

//     //Codigo

// })('id');
