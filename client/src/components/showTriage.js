import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Record = (props) => (
    <tr>
      <td>{props.record.motivo_consulta}</td>
      <td>{props.record.hora_ingreso}</td>
      <td>{props.record.signos_vitales}</td>
      <td>{props.record.funcionario}</td>
      <td>{props.record.categoria}</td>
      <td>
        <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Editar</Link> |
        <button className="btn btn-link"
          onClick={() => {
            props.deletePacient(props.record._id);
          }}
        >Borrar</button>
      </td>
    </tr>
  );

const TriageList = () => {
    const [triage, setTriage] = useState([]);

    const getUsers = async () => {
        const res = await Axios.get("http://localhost:5000/triage");
        setTriage(res.data);
    };

    useEffect(() => {
        getUsers();
    }, []);

    function recordList() {
        return triage.map((triage) => {
            return (
                <Record
                record = {triage}
                deleteTriage = {() => deleteTriage(triage._id)}
                key= {triage._id}
                />
            );
        });
    }

    async function deleteTriage(id) {
        await Axios.delete(`http://localhost:5000/borrarTriage/${id}`);

        const newTriage = triage.filter((el) => el._id !== id);
        setTriage(newTriage);
    }

    return (
        <div className="App" style={{marginTop: "100px"}}>
            <h3>Lista de Pacientes</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Motivo De Consulta</th>
                        <th>Hora De Ingreso</th>
                        <th>Signos Vitales</th>
                        <th>Funcionario</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>{recordList()}</tbody>
            </table>
        </div>



    )


}

export default TriageList;