import React, { useState, useContext, useEffect } from 'react';
import {observer} from 'mobx-react-lite';
import { Context } from './index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from './components/Registration';
import Product from './components/Products';


function App() {



{/*
if(!store.isAuth){

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/magazz/user/login' element={<Login/>}></Route>   
        </Routes>
      </Router>
    </div>
    
  );
}
*/}

  return (
   
    <div className="App"> 
      <Router>
        <Routes>
          <Route path='/magazz/home' element={<Home/>}></Route>
          <Route path='/magazz/user/registration' element={<Registration/>}></Route>  
          <Route path='/magazz/user/login' element={<Login/>}></Route>
          <Route path='/magazz/product/' element={<Product/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
