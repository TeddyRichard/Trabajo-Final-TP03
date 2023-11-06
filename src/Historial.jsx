import React from "react";
import { Link } from "react-router-dom";


const Historial = () => 
{


  const historialCotizaciones = JSON.parse(localStorage.getItem("historial")) || []
  
    return(
        
        <>
           <h1 className="center separador">Ver Historial 📋</h1>
           <div className=" center div-cotizador">
             <table>
              <thead>
                <tr>
                    <th>Fecha de cotización</th>
                    <th>Propiedad</th>
                    <th>Ubicación</th>
                    <th>Metros cuadrados</th>
                    <th>Póliza mensual</th>
                </tr>
              </thead>
             <tbody>
                <tr>
                
                    {historialCotizaciones.map(cotizaciones => 
                    (<div>
                     <td key={cotizaciones.fechaCotizacion}>{cotizaciones.fechaCotizacion}</td>
                     <td key={cotizaciones.propiedad}>{cotizaciones.propiedad}</td>
                     <td key={cotizaciones.ubicacion}>{cotizaciones.ubicacion}</td>
                     <td key={cotizaciones.metrosCuadrados}>{cotizaciones.metrosCuadrados}</td>
                     <td key={cotizaciones.poliza}>{cotizaciones.poliza}</td>
                    </div>))} 
                  
                </tr>
             </tbody>
            </table>
            <div className="center separador">
              <Link to="/"><button className="button button-outline">VOLVER</button></Link>
            </div>
          </div>
        </>
        
        
    );
}

export default Historial;