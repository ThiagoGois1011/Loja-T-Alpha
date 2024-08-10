import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './paginas/Home';
import Login from './paginas/Login';
import Register from './paginas/Register';
import Painel from './paginas/PainelCentral';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import LojaProvider from './components/LojaProvider';
import FormularioContainer from './paginas/FormularioComponent.js';
const root = ReactDOM.createRoot(document.getElementById('root'));



const router = createBrowserRouter([
  {
    path: "/Loja-T-Alpha/",
    element: <Home/>,
  },
  {
    path: "/Loja-T-Alpha/login",
    element: <FormularioContainer titulo="Login" subtitulo={{pulaLinha: true, subtitulo1: "Bem vindo de volta!" , subtitulo2: "Por favor logue para continuar."}} subtitulo2="ou continue com" subtitulo3="Não tem uma conta? " Form={Login} textoDoLink="Criar agora" home={true}/>,
  },
  {
    path: "/Loja-T-Alpha/register",
    element: <FormularioContainer titulo="Criar conta" subtitulo={{pulaLinha: true, subtitulo1: "Insira sua informações para dar continuidade" , subtitulo2: ""}} subtitulo2="ou crie a conta com" subtitulo3="Ja tem uma conta? " Form={Register} textoDoLink="Login" home={false}/>,
  },
  {
    path: "/Loja-T-Alpha/painel",
    element: <Painel/>,
  },
]);



root.render(
    <LojaProvider>
      <RouterProvider router={router} />
    </LojaProvider>
);




