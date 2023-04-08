import '../styles/css/product.css';
import { useState, useEffect } from 'react';

interface Guitar {
  id: number;
  name_guitar: string;
  about_guitar: string;
  photo: string;
  price: number;
}

const Product = () => {

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

  const res = guitar.map(function (item: Guitar) {
    return <div className="col-lg-4 col-md-6">
    <div className="single-product">
      <div className="product-img">
        <img
          className="card-img"
         
          src={item.photo}
          alt="" />
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
          <h4 >{item.name_guitar}</h4>
        </a>
        <div className="mt-3">
          <span className="mr-4">{item.price}</span>
        </div>
      </div>
    </div>
  </div>;
  });



  return (
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
                  {/* each */}
                  <div className="col-lg-4 col-md-6">
                    <div className="single-product">
                      <div className="product-img">
                        <img
                          className="card-img"
                         
                          src="{{this.photo}}"
                          alt="" />
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
                          <h4 >name_guitar</h4>
                        </a>
                        <div className="mt-3">
                          <span className="mr-4">price р</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /each */}

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
                        <a href="#">Акустические гитaры</a>
                      </li>
                      <li>
                        <a href="#">Классические гитaры</a>
                      </li>
                      <li>
                        <a href="#">Укулеле</a>
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
  );
}

export default Product;