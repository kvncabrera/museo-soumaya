 import React from 'react'
 import ReactDOM from 'react-dom/client'
 import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
 import Header from './components/Header'
 import './css/style.css'
 import Inicio from './pages/Inicio'
 import Servicios from './pages/Servicios'
 import { UserProvider } from './context/UsuarioContext'
 import Login from './pages/Login'
 import RutaPrivada from './RutaPrivada'
 import PanelDeControl from './pages/PanelDeControl'
 import NuevaGuia from './pages/NuevaGuia'
 import BorrarGuia from './pages/BorrarGuia'
 import Footer from './components/Footer'
 import EditarGuia from './pages/EditarGuia'



 ReactDOM.createRoot(document.getElementById('root')).render(

 <Router>
   
   <UserProvider>
     <Header/>
     <main>
       <Routes>


         <Route path='/' element={<Inicio/>}/>
         <Route path='/servicios' element={<Servicios/>} />
         <Route path='/login' element={<Login/>}/>
         <Route path='/panel' element={ <RutaPrivada componentePintar={<PanelDeControl/>} />} />
         <Route path='/nuevaGuia' element={ <RutaPrivada componentePintar={<NuevaGuia/>} />} />
         <Route path='/borrarGuia/:id' element={ <RutaPrivada componentePintar={<BorrarGuia/>} />} />
         <Route path='/editarGuia/:id' element={ <RutaPrivada componentePintar={<EditarGuia/>}/>}/>

       </Routes>
     </main>
     <Footer/>
   </UserProvider>
   </Router>
 )