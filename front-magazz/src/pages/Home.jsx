import '../styles/css/home.css';
import pic1 from '../styles/img/foto.png';
import pic3 from '../styles/img/foto2.png';
import Header from '../components/header/Header';


const Home = () => {
    return(
        <>
          <Header></Header>
          <main className="">
        <section class="feature_product_area section_gap_bottom_custom">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12">
                <div class="main_title">
                  <h2><span>Featured product</span></h2>
                  <p>РЕКОМЕНДУЕМЫЙ ПРОДУКТ</p>
                </div>
              </div>
            </div>
      
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="single-product">
                  <div class="product-img">
                    <img class="img-fluid w-100" src={pic1} alt="pic" />
                    <div class="p_icon">
                      <a href="#">
                        <i class="ti-eye"></i>
                      </a>
                      <a href="#">
                        <i class="ti-heart"></i>
                      </a>
                      <a href="#">
                        <i class="ti-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-btm">
                    <a href="#" class="d-block">
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div class="mt-3">
                      <span class="mr-4">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>
      
              <div class="col-lg-4 col-md-6">
                <div class="single-product">
                  <div class="product-img">
                    <img class="img-fluid w-100" src="/img/foto1.png" alt="" />
                    <div class="p_icon">
                      <a href="#">
                        <i class="ti-eye"></i>
                      </a>
                      <a href="#">
                        <i class="ti-heart"></i>
                      </a>
                      <a href="#">
                        <i class="ti-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-btm">
                    <a href="#" class="d-block">
                      <h4>Red women purses</h4>
                    </a>
                    <div class="mt-3">
                      <span class="mr-4">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>
      
              <div class="col-lg-4 col-md-6">
                <div class="single-product">
                  <div class="product-img">
                    <img class="img-fluid w-100" src={pic3} alt="" />
                    <div class="p_icon">
                      <a href="#">
                        <i class="ti-eye"></i>
                      </a>
                      <a href="#">
                        <i class="ti-heart"></i>
                      </a>
                      <a href="#">
                        <i class="ti-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-btm">
                    <a href="#" class="d-block">
                      <h4>Men stylist Smart Watch</h4>
                    </a>
                    <div class="mt-3">
                      <span class="mr-4">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          </main>
        </>
    );
}

export default Home;