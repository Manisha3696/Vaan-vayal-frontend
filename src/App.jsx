import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import ComingSoon from './Pages/ComingSoon/ComingSoon';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Globalbuyers from './Pages/Globalbuyers/Globalbuyers';
import Rice from './Pages/Products/Rice/Rice';
import RiceSubPage from './Pages/ProductsSubPage/RiceSubPage/RiceSubPage';
import Spices from './Pages/Products/Spices/Spices';
import SpicesSubPage from './Pages/ProductsSubPage/SpicesSubPage/SpicesSubPage';
import Appalam from './Pages/Products/Appalam/Appalam';
import AppalamSubPage from './Pages/ProductsSubPage/AppalamSubPage/AppalamSubPage';
import Flour from './Pages/Products/Flour/Flour';
import FlourSubPage from './Pages/ProductsSubPage/FlourSubPage/FlourSubPage';
import MasalaSubPage from './Pages/ProductsSubPage/MasalaSubPage/MasalaSubPage';
import Masala from './Pages/Products/Masala/Masala';


function App() {
  return (
    <div className="App">
      {/* <ComingSoon /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/globalbuyers' element={<Globalbuyers />} />
          <Route path='/contact' element={<Contact />} />

          {/* Main Products Pages  */}
          <Route path='/rice' element={<Rice />} />
          <Route path='/flour' element={<Flour/>} />
          <Route path='/Spices' element={<Spices/>} />
          <Route path='/Appalam' element={<Appalam/>} />
          <Route path='/Masala' element={<Masala/>} />
<Route path='/Flour' element={<Flour/>} />


          {/* Sub Products Page  */}
          <Route path="/rice/:name" element={<RiceSubPage />} />
          <Route path="/Spices/:name" element={<SpicesSubPage />} />
          <Route path="/Appalam/:name" element={<AppalamSubPage />} />
          <Route path="/Flour/:name" element={<FlourSubPage />} />
          <Route path="/Flour/:name" element={<MasalaSubPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;