import React, { useState } from "react";
import { useNavigate } from "react-router";

import axios from "axios";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";


export default function CrearPaciente() {

    const [form, setForm] = useState({
        nombre: "",
        rut: "",
        direccion: "",
        fecha_nacimiento: "",
        sexo: "",
        acompañante: "",
        motivo_consulta: "",
        categoria: ""

    });

    const navigate = useNavigate();

    function updateform(value){
        return setForm((prev) => {
            return { ...prev, ...value };
        });

    }

    async function onSubmit(evento) {
        evento.preventDefault();
        await axios.post("http://localhost:5000/paciente/add", form);
        setForm({
            nombre: "",
            rut: "",
            direccion: "",
            fecha_nacimiento: "",
            sexo: "",
            acompañante: "",
            motivo_consulta: "",
            categoria: ""
        });
        navigate("/");

    }
    
    return (
    <form onSubmit = {onSubmit} style={{marginTop: "150"}}>
        <fieldset>
            <legend>Formulario de pacientes</legend>
           
            <div className="form-group">
            <label className="col-form-label mt-4" for= "inputName"> Nombre: </label>
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
            <label className="col-form-label mt-4" for= "inputrut"> R.U.T </label>
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
            <label className="col-form-label mt-4" for= "inputdireccion"> Direccion: </label>
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
            <label className="col-form-label mt-4" for= "inputfecha"> Fecha de nacimiento: </label>
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
            <label className="col-form-label mt-4" for= "inputsexo"> Sexo: </label>
            <input
            type="text"
            className="form-control"
            placeholder= "Ingrese sexo del paciente"
            id="inputsexo"
            value= {form.sexo}
            onChange={(evento)=> updateform({sexo: evento.target.value })}
            />
            </div>
            
            <div className="form-group">
            <label className="col-form-label mt-4" for= "inputacompañante"> Acompañante: </label>
            <input
            type="text"
            className="form-control"
            placeholder= "Ingrese acompañante del paciente"
            id="inputacompañante"
            value= {form.acompañante}
            onChange={(evento)=> updateform({acompañante: evento.target.value })}
            />
            </div>
            
            <div className="form-group">
            <label className="col-form-label mt-4" for= "inputmotivo"> Motivo de consulta: </label>
            <input
            type="text"
            className="form-control"
            placeholder= "Ingrese el motivo del paciente"
            id="inputmotivo"
            value= {form.motivo_consulta} 
            onChange={(evento)=> updateform({motivo_consulta: evento.target.value })}
            />
            </div>
            
            <div className="form-group">
                <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="positionOptions"
                    id="position1"
                    value="Categoria 1"
                    checked= {form.categoria ==="Categoria 1"}
                    onChange={(evento) => updateform({categoria: evento.target.value})}
                />
                <label htmlFor="Categoria 1" className="form-check-label">Categoria 1</label>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="positionOptions"
                    id="position2"
                    value="Categoria 2"
                    checked= {form.categoria ==="Categoria 2"}
                    onChange={(evento) => updateform({categoria: evento.target.value})}
                />
                <label htmlFor="Categoria 2" className="form-check-label">Categoria 2</label>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="positionOptions"
                    id="position3"
                    value="Categoria 3"
                    checked= {form.categoria ==="Categoria 3"}
                    onChange={(evento) => updateform({categoria: evento.target.value})}
                />
                <label htmlFor="Categoria 3" className="form-check-label">Categoria 3</label>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="positionOptions"
                    id="position4"
                    value="Categoria 4"
                    checked= {form.categoria ==="Categoria 4"}
                    onChange={(evento) => updateform({categoria: evento.target.value})}
                />
                <label htmlFor="Categoria 4" className="form-check-label">Categoria 4</label>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="positionOptions"
                    id="position5"
                    value="Categoria 5"
                    checked= {form.categoria ==="Categoria 5"}
                    onChange={(evento) => updateform({categoria: evento.target.value})}
                />
                <label htmlFor="Categoria 5" className="form-check-label">Categoria 5</label>
                </div>
            </div>
        </fieldset>
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