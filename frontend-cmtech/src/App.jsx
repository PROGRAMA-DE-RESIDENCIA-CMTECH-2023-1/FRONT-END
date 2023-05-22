import './App.css';

//aproveitando a estrutura
import { Outlet } from 'react-router-dom';

//navegar entre as paginas
import NavBar from './components/NavBar';
import TokenProvider from './token/TokenProvider';

function App() {
  return (
    <TokenProvider>
      <div className="App">
        <NavBar />
        <div className='Content'>
          <Outlet />
        </div>
      </div>
    </TokenProvider>
  )
}

export default App;
