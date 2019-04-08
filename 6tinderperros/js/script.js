
(function(){
    var listMascota = [];
    var listLike = [];
    //Recuperacion de datos
    fetch('http://www.mocky.io/v2/5ca88eb3520000352997b7c8').then(function(response){
        console.log('Respuesta: ',response);
        return response.json();
    }).then(function(json_data){
        // console.log('JSON: ',json_data);
        generadorLista(json_data);
        setMascota(listMascota[0]);
    }).catch(function(err){
        console.log('Error: ',err);
    });

    function generadorLista(json) {
        listMascota = json;
    }

    function setMascota(mascota) {
        let figString = '';
        figString += `
            <figure>
                <img src="${mascota.foto}" alt="Perro" title="Perro" />
                <figcaption>${mascota.nombre}</figcaption>
            </figure>
        `;
        sect_Mascota.innerHTML = figString;
        setButtons(mascota);
    }

    function setButtons(mascota) {
        //&#9829;&#10084;&#128077; &#x1F44D; love like
        let btnSring = '';
        btnSring += `
            <span>&#8249;</span>
            <div id="like"></div>
            <span >&#8250;</span>`;
        sect_Btn.innerHTML = btnSring;
        //Set Previous Button
        sect_Btn.children[0].addEventListener('click',function(){ 
            try {
                if(mascota.id != 0){
                    setMascota(listMascota[mascota.id-1]);
                }
            } catch (error) {
                console.log(error);
            }
        });
        //Set Like Button
        sect_Btn.children[1].addEventListener('click',function(){
            setLike(mascota);
        });
        //Set Next Button
        sect_Btn.children[2].addEventListener('click',function(){
            try {
                if(mascota.id != listMascota.length){
                    setMascota(listMascota[mascota.id+1]);
                }
            } catch (error) {
                console.log(error);
            }
            
        });
        
    }

    function setLike(mascota) {
        let ya_liked = listLike.includes(mascota.id);
        if(!ya_liked){
            listLike.push(mascota.id);
            let strLike = `<li>${mascota.nombre}</li>`;
            ul_Like.innerHTML += strLike;
        }
    }
    

})();


function mostrarLista(){
    console.log(listMascota);
}






/* Codigo para crear las 500 mascotas
let mascota = {
    id:0,
    nombre:name,
    foto:'src'
};

var listMascota = [];
for (let i = 0; i < 500; i++) {
    listMascota.push({id:i,nombre:`mascota ${i}`,foto:'./img/perro.jpg'});
}

console.log(JSON.stringify(listMascota));

*/ 
