const genNombre = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const generadorNombreMascota = function (name, count) {
    let list = []
    const nombres = ['missy', 'rex', 'perro', 'bob', 'luna', 'max', 'sebas', 'gina', 'taxi', 'balto'];
    for (let i = 1; i <= count; i++) {
        list.push({ id: i, nombre: genNombre(nombres) + ' ' + genNombre(nombres), edad: parseInt((Math.random()) * 10), precio: parseInt((Math.random()) * 100) });
    }
    return list;
};
const generadorLista = function (list, anchor) {
    let liString = '';



    for (let i = 0; i < list.length; i++) {
        liString += `
    <li>ID: ${list[i].id}<ul>
        <li>Nombre: ${list[i].nombre}</li>
        <li>Edad: ${list[i].edad}</li>
        <li>Precio: ${list[i].precio}</li>
        <li><button class="btnComprar" data-id="${list[i].id}">Comprar</button></li>
    </ul></li>`;
    }


    anchor.innerHTML = liString;
    document.querySelectorAll(".btnComprar").forEach(function(ele){
        let id = ele.dataset.id;
        ele.addEventListener('click',function(){alert(`Añadido ${id}`);});
    });
};

var listaMascotas = generadorNombreMascota("mascota", 1000);
generadorLista(listaMascotas, listMascotas);
