import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import '../styles/css/product.css';
import Navbar from '../components/navbar/Navbar';
import Specification from '../components/Specification';
import Reviews from '../components/Reviews';
import Footer from '../components/footer/Footer';
import { Context } from "../index";
import '../styles/css/style.css';

const Product = () => {

  const { musicInstrumentStore, basketStore, ratingStore } = useContext(Context);
  const [guitar, setGuitar] = useState('');
  const [rating, setRating] = useState('');
  const { id } = useParams();
  const [stars, setStars] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [menu, setMenu] = useState('Reviews');
  const listStars = [];

  useEffect(() => {
    musicInstrumentStore.getProduct(id).then((product) => { setGuitar(product.guitar); setRating(product.ratingProduct) });
    star();
  }, [rating]);

  const star = () => {

    for (let i = 0; i < rating; i++) {
      listStars.push( <label className='star-user'></label>);
    }
    setStars(listStars);
  }

  const renderStars = stars.map((star) => {
    return star;
  });

  return <>
    <Navbar></Navbar>

    <div class="product_image_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex justify-content-center">
            <img class="img-product" src={guitar.img} alt="First slide" />
          </div>
          <div class="col-lg-5 offset-lg-1 align-self-center">
            <div class="s_product_text">
              <h3>{guitar.name}</h3>
              <ul class="list">
                <li>
                  <span>Category</span> : Household
                </li>
              </ul>
              <p>
                Mill Oil is an innovative oil filled radiator with the most
                modern technology. If you are looking for something that can
                make your interior look awesome, and at the same time give you
                the pleasant warm feeling during the winter.
              </p>
              <label class="form-label" for="form1">Кол-во:</label>
              <div class="d-flex flex-row">
                <button class="btn btn-primary me-2" onClick={() => { if(quantity > 1) setQuantity(quantity - 1)}}>-</button>
                <input value={quantity} placeholder="Кол-во" class="form-control  w-25" />
                <button class="btn btn-primary ms-2" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <h2 className='price'>{guitar.price} p</h2>
              <button className="btn btn-primary" onClick={() => { basketStore.addInBasket(guitar.id, quantity); alert("Товар добавлен в корзину") }}>В Корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="product_description_area">
      <div class="container">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <div class="radio-toolbar" onClick={() => setMenu('Specification')}>
              <input className='menu-product' type="radio" id="radio1" name="radios" value="true" />
              <label className='data-product' for="radio1">Спецификация</label>
            </div>
          </li>
          <li class="nav-item">
            <div class="radio-toolbar" onClick={() => setMenu('Reviews')}>
              <input className='menu-product' type="radio" id="radio2" name="radios" value="false" checked />
              <label className='data-product' for="radio2">Отзывы</label>
            </div>
          </li>

        </ul>
        <div class="tab-content" id="myTabContent">
          {menu === 'Specification' ? <Specification/> : <Reviews rating={rating} ratingStore={ratingStore} guitar={guitar} renderStars={renderStars}/>}
        </div>
      </div>
    </section>



    <Footer></Footer>
  </>
}

export default Product;