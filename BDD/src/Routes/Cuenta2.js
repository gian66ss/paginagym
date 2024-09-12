const { Router } = require('express');
const enrutador = Router();

const CuentaGymController = require('../controladores/CuentaGymController');

enrutador.get('/CuentasGym/mostrar', CuentasGymController.MostrarCuenta);

enrutador.post('/CuentasGym/nuevo', CuentasGymController.NuevaCuenta);

enrutador.put('/CuentasGym/modificar', CuentasGymController.ModificarCuenta);

module.exports = enrutador;