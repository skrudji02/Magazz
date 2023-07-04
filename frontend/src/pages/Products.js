import '../styles/css/product.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useState, useEffect, useContext } from 'react';
import ProductService from '../services/ProductService';
import { Context } from "../index";
import ProductList from '../components/ProductList';

import { observer } from 'mobx-react-lite';

const Products = observer(() => {

  const [guitar, setGuitar] = useState([]);
  const { store, ProductStore } = useContext(Context);
  const [tipeId, setType] = useState([]);


  async function getGuitars(typeId){
    try{
        const response = await ProductService.fetchGuitar(typeId);
        setGuitar(response.data);
    }catch(err){
        console.log(err);
    }
  }

  useEffect(()=>{
    getGuitars(null);
  },[])

  useEffect(()=>{
    getGuitars(tipeId);
  },[tipeId])

  return (
    <>
    <Navbar></Navbar>
    <div>
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content d-md-flex justify-content-between align-items-center">
              <div className="mb-3 mb-md-0">
                <h2>Категории товаров</h2>
                <p>Качественные инструменты для всех и каждого</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cat_product_area section_gap">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-9">
              <div className="product_top_bar">
                <div className="left_dorp">
                </div>
              </div>
              <div className="latest_product_inner">
                <div className="row">
                  <ProductList guitar={guitar}></ProductList>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="left_sidebar_area">
                <aside className="left_widgets p_filter_widgets">
                  <div className="l_w_title">
                    <h3>Акустические гитaры</h3>
                  </div>
                  <div className="widgets_inner">
                    <ul className="list">
                      <li>
                        <a onClick={() => setType(1)}>Акустические гитaры</a>
                      </li>
                      <li>
                        <a onClick={() => setType(2)}>Классические гитaры</a>
                      </li>
                      <li>
                        <a >Укулеле</a>
                      </li>
                    </ul>
                  </div>
                </aside>

                <aside className="left_widgets p_filter_widgets">
                  <div className="l_w_title">
                    <h3>Электрогитaры</h3>
                  </div>
                  <div className="widgets_inner">
                    <ul className="list">
                      <li>
                        <a href="#">Электрогитaры</a>
                      </li>
                      <li>
                        <a href="#">Полуакустические гитары</a>
                      </li>
                      <li className="active">
                        <a href="#">Бас-гитары</a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>
    </>
  );
});

export default Products;