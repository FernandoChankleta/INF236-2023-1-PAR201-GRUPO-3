import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";

const Record = (props) => (
    <tr>
      <td>{props.record.nombre}</td>
      <td>{props.record.rut}</td>
      <td>{props.record.direccion}</td>
      <td>{props.record.fecha_nacimiento}</td>
      <td>{props.record.sexo}</td>
      <td>{props.record.acompañante}</td>
      <td>{props.record.motivo_consulta}</td>
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

const PacientList = () => {
  const [pacients, setPacients] = useState([]);

  const getUsers = async () => {
    const res = await Axios.get("http://localhost:5000/pacientes");
    setPacients(res.data);
  };

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
    <div style={{marginTop: "150px"}}>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Buscar Paciente" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
      </form>
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
            <th>Sexo</th>
            <th>Acompañante</th>
            <th>Motivo de consulta</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
};

export default PacientList;