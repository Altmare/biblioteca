import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './libros.css';

function Libros() {
    const [libros, setLibros] = useState([]);


    useEffect(() => async ()=>{
        setLibros(await getLibros());
    }, []);
  

  return (
    <center>
        <h1>Libros</h1>
        <div>
            <table className='tabla_temas'>
                <thead>
                    <th>Titulo</th> 
                    <th>Edicion</th> 
                    <th>Autor</th> 
                    <th>Editorial</th> 
                    <th>Tema</th> 
                </thead>   
                <tbody>
                {libros.map(libro => (
                    <tr key={libro.id_libro}>
                        <td>{libro.titulo}</td> 
                        <td>{libro.edicion}</td> 
                        <td>{libro.editorial}</td> 
                        <td>{libro.tema}</td> 
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </center>
  )
}

export default Libros


var getLibros =async () => {
    const url = 'http://localhost/libros';
    const results = await axios.get(url);
return results.data;
}