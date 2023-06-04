//esta va a ser el crud y api principal para los pacientes

const express = require("express");

const pacienteSchema = require("../models/pacientes");

//creare una ruta expecifica para los pacientes
const router = express.Router();

//crear un paciente
router.post("/paciente/add", (require,response) => {
    const paciente = pacienteSchema(require.body);
    paciente.save()
    .then((evento) => response.json(evento))
    .catch((error) => response.json({message: 'ocurrio el siguiente error al agregar al paciente: ' + error}));
});

//obtener informacion de un/una paciente
router.get("/paciente/:id", (require, response) =>{
    const {id} = require.params;
    pacienteSchema.findById(id)
    .then((evento) => response.json(evento))
    .catch((error) => response.json({message: 'ocurrio el siguiente error al encontrar al paciente: ' + error}));
});

//obtener todos los pacientes
router.get("/pacientes", (require,response) => {
    pacienteSchema.find()
    .then((evento) => response.json(evento))
    .catch((error) => response.json({message: 'ocurrio el siguiente error al obetener todos los pacientes: ' + error}));
});

//borrar un paciente 
router.delete("/borrar/:id", (require,response) => {
    const {id} = require.params;
    pacienteSchema.deleteOne({_id: id})
    .then((evento) => response.json(evento))
    .catch((error) => response.json({message: 'ocurrio el siguiente error al borrar un paciente: ' + error}))

});

//actualizar informacion del paciente 
router.put("/updatePaciente/:id", (require, response) => {
    const {id} = require.params;
    const {nombre, rut, direccion, fecha_nacimiento, comuna, prevision, convenio} = require.body;
    pacienteSchema.updateOne({_id: id}, {$set: {nombre, rut, direccion, fecha_nacimiento, comuna, prevision, convenio}})
    .then((evento) => response.json(evento))
    .catch((error) => response.json({message: 'ocurrio el siguiente error al actualizar informacion del paciente: ' + error}));

});

module.exports = router;