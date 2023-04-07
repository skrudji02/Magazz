import '../styles/css/product.css';

const Product = () => {
    return(
        <div>
        <section class="banner_area">
            <div class="banner_inner d-flex align-items-center">
                <div class="container">
                    <div class="banner_content d-md-flex justify-content-between align-items-center">
                        <div class="mb-3 mb-md-0">
                            <h2>Категории товаров</h2>
                            <p>Качественные инструменты для всех и каждого</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section class="cat_product_area section_gap">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="product_top_bar">
                            <div class="left_dorp">
      
                            </div>
                    </div>
      
                    <div class="latest_product_inner">
                        <div class="row">
          {/* each */}
                            <div class="col-lg-4 col-md-6">
                                <div class="single-product">
                                    <div class="product-img">
                <img
                  class="card-img"
                  onclick="openWindow({{this.id}})"
                  src="{{this.photo}}"
                  alt=""/>
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
                  <h4 onclick="openWindow({{this.id}})">name_guitar</h4>
                </a>
                <div class="mt-3">
                  <span class="mr-4">price р</span>
                </div>
              </div>
            </div>
          </div>
         {/* /each */}

        </div>
      </div>
    </div>

    <div class="col-lg-3">
      <div class="left_sidebar_area">
        <aside class="left_widgets p_filter_widgets">
          <div class="l_w_title">
            <h3>Акустические гитaры</h3>
          </div>
          <div class="widgets_inner">
            <ul class="list">
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

        <aside class="left_widgets p_filter_widgets">
          <div class="l_w_title">
            <h3>Электрогитaры</h3>
          </div>
          <div class="widgets_inner">
            <ul class="list">
              <li>
                <a href="#">Электрогитaры</a>
              </li>
              <li>
                <a href="#">Полуакустические гитары</a>
              </li>
              <li class="active">
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