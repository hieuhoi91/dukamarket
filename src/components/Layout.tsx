import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Home from '../Pages/Home/Home';
import Shop from '../Pages/Shop/Shop';

const Layout: React.FC = () => {
  return (
    <>
      <Header>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
        </Routes>
      </Header>
      <Footer />
    </>
  );
};

export default Layout;
