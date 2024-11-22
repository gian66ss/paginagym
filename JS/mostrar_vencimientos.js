async function mostrar_vencimientos(){


    const respuesta = await fetch("http://localhost:3001/PagosGym/mostrar"
        , {
            method: "GET", // *GET, POST, PUT, DELETE, etc.    
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }
        });

    datos = await respuesta.json(); 


    //datos = `[{"_id":"667ca5e2cb1799a0fe91c011","titulo":"se contrató a un canguro como secretario","subtitulo":"es muy bueno en su trabajo","texto":"En el día de ayer hubo una lciitación en la cual concursaron un canguro, un tigre y un elefante. Casi gana el elefante pero se olvidó un colmillo en su casa.","fechahora":"24/07/26 17:55hs"},{"_id":"667cacbe48071f1a90ce56e0","titulo":"se contrató a un canguro como secretario","subtitulo":"es muy bueno en su trabajo","texto":"En el día de ayer hubo una lciitación en la cual concursaron un canguro, un tigre y un elefante. Casi gana el elefante pero se olvidó un colmillo en su casa.","fechahora":"24/07/26 17:55hs"},{"_id":"667cacc248071f1a90ce56e1","titulo":"se contrató a un canguro como secretario","subtitulo":"es muy bueno en su trabajo","texto":"En el día de ayer hubo una lciitación en la cual concursaron un canguro, un tigre y un elefante. Casi gana el elefante pero se olvidó un colmillo en su casa.","fechahora":"24/07/26 17:55hs"},{"_id":"66b16159134105ec643de902","titulo":"hola","texto":"asdsada"}]`;

    console.log(datos);


    const usersInfo = document.getElementById('users-info');
    //usersInfo.innerHTML = '';  // Limpiar el contenedor de usuarios antes de actualizar

    datos.forEach(noti => {

        const userDiv = document.createElement('div');
        userDiv.classList.add('user');

        userDiv.innerHTML = `
            <p><strong>${user.name}</strong></p>
            <label for="date-${index}">Último Pago:</label>
            <input type="date" id="date-${index}" value="${user.lastPayment}">
            <p id="expiration-${index}">Vence el: <strong>${expirationFormatted}</strong></p>
            <p id="alert-${index}" class="alert"></p>
            <button onclick="updatePaymentInfo(${index})">Actualizar Fecha de Pago</button>
        `;

        usersInfo.appendChild(userDiv);


    });
}

async function listar_vencimientos(){


    const respuesta = await fetch("http://localhost:3001/PagosGym/mostrar"
        , {
            method: "GET", // *GET, POST, PUT, DELETE, etc.    
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }
        });
    
    datos = await respuesta.json(); 
    
    
    //datos = `[{"_id":"667ca5e2cb1799a0fe91c011","titulo":"se contrató a un canguro como secretario","subtitulo":"es muy bueno en su trabajo","texto":"En el día de ayer hubo una lciitación en la cual concursaron un canguro, un tigre y un elefante. Casi gana el elefante pero se olvidó un colmillo en su casa.","fechahora":"24/07/26 17:55hs"},{"_id":"667cacbe48071f1a90ce56e0","titulo":"se contrató a un canguro como secretario","subtitulo":"es muy bueno en su trabajo","texto":"En el día de ayer hubo una lciitación en la cual concursaron un canguro, un tigre y un elefante. Casi gana el elefante pero se olvidó un colmillo en su casa.","fechahora":"24/07/26 17:55hs"},{"_id":"667cacc248071f1a90ce56e1","titulo":"se contrató a un canguro como secretario","subtitulo":"es muy bueno en su trabajo","texto":"En el día de ayer hubo una lciitación en la cual concursaron un canguro, un tigre y un elefante. Casi gana el elefante pero se olvidó un colmillo en su casa.","fechahora":"24/07/26 17:55hs"},{"_id":"66b16159134105ec643de902","titulo":"hola","texto":"asdsada"}]`;

    console.log(datos);

    if (respuesta.status >= 200 && respuesta.status < 300){
        datos.forEach(vencimiento => {

            userDiv = ` <div class= "userDiv"
            <p><strong>${user.name}</strong></p>
            <label for="date-${index}">Último Pago:</label>
            <input type="date" id="date-${index}" value="${user.lastPayment}">
            <p id="expiration-${index}">Vence el: <strong>${expirationFormatted}</strong></p>
            <p id="alert-${index}" class="alert"></p>
            <button onclick="updatePaymentInfo(${index})">Actualizar Fecha de Pago</button>
            </div>`;
    
            const usersInfo = document.getElementById('users-info');
            usersInfo.appendChild(userDiv);
    
        });
    }
    else{   
        console.log("código de respuesta: " + respuesta.status);

        div =  `<div class="row">
                    <div clas="col s12">
                        <div class="card-panel noticias">
                        <h6> NO ESTÁ AU TORIZADO A VER LOS DATOS </h6>
        `;

        seccionNoticias = document.querySelector(".SeccionNoticias");
        seccionNoticias.innerHTML += div;
    }
    
}

