import React, { useState } from 'react'
import SelectData from '../../componentes/select/SelectData'
import axios from 'axios';
import './crear_libro.css'

function CrearLibro() {


    const [isError,setIsError] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [formData, setFormData] = useState({  });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


      const handleSubmit = async (e) =>  {
        e.preventDefault();
    
        try {
          setIsLoading(true);
          console.log(formData);
          await addlibro(formData);
          setIsLoading(false);
          setIsError(false);
        //   setFormData({ });
          
        } catch (error) {
          setIsError(true);
          setIsLoading(false);
        }
    
      };

  return (
    <div>
      <center>
      <h1>Agregar Libros</h1>
      <div>
      <form onSubmit={handleSubmit}>                
          <label>Titulo</label>
          <input name="titulo" value={formData.nombre} onChange={handleChange}></input>
          <br />
          <label>Edicion</label>
          <input name="edicion" value={formData.nombre} onChange={handleChange}></input>
          <br />
          <label>Autor</label>
          <SelectData listado={"autores"} name="fk_id_autor"  onChange={handleChange}></SelectData>
          <br />
          <label>Editorial</label>
          <SelectData listado={"editorial"} name="fk_id_editorial"  onChange={handleChange}></SelectData>
          <br />
          <label>Tema</label>
          <SelectData listado={"temas"} name="fk_id_tema"  onChange={handleChange}></SelectData>
          
          <br />

          <button type="submit" disabled={isLoading}> {isLoading? "Enviando..":"Enviar" }</button>

        </form>
      </div>
    </center>
    </div>
  )
}

export default CrearLibro


var addlibro =  async (formData) => {
    const url = 'http://localhost/libros';
    const results = await axios.post(url,formData);
}