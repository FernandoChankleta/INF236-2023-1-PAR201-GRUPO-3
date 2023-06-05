import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 25 + '%'}} src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Logo_Samu.gif"></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <NavLink className="nav-link" to="/formularioIngreso">
               Ingresar Paciente
             </NavLink>
           </li>

           <li className="nav-item">
             <NavLink className="nav-link" to="/formularioTriage">
               Triage
             </NavLink>
           </li>

           <li className="nav-item">
             <NavLink className="nav-link" to="/formularioAnamnesis">
               Anamnesis
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}