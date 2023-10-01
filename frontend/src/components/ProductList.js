import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const ProductList = observer(({ guitar }) => {
    return (guitar.map(function (item) {
        return <div className="col-lg-4 col-md-2">
          
            <Link to={'/magazz/product/guitar/' + item.id} className="single-product" aria-current="page">
                <div className="product-img">
                    <img
                        className="card-img"
                        src={item.img}
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
                        <h4 >{item.name}</h4>
                    </a>
                    <div className="mt-3">
                        <span className="mr-4">{item.price} p</span>
                    </div>
                </div>
            </Link>
        </div>;
    }));
});

export default ProductList;