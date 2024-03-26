import logo from './logo.svg';
import './App.css';
import Index from "./components/Index";
import Perfil from "./components/Perfil";
import Carrito from "./components/Carrito";
import { Routes, Route } from 'react-router-dom';
import pages from './pages/Perfil';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Mis componentes */}
        <Index />
        <Perfil />
        <Carrito />
        {/* Mi pagina aux */}
        <Routes>
          <Route path='/' element={<Perfil />}>

          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
