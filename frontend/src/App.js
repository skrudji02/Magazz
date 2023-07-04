import React, { useState, useContext, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from './pages/Registration';
import Products from './pages/Products';
import Admin from './pages/Admin';
import Table from './pages/MusicInstrument';
import Brand from './pages/Brand';
import Type from './pages/Type';

function App() {

  return (
   
    <div className="App"> 
      <Router>
        <Routes>
          <Route path='/magazz/home' element={<Home/>}></Route>
          <Route path='/magazz/user/registration' element={<Registration/>}></Route>  
          <Route path='/magazz/user/login' element={<Login/>}></Route>
          <Route path='/magazz/product/guitar' element={<Products/>}></Route>


          <Route path='/magazz/product' element={<Admin/>}></Route>
          <Route path='/magazz/product/admin_guitar' element={<Table/>}></Route>
          <Route path='/magazz/product/brand' element={<Brand/>}></Route>
          <Route path='/magazz/product/type' element={<Type/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
