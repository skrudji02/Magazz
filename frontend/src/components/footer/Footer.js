import React from 'react';
import '../footer/footer.css';

const Footer = () =>{
    return(
        <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 single-footer-widget">
           
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Quick Links</h4>
              <ul>
                <li><a>Главное</a></li>
                <li><a>Товары</a></li>
                <li><a>Корзина</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
            
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
             
            </div>
            <div className="col-lg-4 col-md-6 single-footer-social">
                  <a><i className="fa fa-facebook"></i></a>
                  <a><i className="fa fa-twitter"></i></a>
                  <a><i className="fa fa-dribbble"></i></a>
                  <a><i className="fa fa-behance"></i></a>
            </div>
          </div>
        </div>
        </footer>
    );
}

export default Footer; 