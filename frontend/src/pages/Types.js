import '../styles/css/types.css';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useState, useEffect, useContext } from 'react';
import { Context } from "../index";
import { Link } from 'react-router-dom';

const Types = () => {

  const {typeStore} = useContext(Context);
  const [ListTypes, setListTypes] = useState([]);

  useEffect(() => {
    typeStore.getTypes().then(types => setListTypes(types));
  }, []);

  const ListTypesProduct = ListTypes.map((type) => {
    return <Link to={'/magazz/catalog/types/' + type.id} className="col-4 type">
        <img className="card-img rounded mx-auto d-block" src={type.img} alt="" />
      <div class="p-3">{type.name}</div>
    </Link>
  });



  return (
    <>
      <Navbar></Navbar>
      <div class="container text-center">
        <div class="row g-3">
          {ListTypesProduct}
         </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Types;