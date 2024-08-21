import { useState } from 'react'

import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/Navba';
import { Routes, Route ,Navigate} from 'react-router-dom';
import AboutPage from './Pages/AboutPage/AboutPage';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import BlogsPage from './Pages/BlogsPage/BlogsPage';
import PortofolioPage from './Pages/PortofolioPage/PortofolioPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import CareerPage from './Pages/CareerPage/CareerPage';
import ServiceDetailsPage from './Pages/ServiceDetails/ServiceDetails';
function App() {
  

  return (
    <div className='main'> 
     <Navbar/>
     <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path='/About' element={<AboutPage/>}/>
        <Route path='/Services' element={<ServicesPage/>}/>
        <Route path='/Blog' element={<BlogsPage/>}/>
        <Route path='/portfolio' element={<PortofolioPage/>}/>
        <Route path='/Contact us' element={<ContactPage/>}/>
        <Route path='/Career' element={<CareerPage/>}/>
        <Route path='/Service/:id' element={<ServiceDetailsPage/>}/>
        <Route path="*" element={<Navigate to="/Home" />} />
        

      </Routes>
  
    <Footer/>
    </div>
  )
}

export default App
