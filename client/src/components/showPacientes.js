import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Record = (props) => (
    <tr>
      <td>{props.record.nombre}</td>
      <td>{props.record.rut}</td>
      <td>{props.record.direccion}</td>
      <td>{props.record.fecha_nacimiento}</td>
      <td>{props.record.comuna}</td>
      <td>{props.record.prevision}</td>
      <td>{props.record.convenio}</td>
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

const PacientList = () => {
  const [pacients, setPacients] = useState([]);
  const [tablaPacientes, setTablaPacientes] = useState([]);
  const [busqueda, setbusqueda] = useState("");

  const getUsers = async () => {
    const res = await Axios.get("http://localhost:5000/pacientes");
    setPacients(res.data);
    setTablaPacientes(res.data);
  };

  const handleChange = e => {
    setbusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaPacientes.filter((elemento) =>{
      if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento;
      }
    })
    setPacients(resultadosBusqueda);
  }

  useEffect(() => {
    getUsers();
  }, []);

  function recordList() {
    return pacients.map((pacient) => {
      return (
        <Record
          record={pacient}
          deletePacient={() => deletePacient(pacient._id)}
          key={pacient._id}
        />
      );
    });
  }

  async function deletePacient(id) {
    await Axios.delete(`http://localhost:5000/borrar/${id}`);

    const newPacients = pacients.filter((el) => el._id !== id);
    setPacients(newPacients);
  }

  return (
    <div className="App" style={{marginTop: "100px"}}>
      <div className="containerInput" style={{display: "flex"}}>
        <input style={{width: 700}}
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="busqueda por Nombre del paciente"
          onChange={handleChange}
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <br></br>
      <br></br>
      <h3>Lista de Pacientes</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>R.U.T</th>
            <th>Direccion</th>
            <th>Fecha de nacimiento</th>
            <th>Comuna</th>
            <th>Prevision</th>
            <th>Convenio</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
};

export default PacientList;