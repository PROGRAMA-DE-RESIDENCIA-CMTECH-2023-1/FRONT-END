import './App.css';

//aproveitando a estrutura
import { Outlet } from 'react-router-dom';

//navegar entre as paginas
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>React</h1>
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App;
