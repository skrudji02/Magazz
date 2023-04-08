import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import './App.css';


function App() {

    return (
      <div className="App">
       
        <Navbar></Navbar>
      
        {/*<Home></Home>*/}
        <Product/>
      
        <Footer></Footer>
        
      </div>
    );
}

export default App;
