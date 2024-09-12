//importamos el modelo
const CuentasGym = require('../models/Cuentas.js');

//creamos el nuevo controlador
const CuentasGymController = {};

CuentasGymController.MostrarCuenta = async (req, res) => {
 const listado = await CuentasGym.find(); //treaemos todos los datos del modelo
 res.send(listado); //lo enviamossssssss
}

CuentasGymController.ModificarCuenta = async (req, res) => {
    return 0;
   } 
   

CuentasGymController.NuevaCuenta= async (req, res) => {
    // Para obtener un dato en particular
    const { Nombre, Apellido, Correo } = req.body;
    console.log(req.body);

    // Si existen los 4 datos
    if ( Nombre && Apellido && Correo ) {
        // Creamos un nuevo item
        const NuevaCuenta = new CuentasGym ({Nombre, Apellido, Correo});
        console.log(this.NuevaCuenta);


        try {
            // Guardamos el nuevo item 
            let r = await NuevoCuenta.save();

            // Verificamos si se creó el recurso
            if (r){
                res.status(200).json({msg: 'Cuenta creado'});
            } else {
                res.status(500).json({error: 'No se pudo crear la Cuenta'});
            }
        } catch (e) {
            console.log(e);
            res.status(500).json({error: e});
        }
        
    }
    else {
        res.status(500).json({error: 'faltan datos'});
    }

    
};

CuentasGymController.EliminarItem = async (req, res) => {
    const id = req.params.id;

    if (id){
        console.log(id);
        
        try{
            await Tickets.findByIdAndDelete(id);
        }
        catch (err) { 
            console.log("Error en el delete: "+error);
            res.status(500).json({error: err});
        }

        res.send("ID ELIMINADO");
    } else{
        res.send("Falta ID");
    }
};


module.exports = TicketsController;