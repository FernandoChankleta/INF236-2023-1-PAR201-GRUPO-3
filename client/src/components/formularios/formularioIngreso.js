import React, { useState } from "react";
import { useNavigate } from "react-router";

import Axios from 'axios';

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";


export default function CrearPaciente() {

    const [form, setForm] = useState({
        nombre: "",
        rut: "",
        direccion: "",
        fecha_nacimiento: "",
        comuna: "",
        prevision: "",
        convenio: ""
    });

    const navigate = useNavigate();

    function updateform(value){
        return setForm((prev) => {
            return { ...prev, ...value };
        });

    }

    async function onSubmit(evento) {
        evento.preventDefault();
        await Axios.post("http://localhost:5000/paciente/add", form);
        setForm({
            nombre: "",
            rut: "",
            direccion: "",
            fecha_nacimiento: "",
            comuna: "",
            prevision: "",
            convenio: ""
        });
        navigate("/");

    }
    
    return (
    <form onSubmit = {onSubmit} style={{marginTop: "150"}}>
        <fieldset>
            <legend>Formulario de pacientes</legend>
           
            <div className="form-group">
            <label className="col-form-label mt-4" htmlFor= "inputName"> Nombre: </label>
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
            <label className="col-form-label mt-4" htmlFor= "inputrut"> R.U.T </label>
            <input
            type="text"
            className="form-control"
            placeholder= "Ingrese rut del paciente"
            id="inputrut"
            value= {form.rut}
            onChange={(evento)=> updateform({rut: evento.target.value })}
            />
            </div>
            
            <div className="form-group">
            <label className="col-form-label mt-4" htmlFor= "inputdireccion"> Direccion: </label>
            <input
            type="text"
            className="form-control"
            placeholder= "Ingrese direccion del paciente"
            id="inputdireccion"
            value= {form.direccion}
            onChange={(evento)=> updateform({direccion: evento.target.value })}
            />
            </div>
           
            <div className="form-group">
            <label className="col-form-label mt-4" htmlFor= "inputfecha"> Fecha de nacimiento: </label>
            <input
            type="date"
            className="form-control"
            placeholder= "Ingrese fecha del paciente"
            id="inputfecha"
            value= {form.fecha_nacimiento}
            onChange={(evento)=> updateform({fecha_nacimiento: evento.target.value })}
            />
            </div>
            
            <div className="form-group">
            <label className="col-form-label mt-4" htmlFor= "inputcomuna"> Comuna: </label>
            <input
            type="text"
            className="form-control"
            placeholder= "Ingrese comuna del paciente"
            id="inputcomuna"
            value= {form.comuna}
            onChange={(evento)=> updateform({comuna: evento.target.value })}
            />
            </div>
            
            <div className="form-group">
            <label className="col-form-label mt-4" htmlFor= "inputaprevision"> Prevision: </label>
            <input
            type="text"
            className="form-control"
            placeholder= "Ingrese prevision del paciente"
            id="inputaprevision"
            value= {form.prevision}
            onChange={(evento)=> updateform({prevision: evento.target.value })}
            />
            </div>
            
            <div className="form-group">
            <label className="col-form-label mt-4" htmlFor= "inputconvenio"> convenio: </label>
            <input
            type="text"
            className="form-control"
            placeholder= "Ingrese el convenio del paciente"
            id="inputconvenio"
            value= {form.convenio} 
            onChange={(evento)=> updateform({convenio: evento.target.value })}
            />
            </div>
            
        </fieldset>
        <br></br>
        <div className="form-group">
            <input
            type="submit"
            value="añadir datos de paciente"
            className="btn btn-primary"
            />
        </div>
    </form>
    )
};