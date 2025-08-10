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
import Flour from './Pages/Products/Flour/Flour';


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

          {/* Sub Products Page  */}
          <Route path="/rice/:name" element={<RiceSubPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;