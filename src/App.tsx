// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { AppLayout } from './components/Layout/Layout';
const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Routes> {/* Wrap your routes in a <Routes> element */}
          <Route path="/" element={<Home />} /> {/* Use the 'element' prop to specify the component */}
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
