/*jshint esversion: 6 */

const genNombre = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

const generadorListaMascota = function () {
    let list = [];
    const nombres = ['missy', 'rex', 'perro', 'bob', 'luna', 'max', 'sebas', 'gina', 'taxi', 'balto'];
    for (let i = 1; i <= 100; i++) {
        list.push({id: i,nombre: genNombre(nombres) + ' ' + genNombre(nombres),edad: parseInt((Math.random()) * 10),precio: parseInt((Math.random()) * 100),disponible: true});
    }
    console.log('mascotas: ',JSON.stringify(list));
    return list;
};

const carrito = [];
const mascotas = generadorListaMascota();

const generadorLista = function (list, anchor) {
    let liString = '';
    
    for (let i = 0; i < list.length; i++) {
        liString += `
    <li><ul><li>ID: ${list[i].id}</li>
        <li>Nombre: ${list[i].nombre}</li>
        <li>Edad: ${list[i].edad}</li>
        <li>Precio: ${list[i].precio}</li>
        <li><button data-id="${list[i].id}">Comprar</button></li>
    </ul></li>`;
    }


    anchor.innerHTML = liString;

    //Funcionalidad boton comprar
    document.querySelectorAll("li li button").forEach(function(ele){
        let id = ele.dataset.id;
        ele.onclick = function(){
            const ya_dded = carrito.includes(id);
            if(!ya_dded){
                var padre = this.parentElement.parentElement;
                listCart.innerHTML += `<li data-id='${id}'>${list[id].nombre} - ${list[id].precio}€ <label><b>X</b></label></li>`;
                //Funcionalidad Borrar del carro
                document.querySelectorAll("li>label").forEach(function(ele){
                    ele.onclick = function(){
                        this.parentElement.remove();
                        carrito.splice(carrito.indexOf(id),1);
                        console.log('Carrito: ',carrito);
                    };
                });
                this.classList.add('rojo');
                for (const litem of padre.children) {
                    litem.classList.add('rojo');
                }
                carrito.push(id);
                console.log('Carrito: ',carrito); 
            }else{
                console.log('Carrito: ya estava añadido'); 
            }
              
        };
    });

    
    
};

fetch('http://www.mocky.io/v2/5ca618133400006a0076af23').then(function(response){
    console.log('Respuesta: ',response);
    return response.json();
}).then(function(json_data){
    console.log('JSON: ',json_data);
    generadorLista(json_data, listMascotas);
}).catch(function(err){
    console.log('Error: ',err);
});

// generadorLista(mascotas, listMascotas);

    // 1 mostrar carrito !
    // 2 boton rojo en el onclick !
    // 3 segundo click no se añade de nuevo
    // 4 toda la linea roja en el primer click
