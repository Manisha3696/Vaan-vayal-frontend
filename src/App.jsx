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
import Pooja from './Pages/Products/Pooja/Pooja';
import PoojaSubPage from './Pages/ProductsSubPage/PoojaSubPage/PoojaSubPage';
import JaggeryList from './Pages/Products/Jaggery/Jaggery';
import JaggerySubPage from './Pages/ProductsSubPage/JaggerySubPage/JaggerySubPage';
import Salt from './Pages/Products/Salt/Salt';
import SaltSubPage from './Pages/ProductsSubPage/SaltSubPage/SaltSubPage';
import Pickel from './Pages/Products/Pickels/Pickels';
import PickelSubPage from './Pages/ProductsSubPage/PickelSubPage/PickelSubPage';
import Rava from './Pages/Products/Rava/Rava';
import RavaSubPage from './Pages/ProductsSubPage/RavaSubPage/RavaSubPage';
import Snacks from './Pages/Products/Snacks/Sancks';
import SnacksSubPage from './Pages/ProductsSubPage/SnacksSubPage/SancksSubPage';


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
          <Route path='/flour' element={<Flour />} />
          <Route path='/spices' element={<Spices />} />
          <Route path='/appalam' element={<Appalam />} />
          <Route path='/masala' element={<Masala />} />
          <Route path='/pooja-products' element={<Pooja />} />
          <Route path='/jaggery' element={<JaggeryList />} />
          <Route path='/salt' element={<Salt />} />
          <Route path='/pickle' element={<Pickel />} />
          <Route path='/rava' element={<Rava />} />
          <Route path='/snacks' element={<Snacks />} />

          {/* Sub Products Page  */}
          <Route path="/rice/:name" element={<RiceSubPage />} />
          <Route path="/flour/:name" element={<FlourSubPage />} />
          <Route path="/spices/:name" element={<SpicesSubPage />} />
          <Route path="/appalam/:name" element={<AppalamSubPage />} />
          <Route path="/masala/:name" element={<MasalaSubPage />} />
          <Route path="/pooja-products/:name" element={<PoojaSubPage />} />
          <Route path="/jaggery/:name" element={<JaggerySubPage />} />
          <Route path="/salt/:name" element={<SaltSubPage />} />
          <Route path="/pickle/:name" element={<PickelSubPage />} />
          <Route path="/rava/:name" element={<RavaSubPage />} />
          <Route path="/snacks/:name" element={<SnacksSubPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;