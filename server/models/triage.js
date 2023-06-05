const mongoose = require("mongoose");

const triageSchema = mongoose.Schema({

    motivo_consulta: {
        type: String,
        required: false
    },
    hora_ingreso: {
        type: String,
        required: false
    },
    signos_vitales:{
        type: String,
        required: false
    },
    funcionario: {
        type: String,
        required: false
    },
    categoria: {
        type: String,
        required: false
    }

}, {collection: "triage"});

module.exports = mongoose.model("triage", triageSchema);

    // id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "paciente"
    // },