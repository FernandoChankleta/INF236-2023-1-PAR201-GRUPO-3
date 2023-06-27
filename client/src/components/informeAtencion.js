import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import DocuPDF from "./vistaPdf";
import { PDFViewer } from '@react-pdf/renderer';
import { useParams, useNavigate } from 'react-router-dom';

function fichaAtencion() {
    const [pacients, setPacients] = useState({
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
    const [verWeb , setVerWeb] = useState(false);
    const [verPdf, setVerPdf] = useState(false);

     
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
  
      setPacients(record);
    }
  
    fetchData();
  
    return;
  }, [params.id, navigate]);
    
    
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
            {pacients ? (
                <>
            {verWeb ? <p> viendo en web</p> : null}
            {verPdf ? (
                <PDFViewer style={{ width: '100%', height: '100vh' }}>
                    <DocuPDF pacients={pacients} />
                </PDFViewer>
            ) : null}
                </>
            ) : null}
        </div>

    );

}

export default fichaAtencion;