import './App.css';

//aproveitando a estrutura
import { Outlet } from 'react-router-dom';

//navegar entre as paginas
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='Content'>
        <Outlet />
        <h1>React</h1>
        <p>Footer</p>
      </div>  
    </div>
  )
}

export default App;
