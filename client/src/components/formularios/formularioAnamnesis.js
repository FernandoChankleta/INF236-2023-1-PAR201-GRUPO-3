import React, {useState} from "react";
import { useNavigate } from "react-router";

import Axios from 'axios';

import "bootstrap/dist/css/bootstrap.css";


export default function CrearAnamnesis(){

    const [form, setForm] = useState({
        relato_paciente: "",
        exploracion_fisica: "",
        observacion_general: "",
        diagnostico: "",
        tratamiento: ""
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
            relato_paciente: "",
            exploracion_fisica: "",
            observacion_general: "",
            diagnostico: "",
            tratamiento: ""      
        });
        navigate("ruta showAnamnesis")

    }


    return(
        <form onSubmit = {onSubmit} style={{marginTop: "150"}}>
            <fieldset>
                <legend>Formulario de Anamnesis</legend>
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor= "inputName">Relato Del Paciente: </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder= "Ingrese nombre del paciente"
                        id="inputName"
                        value= {form.nombre}
                        onChange={(evento)=> updateform({nombre: evento.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor= "inputName">Exploracion Fisica: </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder= "Ingrese nombre del paciente"
                        id="inputName"
                        value= {form.nombre}
                        onChange={(evento)=> updateform({nombre: evento.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor= "inputName">Observacion General: </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder= "Ingrese nombre del paciente"
                        id="inputName"
                        value= {form.nombre}
                        onChange={(evento)=> updateform({nombre: evento.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor= "inputName">Diagnostico: </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder= "Ingrese nombre del paciente"
                        id="inputName"
                        value= {form.nombre}
                        onChange={(evento)=> updateform({nombre: evento.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor= "inputName">Tratamiento A Seguir: </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder= "Ingrese nombre del paciente"
                        id="inputName"
                        value= {form.nombre}
                        onChange={(evento)=> updateform({nombre: evento.target.value })}
                    />
                </div>

            </fieldset>




        </form>


    )
}
