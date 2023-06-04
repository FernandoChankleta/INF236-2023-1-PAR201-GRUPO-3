import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
  const [form, setForm] = useState({
    nombre: "",
    rut: "",
    direccion: "",
    fecha_nacimiento: "",
    comuna: "",
    prevision: "",
    convenio: "",
    record: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/paciente/${params.id.toString()}`);

 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     console.log(record);
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      nombre: form.nombre,
      rut: form.rut,
      direccion: form.direccion,
      fecha_nacimiento: form.fecha_nacimiento,
      comuna: form.comuna,
      prevision: form.prevision,
      convenio: form.convenio
    };
  
    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/updatePaciente/${params.id.toString()}`, {
      method: "PUT",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
    navigate("/");
  }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Actualizar informacion de los pacientes</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="nombre">Nombre: </label>
         <input
           type="text"
           className="form-control"
           id="nombre"
           value={form.nombre}
           onChange={(e) => updateForm({ nombre: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="rut">Rut: </label>
         <input
           type="text"
           className="form-control"
           id="rut"
           value={form.rut}
           onChange={(e) => updateForm({ rut: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="direccion">Direccion: </label>
         <input
           type="text"
           className="form-control"
           id="direccion"
           value={form.direccion}
           onChange={(e) => updateForm({ direccion: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="fecha_nacimiento">Fecha de nacimiento: </label>
         <input
           type="text"
           className="form-control"
           id="fecha_nacimiento"
           value={form.fecha_nacimiento}
           onChange={(e) => updateForm({ fecha_nacimiento: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="comuna">Comuna: </label>
         <input
           type="text"
           className="form-control"
           id="comuna"
           value={form.comuna}
           onChange={(e) => updateForm({ comuna: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="prevision">prevision: </label>
         <input
           type="text"
           className="form-control"
           id="prevision"
           value={form.prevision}
           onChange={(e) => updateForm({ prevision: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="convenio">Convenio: </label>
         <input
           type="text"
           className="form-control"
           id="convenio"
           value={form.convenio}
           onChange={(e) => updateForm({ convenio: e.target.value })}
         />
       </div>
        <br></br>
       <div className="form-group">
         <input
           type="submit"
           value="Update pacientes"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}