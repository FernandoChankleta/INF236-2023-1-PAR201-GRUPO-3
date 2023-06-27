import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function fichaAtencion() {
    const [pacients, setPacients] = useState([]);
    const [verWeb , setVerWeb] = useState(false);
    const [verPdf, setVerPdf] = useState(false);

    const getUsers = async () => {
        const res = await Axios.get("http://localhost:5000/pacientes");
        setPacients(res.data);
      };
    useEffect(() => {
        getUsers();
    }, []);
    
    
    const Menú = () => {
        return(
            <nav>
                <button 
                    onClick={() => {
                        setVerWeb(!verWeb);
                        setVerPdf(false);
                    }}
                > 
                    {verWeb ? "Ocultar Web" : "Ver Web"}
                </button>
                <button 
                    onClick={() => {
                        setVerWeb(false);
                        setVerPdf(!verPdf);
                    }}
                >
                    {verPdf ? "Ocultar PDF" : "Ver PDF"}
                </button>
                <button>Descargar PDF</button>
            </nav>
        );
    };

    return (
        <div>
            <Menú />
            {verWeb ? <p> viendo en web</p> : null}
            {verPdf ? <p> PDF</p> : null}
        </div>

    );

}

export default fichaAtencion;