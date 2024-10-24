async function crearUser(){

    inputNombre = document.querySelector("#Nombre");
    inputApellido = document.querySelector("#Apellido")
    inputCorreo = document.querySelector("#Correo");
    inputPassword = document.querySelector("#Password");


    


 
    let codigoResp;

  
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputCorreo.value.match(validRegex)){
        console.log("creando usuario... ");
        console.log("Nombre: " + inputNombre.value);
        console.log("Apellido: " + inputApellido.value);
        alert("Usuario registrado correctamente");
        location="http://127.0.0.1:5501/HTML/index.html";
        console.log("ok");
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
                    'Apellido': inputApellido.value,
                    'Correo': inputCorreo.value,
                    'Password': inputPassword.value,
                })   
            })
            .then(response => {
                codigoResp = response.status;
                console.log("Respuesta de petición: "+response.status);

                //recargamos la pagina
                if(codigoResp >= 200 && codigoResp < 300){
                    console.log("ok");
                // location.reload();
                // console.log("Recargando pagina...")
                // location.reload();
                }
            });
        }
        catch (error){
            //hubo un error
            console.log("Error en registro: " + error);
        }
    }
    else{
        inputCorreo.focus();
        span2=document.querySelector(".span2");
        span2.style.display="block"
    }
}
    

function eliminarUser(){
    IDUsuario = document.querySelector("#idUser");

    if (confirm("¿Desea eliminar el usuario")){

        console.log("eliminando usuario "+IDUsuario.value);
        try{
            
            respuesta = fetch('api/usuarios/del/' + IDUsuario.value, { // REEMPLAZAR ACA POR LA RUTA CORRESPONDIENTE
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
    inputCorreo = document.querySelector("#Correo");
    inputPassword = document.querySelector("#Password");
    console.log("ok")
    console.log(inputCorreo.value);
    console.log(inputPassword.value);

    const respuesta = await fetch("http://localhost:3001/CuentasGym/iniciarsesion" 
        , {
            method: "POST", // *GET, POST, PUT, DELETE, etc.    
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            mode: "no-cors",
            body: new URLSearchParams({    // ACA VAN LOS DATOS
                'Correo': inputCorreo.value,
                'Password': inputPassword.value,
            })   
        });
    console.log(respuesta);
    datos = await respuesta.json(); 


    console.log(datos);

    if (datos.length > 0){
        console.log("Con datos");
        datos.forEach(noti => {
            inputCorreo.value = usu.Correo;
            inputPassword.value = usu.Password;
        });
    }
    else{
        console.log("SIN DATOS");
        alert("Datos no encontrados");
    }
    
    
}