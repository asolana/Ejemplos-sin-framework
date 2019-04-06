fetch('http://www.mocky.io/v2/5ca618133400006a0076af23').then(function(response){
    console.log('Respuesta: ',response);
    return response.json();
}).then(function(json_data){
    console.log('JSON: ',json_data);
}).catch(function(err){
    console.log('Error: ',err);
});