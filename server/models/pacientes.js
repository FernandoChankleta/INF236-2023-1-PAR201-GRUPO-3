const mongoose = require("mongoose");

const pacienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: false
    },
    rut: {
        type: String,
        required: false
    },
    direccion: {
        type: String,
        required: false
    },
    fecha_nacimiento: {
        type: String,
        required: false 
    },
    comuna: {
        type: String,
        required: false
    },
    prevision: {
        type: String,
        required: false
    },
    convenio: {
        type: String,
        required: false
    }
}, {collection: "pacientes"});

module.exports = mongoose.model("paciente", pacienteSchema);