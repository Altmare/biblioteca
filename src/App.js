import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Inicio from './page/inicio/Inicio'
import Temas from './page/temas/Temas'
import Autores from './page/autores/Autores'
import NotFound from './page/not fount/NotFound';
import NavBar from './componentes/nav bar/NavBar';
import Agregartema from './page/agregartema/agregartema';
import Libors from './page/libros/libros';
import CrearLibro from './page/crearlibro/crear_libro';

function App(props) {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={ <Inicio/> }/>
        <Route path='/temas' element={ <Temas/> }/>
        <Route path='/autores' element={ <Autores/> }/>
        <Route path='/agregartema' element={ <Agregartema/> }/>
        <Route path='/libros' element={ <Libors/> }/>
        <Route path='/agregarlibro' element={ <CrearLibro/> }/>
        <Route path='/*' element={ <NotFound/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
