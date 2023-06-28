import React, { useState, useContext, useEffect } from 'react';
import {observer} from 'mobx-react-lite';
import { Context } from './index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from './components/Registration';
import Products from './components/Products';
import Table from './components/Table';
import Add from './components/AddProduct';

function App() {

  return (
   
    <div className="App"> 
      <Router>
        <Routes>
          <Route path='/magazz/home' element={<Home/>}></Route>
          <Route path='/magazz/user/registration' element={<Registration/>}></Route>  
          <Route path='/magazz/user/login' element={<Login/>}></Route>
          <Route path='/magazz/product/guitar' element={<Products/>}></Route>

          <Route path='/magazz/admin' element={<Products/>}></Route>
          <Route path='/magazz/product' element={<Table/>}></Route>
          <Route path='/magazz/product/guitarAdd' element={<Add/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
