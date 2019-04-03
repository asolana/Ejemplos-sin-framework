let sec = document.getElementById('sect');
sec.style.background = "#00d9ff";

//Assignacion asincrona

sec.onclick = ()=>{
    dihola("Aitor");
}

//Funcion asignada a una variable/constante

const dihola = (function (x) {
    alert('Hola ' + x);
});


//Funcion anonima auto invocada
(function (x){
    sec.onclick = function() {
        dihola(x);
    }
})("Aitor");