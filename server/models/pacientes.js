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
        type: Date,
        required: false 
    },
    sexo: {
        type: String,
        required: false
    },
    acompañante: {
        type: String,
        required: false
    },
    motivo_consulta: {
        type: String,
        required: false
    },
    categoria: {
        type: String, 
        required: false
    }
}, {collection: "pacientes"});

module.exports = mongoose.model("paciente", pacienteSchema);