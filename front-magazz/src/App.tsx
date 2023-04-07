import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import './App.css';
import {useState, useEffect} from 'react';

interface Guitar {
  id: number;
  name_guitar: string;
  about_guitar: string;
  photo: string;
  price: number;
}

function App() {

  const [guitar, setGuitar] = useState([]);

  useEffect( () => {
    fetch("http://localhost:5000/magazz/guitar")
    .then(res => res.json())
    .then(
      (result) => {
        setGuitar(result);
        console.log(result);
      }
    )
  }, []);
	const res = guitar.map(function(item: Guitar) {
		return <p>{item.name_guitar}</p>;
	});
	
	return <div>
		{res}
	</div>;
    return (
      <div className="App">
       
        <Navbar></Navbar>
      
        {/*<Home></Home>*/}
        <Product></Product>
      
        <Footer></Footer>
        
      </div>
    );
}

export default App;
