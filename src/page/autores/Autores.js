import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './autores.css';

function Autores() {
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get('http://localhost:3001/autores'); // Ajusta la URL según tu configuración
        setAutores(results.data);
      } catch (error) {
        console.error('Error en la solicitud Axios:', error);
        // Puedes manejar el error aquí o lanzarlo nuevamente para que lo capture otro bloque catch
        throw error;
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <center>
        <h1>Autores</h1>
        <div>
          <table className='tabla_temas'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
              </tr>
            </thead>
            <tbody>
              {autores.map((autor) => (
                <tr key={autor.id_autor}>
                  <td>{autor.nombre}</td>
                  <td>{autor.apellidos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
}

export default Autores;


//////////////////////////
