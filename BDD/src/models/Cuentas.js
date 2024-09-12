const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');
const CuentaSchema = new Schema({
    Nombre: {
        type: String,
         required: true
    },
    Apellido: {
        type:String,
        required: true
    },
    Correo: {
        type: String,
        required: true,
    },
   }, {
        timestamps: true
   });
   
// Creamos función que encripta contraseña
//TicketsSchema.methods.encriptarPass = async password => {
//    const salt = await bcrypt.genSalt(10);
//    return await bcrypt.hash(password, salt);
//}
    
// Función para verificar si la contraseña es correcta
//TicketsSchema.methods.matchPassword = async function (password) {
//    return await bcrypt.compare(password, this.password);
//}

// Modelo creado a partir del esquema
module.exports = model('CrearCuenta', CuentaSchema, 'CrearCuenta');