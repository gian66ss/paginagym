async function crearVencimiento(){



    inputNombreCompleto = document.querySelector("#newUserName");
    inputVencimiento = document.querySelector("#Vencimiento");

    const fechaAct = new Date();
    const fechaIng = new Date(inputVencimiento.value);

    console.log(fechaAct);   
    console.log(fechaIng);

    if (fechaIng < fechaAct) {
        console.log("La fecha ingresada es anterior a la fecha actual");
        inputVencimiento.focus();
           span2=document.querySelector(".span2");
           span2.style.display="block"
    } else {
        console.log("La fecha ingresada es posterior a la fecha actual");

         
        let codigoResp;

  
           console.log("creando vencimiento... ");
           console.log("NombreCompleto: " + inputNombreCompleto.value);  
           alert("Vencimiento creado correctamente");
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
}