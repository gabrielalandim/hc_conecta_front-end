import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.tsx'
import { Home } from './pages/Home/Home.tsx'
import { Integrantes } from './pages/Integrantes/Integrantres.tsx'
import { Sobre } from './pages/Sobre/Sobre.tsx'
import { FAQ } from './pages/Faq/Faq.tsx'
import { Contato } from './pages/Contato/Contato.tsx'
import { Detalhes } from './pages/Detalhes/Detalhes.tsx'
import { Login } from './pages/Login/Login.tsx';
import { Consultas } from './pages/Consultas/Consultas.tsx'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      { path: '/', element: <Home /> },
      { path: '/integrantes', element: <Integrantes /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/contato', element: <Contato /> },
      { path: '/detalhes/:id', element: <Detalhes/> },
      { path: '/login', element: <Login /> },
      { path: '/consultas', element: <Consultas /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)