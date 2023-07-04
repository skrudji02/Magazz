import '../styles/css/home.css';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import React from 'react';

const Home = () => {

    return(
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
      
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img className="img-fluid w-100" src="/img/foto1.png" alt="pic" />
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
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="col-lg-4 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img className="img-fluid w-100" src="/img/foto.png" alt="pic2" />
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
                      <h4>Red women purses</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="col-lg-4 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img className="img-fluid w-100" src="/img/foto1.png" alt="pic4" />
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
                      <h4>Men stylist Smart Watch</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          </main>
          <Footer></Footer>
        </>
    );
}

export default Home;