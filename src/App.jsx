import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';

import Coin from './Pages/Coin/Coin';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
  <div className='app'>
<Navbar />
<Routes>
<Route path='/' element={<Home />} />
  <Route path='/coin/:coinId' element={<Coin />} />
</Routes>
<Footer />
  </div>
  );
}

export default App;

