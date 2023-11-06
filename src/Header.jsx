import React from "react";
import { Link } from "react-router-dom";

const Header = () => 
{
    return(
      
       <>
         <div className="historial"><Link to="Historial"><span title="Ver Historial">📋</span></Link></div>
          <h1 className="center separador">Seguros del hogar 🏡</h1>              
       </>

     
    )

}     


export default Header;