import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Temas() {
  const [temas, setTemas] = useState([]);

  useEffect(() => {
    const getTemas = async () => {
      try {
        const response = await axios.get('http://localhost:3001/temas');
        setTemas(response.data);
      } catch (error) {
        console.error('Error fetching temas:', error);
      }
    };

    getTemas();
  }, []);

  return (
    <div>
      <center>
        <h1>Gestion de temas</h1>
        <div>
          <table className='tabla_temas'>
            <thead>
              <tr>
                <th>Temas</th>
              </tr>
            </thead>
            <tbody>
              {temas.map((tema) => (
                <tr key={tema.id_tema}>
                  <td>{tema.nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
}

export default Temas;
