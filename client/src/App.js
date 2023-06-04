import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Formulario from "./components/formularios/formularioIngreso";
import ShowPacientes from "./components/showPacientes";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/recordlist" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/formulario" element={<Formulario/>} />
       <Route path="/" element={<ShowPacientes/>} />
     </Routes>
   </div>
 );
};
 
export default App;