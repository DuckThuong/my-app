// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import NewProduct from './components/Products/NewProduct/NewProduct';
import OnSale from './components/Products/Onsale/Onsale';
import OutOfDate from './components/Products/BestSeller/BestSeller';
import NormalUser from './components/Update/UpDate';
import Other from './components/Products/Other/Other';
import { AppLayout } from './components/Layout/Layout';
const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/on-sale" element={<OnSale />} />
        <Route path="/out-of-date" element={<OutOfDate />} />
        <Route path="/normal-user" element={<NormalUser />} />
        <Route path="/other" element={<Other />} />
      </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
