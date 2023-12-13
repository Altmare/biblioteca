import React, { useState } from 'react';
import axios from 'axios';
import './agregartema.css';

function Agregartema() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await addTemas(formData);
      setIsLoading(false);
      setIsError(false);
      // Considera si quieres reiniciar completamente el formData o solo ciertos campos.
      setFormData({});
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <center>
      <h1>Agregar Tema</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Tema:
            <input name="nombre" value={formData.nombre} onChange={handleChange}></input>
          </label>
          {isError && <span>Algo salió mal</span>}
        </div>
        <button type="submit" disabled={isLoading}>{isLoading ? "Enviando.." : "Enviar"}</button>
      </form>
    </center>
  );
}

export default Agregartema;

var addTemas = async (formData) => {
  const url = 'http://localhost/temas';
  try {
    const results = await axios.post(url, formData);
    return results.data; // Puedes retornar datos adicionales si es necesario
  } catch (error) {
    throw error; // Lanza el error para que pueda ser capturado en el catch de handleSubmit
  }
};
