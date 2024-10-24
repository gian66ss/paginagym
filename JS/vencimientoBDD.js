async function crearVencimiento(){

    inputNombreCompleto = document.querySelector("#NombreCompleto");
    inputVencimiento = document.querySelector("#Vencimiento");



     let codigoResp;

  
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //RESOLVER
    if (inputVencimiento.value.match(validRegex)){
        console.log("creando vencimiento... ");
        console.log("NombreCompleto: " + inputNombreCompleto.value);  
        alert("Vencimiento creado correctamente");
        location="http://127.0.0.1:5501/HTML/index.html";
        console.log("ok");
        // Petición HTTP
        try{   
            respuesta = fetch('http://localhost:3001/PagosGym/nuevo', {  // REEMPLAZAR ACA POR LA RUTA CORRESPONDIENTE
                
                method: 'POST', //metodo HTTP -- REEMPLAZAR POR EL METODO CORRESPONDIENTE
                headers: {   //aca decimos que devuelve un JSON
                    'Accept': '*/*',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                mode: "no-cors",    
                body: new URLSearchParams({    // ACA VAN LOS DATOS
                    'NombreCompleto': inputNombreCompleto.value,
                    'Vencimiento': inputVencimiento.value,
                })   
            })
            .then(response => {
                codigoResp = response.status;
                console.log("Respuesta de petición: "+response.status);

                //recargamos la pagina
                if(codigoResp >= 200 && codigoResp < 300){
                    console.log("ok");
                location.reload();
                console.log("Recargando pagina...")
                location.reload();
                }
            });
        }
        catch (error){
            //hubo un error
            console.log("Error en el Vencimiento: " + error);
        }
    }
    else{
        inputVencimiento.focus();
        span2=document.querySelector("span2");
        // span2.style.display="block"
    }
}