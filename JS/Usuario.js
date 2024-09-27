async function  crearUser(){

    inputNombre = document.querySelector("#Nombre");
    inputApellido = "GIAN"
    inputCorreo = document.querySelector("#Correo");
    inputPassword = document.querySelector("#Password");


 
    let codigoResp;

  
    
    console.log("creando usuario... ");
    console.log("Nombre: " + inputNombre.value);
    console.log("Apellido: " + "Gian");
    // Petición HTTP
    try{   
        respuesta = fetch('http://localhost:3001/CuentasGym/nuevo', {  // REEMPLAZAR ACA POR LA RUTA CORRESPONDIENTE
            
            method: 'POST', //metodo HTTP -- REEMPLAZAR POR EL METODO CORRESPONDIENTE
            headers: {   //aca decimos que devuelve un JSON
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            mode: "no-cors",
            body: new URLSearchParams({    // ACA VAN LOS DATOS
                'Nombre': inputNombre.value,
                'Apellido': "Gian",
                'Correo': inputCorreo.value,
                'Password': inputPassword.value
              })   
        })
        .then(response => {
            codigoResp = response.status;
            console.log("Respuesta de petición: "+response.status);

            //recargamos la pagina
            if(codigoResp >= 200 && codigoResp < 300){
            alert("Usuario registrado correctamente");
            console.log("Recargando pagina...")
            location.reload();
            }
        });
    }
    catch (error){
        //hubo un error
        console.log("Error en registro: " + error);
    }

}
    

function eliminarUser(){
    idUsuario = document.querySelector("#idUser");

    if (confirm("¿Desea eliminar el usuario")){

        console.log("eliminando usuario "+idUsuario.value);
        try{
            
            respuesta = fetch('api/usuarios/del/' + idUsuario.value, { // REEMPLAZAR ACA POR LA RUTA CORRESPONDIENTE
                method: 'DELETE', //metodo HTTP -- REEMPLAZAR POR EL METODO CORRESPONDIENTE
                headers: {   
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            console.log("Respuesta HTTP: " + respuesta.status);
        }
        catch (error){
            //hubo un error
            console.log("Error en borrado: " + error);
        }

        console.log("Usuario eliminado");
        
    }
    
    
}

async function buscarUsuario(){
    inputIDUsuario = document.querySelector("#idUsuario");
    inputNombre = document.querySelector("#Nombre");
    inputApellido = "GIAN"
    inputCorreo = document.querySelector("#Correo");
    inputPassword = document.querySelector("#Password");
    
    const respuesta = await fetch("http://localhost:3001/CuentasGym/mostrar/" + inputIDUsuario
        , {
            method: "GET", // *GET, POST, PUT, DELETE, etc.    
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }
        });

    datos = await respuesta.json(); 


    console.log(datos);

    if (datos.length > 0){
        console.log("Con datos");
        datos.forEach(noti => {
            inputIDNoticia.value= noti._id;
            inputAutor.value = noti.autor;
            inputTitulo.value = noti.titulo;
            inputTexto.value = noti.texto;
        });
    }
    else{
        console.log("SIN DATOS");
        alert("Datos no encontrados");
    }
    
    
}