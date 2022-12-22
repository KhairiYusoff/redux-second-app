import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const showCart = useSelector(state => state.toggle.showCart);
  const cart = useSelector(state => state.cart)



  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
