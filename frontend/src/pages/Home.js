import '../styles/css/home.css';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useState, useEffect, useContext } from 'react';
import { Context } from "../index";

const Home = () => {

  const { ratingStore } = useContext(Context);
  const [recomGuitar, setGuitar] = useState([]);

  useEffect(() => {
    ratingStore.getTopProduct().then((products) => { setGuitar(products) });
  }, []);

  
  const ProductList = recomGuitar.map((guitar) => {
    return <div className="col-lg-3 col-md-2">
    <div className="single-product">
      <div className="product-img">
        <img className="img-fluid recom-img" src={guitar.img} alt="pic" />
        <div className="p_icon">
          <a href="#">
            <i className="ti-eye"></i>
          </a>
          <a href="#">
            <i className="ti-heart"></i>
          </a>
          <a href="#">
            <i className="ti-shopping-cart"></i>
          </a>
        </div>
      </div>
      <div className="product-btm">
        <a href="#" className="d-block">
          <h4>{guitar.name}</h4>
        </a>
        <div className="mt-3">
          <span className="mr-4">{guitar.price} p</span>
        </div>
      </div>
    </div>
  </div>
  });


  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <main className="">
        <section className="feature_product_area section_gap_bottom_custom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="main_title">
                  <h2><span>Featured product</span></h2>
                  <p>РЕКОМЕНДУЕМЫЙ ПРОДУКТ</p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              
              {ProductList}

              
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Home;