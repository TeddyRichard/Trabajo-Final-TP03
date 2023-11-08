import React, { useState, useEffect } from "react";


const Formulario = () =>
{

  const [metros2, setMetros2] = useState(20);
  const [valorPoliza, setValorPoliza] = useState(0);

  const [propiedades, setPropiedades] = useState([])
  useEffect( () =>
  {
      fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
      .then((response) => response.json())
      .then((propiedades) => setPropiedades(propiedades))
  }, []);

  const [selectedPropiedad, setSelectedPropiedad] = useState(-1);

  const handlePropiedadChange = (event) => 
    { 
      setSelectedPropiedad(event.target.value);
      
    };

    const [ubicaciones, setUbicaciones] = useState([])


    useEffect( () =>
    {
         fetch("https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones")
        .then((response) => response.json())
        .then((ubicaciones) => setUbicaciones(ubicaciones))
    }, []);

    const [selectedUbicacion, setSelectedUbicacion] = useState(-1);

    const handleUbicacionChange = (event) =>
    {
        setSelectedUbicacion(event.target.value);
        
    }; 



    const realizarCotizacion = (event) => 
    {
        event.preventDefault();
        if (selectedPropiedad && selectedUbicacion && metros2)
         {
          const costoM2 = 35.9;
          const cotizacion = costoM2 * propiedades[selectedPropiedad].factor * ubicaciones[selectedUbicacion].factor * metros2;
    
          setValorPoliza(cotizacion.toFixed(2));
          console.log(cotizacion)
         }
    }
    
    const guardarHistorial = ()=> 
    {
      const datosCotizacion = {
                          fechaCotizacion: new Date().toLocaleString(),
                          propiedad:       propiedades[selectedPropiedad].tipo,
                          ubicacion:       ubicaciones[selectedUbicacion].tipo,
                          metrosCuadrados: metros2,
                          poliza:          valorPoliza,
                         }
      const historial = JSON.parse(localStorage.getItem("historial")) || []
            historial.push(datosCotizacion)
            localStorage.setItem("historial", JSON.stringify(historial))

    }
    
    return (
      <>

        <form className="center div-cotizador">
          <h2 className="center separador">Complete los Datos Solicitados</h2>           
              <div>
              <label htmlFor="propiedad">Seleccione el Tipo de Propiedad</label>
                <select id="propiedad" value={selectedPropiedad} onChange={ handlePropiedadChange}>
                    <option value={-1}>Seleccionar</option>
                    {propiedades.map((propiedad,i) => 
                    (<option key={propiedad.id} value={i} >{propiedad.tipo}</option>))}
                </select>
              </div>
              <div>
              <label htmlFor="ubicacion">Seleccione su Ubicación</label>
                <select id="ubicacion" value={selectedUbicacion} onChange={handleUbicacionChange}>
                   <option value={-1}>Seleccionar</option>
                   {ubicaciones.map((ubicacion,i) => 
                   (<option key={ubicacion.id} value={i} >{ubicacion.tipo}</option>))}
                </select>
              </div>
              <div>
              <label htmlFor="metros2">Ingrese los Metros Cuadrados</label>
                 <input type="number" id="metros2" value={metros2} placeholder="20" min="20" max="500" 
                  onChange={ (event) => setMetros2(event.target.value)}
                 />
              </div>
            
       
            <div className="center separador">
                <button className="button button-outline" onClick={realizarCotizacion}>Cotizar</button>
            </div>
            <div className="center separador">
              <p className="importe">
                  Precio estimado: $ <span id="valorPoliza" value={valorPoliza}>{valorPoliza}</span>
                  <span className="guardar" title="Guardar en historial" onClick={guardarHistorial}>💾 </span>
              </p>
            </div>
        </form>
      
     </>
    )
}

export default Formulario;