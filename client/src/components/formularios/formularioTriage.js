import React, {useState} from "react";
import { useNavigate } from "react-router";

import Axios from 'axios';

import "bootstrap/dist/css/bootstrap.css";


export default function IngresoPaciente(){

    const [form, setForm] = useState({
        motivo_consulta: "",
        hora_ingreso: "",
        peso: "",
        pulso: "",
        presion_arterial: "",
        temperatura: "",
        nivel_dolor: "",
        categoria: ""
    });
    
    const navigate = useNavigate();

    function updateform(value){
        return setForm((prev) => {
            return { ...prev, ...value};
        });
    }

    async function onSubmit(evento) {
        evento.preventDefault();
        await Axios.post("ruta", form);
        setForm({
            motivo_consulta: "",
            hora_ingreso: "",
            peso: "",
            pulso: "",
            presion_arterial: "",
            temperatura: "",
            nivel_dolor: "",
            categoria: ""
        });
        navigate("ruta del showtriage");
    }

    return (
        <form onSubmit = {onSubmit} style={{marginTop: "150"}}>
        <fieldset>
            <legend>Formulario Triage</legend>

            <div className="form-group">
            <label className="col-form-label mt-4" htmlFor= "inputDefault"> motivo_consulta: </label>
            <input
            type="text"
            className="form-control"
            placeholder= "Ingrese nombre del paciente"
            id="inputDefault"
            value= {form.nombre}
            onChange={(evento)=> updateform({nombre: evento.target.value })}
            />
            </div>
        
        
        
        
        
        
        
        </fieldset>
        </form>



    )


}