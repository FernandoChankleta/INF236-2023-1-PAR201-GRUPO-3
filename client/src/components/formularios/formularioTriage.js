import React, {useState} from "react";
import { useNavigate } from "react-router";

import Axios from 'axios';

import "bootstrap/dist/css/bootstrap.css";


export default function IngresoPaciente(){

    const [form, setForm] = useState({
        //id: "",
        motivo_consulta: "",
        hora_ingreso: "",
        signos_vitales: "",
        funcionario: "",
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
        await Axios.post("http://localhost:5000/triage/add", form);
        setForm({
            //id: "",
            motivo_consulta: "",
            hora_ingreso: "",
            signos_vitales: "",
            funcionario: "",
            categoria: ""
        });
        navigate("/show");
    }

    return (
        <form onSubmit = {onSubmit} style={{marginTop: "150"}}>
        <fieldset>
            <legend>Formulario Triage</legend>

            <div className="form-group">
            <label className="col-form-label mt-4" htmlFor= "inputDefault"> Motivo De Consulta: </label>
            <input
            type="text"
            className="form-control"
            placeholder= "Ingrese motivo de consulta del paciente"
            id="inputDefault"
            value= {form.motivo_consulta}
            onChange={(evento)=> updateform({motivo_consulta: evento.target.value })}
            />
            </div>
            <div className="form-group">
            <label className="col-form-label mt-4" htmlFor= "inputDefault"> Hora De Ingreso: </label>
            <input
            type="text"
            className="form-control"
            placeholder= "Ingrese la hora de ingreso del paciente"
            id="inputDefault"
            value= {form.hora_ingreso}
            onChange={(evento)=> updateform({hora_ingreso: evento.target.value })}
            />
            </div>
            <div className="form-group">
            <label className="col-form-label mt-4" htmlFor= "inputDefault"> Signos Vitales: </label>
            <input
            type="text"
            className="form-control"
            placeholder= "Ingrese Signos Vitales del paciente"
            id="inputDefault"
            value= {form.signos_vitales}
            onChange={(evento)=> updateform({signos_vitales: evento.target.value })}
            />
            </div>
            <div className="form-group">
            <label className="col-form-label mt-4" htmlFor= "inputDefault"> Funcionario A Cargo: </label>
            <input
            type="text"
            className="form-control"
            placeholder= "Ingrese el Funcionario a cargo del paciente"
            id="inputDefault"
            value= {form.funcionario}
            onChange={(evento)=> updateform({funcionario: evento.target.value })}
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


}