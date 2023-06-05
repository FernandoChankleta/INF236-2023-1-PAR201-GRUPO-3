
const express = require("express");

const triageSchema = require("../models/triage");

const router = express.Router();

router.post("/triage/add", (require,response) => {
    const paciente = triageSchema(require.body);
    paciente.save()
    .then((evento) => response.json(evento))
    .catch((error) => response.json({message: 'ocurrio el siguiente error al agregar al paciente: ' + error}));
});

router.get("/triage/:id", (require, response) =>{
    const {id} = require.params;
    triageSchema.findById(id)
    .then((evento) => response.json(evento))
    .catch((error) => response.json({message: 'ocurrio el siguiente error al encontrar al paciente: ' + error}));
});

router.get("/triage", (require,response) => {
    triageSchema.find()
    .then((evento) => response.json(evento))
    .catch((error) => response.json({message: 'ocurrio el siguiente error al obetener todos los pacientes: ' + error}));
});

router.delete("/borrarTriage/:id", (require,response) => {
    const {id} = require.params;
    triageSchema.deleteOne({_id: id})
    .then((evento) => response.json(evento))
    .catch((error) => response.json({message: 'ocurrio el siguiente error al borrar un paciente: ' + error}))
});

router.put("/updateTriage/:id", (require, response) => {
    const {id} = require.params;
    const {motivo_consulta,hora_ingreso, signos_vitales, funcionario, categoria} = require.body;
    triageSchema.updateOne({_id: id}, {$set: {motivo_consulta,hora_ingreso, signos_vitales, funcionario, categoria}})
    .then((evento) => response.json(evento))
    .catch((error) => response.json({message: 'ocurrio el siguiente error al actualizar informacion del paciente: ' + error}));

});

module.exports = router;

