import '../styles/css/products.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useState, useEffect, useContext } from 'react';
import ProductService from '../services/ProductService';
import { Context } from "../index";
import ProductList from '../components/ProductList';
import { useParams } from 'react-router-dom';

import { observer } from 'mobx-react-lite';

const Products = observer(() => {

  const { typeStore, brandStore, authStore} = useContext(Context);
  const [brandsList, setListBrands] = useState([]);
  const [typesList, setListTypes] = useState([]);
  const [guitar, setGuitar] = useState([]);
  const [tipeId, setType] = useState([]);
  const [brandsId, setBrandsId] = useState([]);
  const { id } = useParams();
  let listBrandsId = [];

  async function getGuitars(typeId, brandsId) {
    try {
      const response = await ProductService.fetchGuitar(id, brandsId);
      setGuitar(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const addBrandID = async(id, check) => {
    listBrandsId = brandsId;
    if (check) {
      listBrandsId.push(Number(id));
    } else {
      for (let i = 0; i < listBrandsId.length; i++) {
        if (listBrandsId[i] === Number(id)) {
          i === 0 ? listBrandsId.splice(0, 1) : listBrandsId.splice(i, i);
          break;
        }
      }
    }
    setBrandsId(listBrandsId);
  }


  useEffect(() => {
    getGuitars(null);
    typeStore.getTypes().then(types => setListTypes(types));
    brandStore.getBrand().then(brands => setListBrands(brands));
  }, [tipeId])

  useEffect(() => {
    getGuitars(tipeId);
  }, [tipeId])

  return (
    <>
      <Navbar></Navbar>
      <div>
        <section className="banner_area" >
          <div className="row" >
            <div className="col-lg-4 d-flex align-items-center" >
              <div className="banner d-flex align-items-center">
                <div className="container">
                  <div className="mb-3 mb-md-0 ">
                    <div className='text-categories'>
                      <h2>Категории товаров</h2>
                      <p>Качественные инструменты для всех и каждого</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-center">
              <div className="container ">
                <div className="types-list">
                <button className="types-list-button-all">Все гитары</button>
                  {typesList.map((type) => {
                    return <button className="types-list-button" onClick={() => setType(type.id)}>{type.name}</button>
                  })}
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="cat_product_area section_gap">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-9">
                <div className="latest_product_inner">
                  <div className="row">
                    <ProductList guitar={guitar} typeId={id}></ProductList>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="left_sidebar_area">
                  <aside className="left_widgets p_filter_widgets">
                    <div className="l_w_title">
                      <h3>Брэнды</h3>
                    </div>
                    <div className="widgets_inner">
                      <ul className="list">
                        {brandsList.map((brand) => {
                          return <div className="form-check">
                              <input  className="form-check-input" type="checkbox" onClick={e => {addBrandID(e.target.value, e.target.checked); /*setBrandsId(prevBrand => prevBrand + e.target.value)*/}} value={brand.id} id="flexCheckDefault" />
                              <label className="form-check-label" >
                                {brand.name}
                              </label>
                            </div>                   
                        })}
                      </ul>
                    </div>
                    <button type="button" className="btn btn-primary btn-sm" onClick={e => getGuitars(tipeId, brandsId)}>Применить</button>
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