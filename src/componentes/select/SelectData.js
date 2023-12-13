import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SelectData({listado,onChange,name}) {

    const [datos, setDatos] = useState([]);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');


    useEffect(() => async () => {
        const url = 'http://localhost/'+listado;
        const results = await axios.get(url);
     setDatos(results.data);
    }, []);

    
  const handleSelectChange = (event) => {
    const valorSeleccionado = event.target.value;
    setOpcionSeleccionada(valorSeleccionado);
    onChange(event)
    // Realiza cualquier acción adicional aquí con el nuevo valor seleccionado
  };

  return (
    <div>
      <select value={opcionSeleccionada} name={name} onChange={handleSelectChange}>
          <option value="0">Selecione un Dato</option>
          {
            datos.map((dato)=>{
                let val = Object.values(dato);
              return(
                <option key={val[0]} value={val[0]}>
                  {val[1]}
                </option>
              )
            })
          }            
        </select>
        {/* {errors.autor && <span>{errors.autor.message}</span>}  */}
    </div>
  )
}

export default SelectData
