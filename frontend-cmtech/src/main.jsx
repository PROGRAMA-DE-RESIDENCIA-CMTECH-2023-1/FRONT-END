import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App"

//configurando o router
import{ createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";

import Home from './routes/Home';
import Login from "./routes/Login";
import EsqueciSenha from "./routes/EsqueciSenha";
import ErroPage from "./routes/ErroPage";
import Listas from './routes/Listas';

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "EsqueciSenha",
    element: <EsqueciSenha/>,
  },
]) */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    //page de erro
    errorElement: <ErroPage/>,
    children: [
      {
        path: "Home",
        element: <Home/>,
      },
      {
        path: "/",
        element: <Login/>,
      },
      {
        path: "EsqueciSenha",
        element: <EsqueciSenha/>,
      },
      //nested routes - identificador unico - dynimic routes
      {
        path: "/Home/:id",
        element: <Listas/>,
      },
      // navigate para pages n existentes
      {
        path: "oldcontact",
        element: <Navigate to="/Home"/>
      }
    ]
  },
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
