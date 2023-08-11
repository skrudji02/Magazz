import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Context } from "../index";

const Product = () => {

  const { musicInstrumentStore, basketStore } = useContext(Context);
  const [guitar, setGuitar] = useState('');
  const { id } = useParams();

  useEffect(() => {
    musicInstrumentStore.getProduct(id).then(guitar => setGuitar(guitar));
  }, [])

  return <>
    <Navbar></Navbar>
    <section className="banner_area" >
      <div className="row" >
        <div className="col-lg-8 d-flex align-items-center" >
          <div className="banner_inner d-flex align-items-center">
            <div className="container ">
              <img
                className="card-img"
                src={guitar.img}
                alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex align-items-center">
          <div className="container ">
            <div className="types-list">
              {guitar.name}
            </div>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => {basketStore.addInBasket(guitar.id); alert("Товар добавлен в корзину")}}>В Корзину</button>
          </div>
        </div>
      </div>

    </section>
    <Footer></Footer>
  </>
}

export default Product;