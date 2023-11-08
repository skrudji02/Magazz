import { useState, useEffect, useContext } from 'react';
import { Context } from "../index"; import { observer } from 'mobx-react-lite';
import Navbar from '../components/navbar/Navbar';

const Basket = observer(() => {

  const { authStore, basketStore } = useContext(Context);
  const [basketList, setListBasket] = useState([]);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    //basketStore.getUserBasket(authStore.id).then(products => setListBasket(products));
    if (localStorage.getItem('token')) {
      //authStore.checkAuth();
      authStore.checkAuth().then((userId) => { 
        setUserId(userId);
        basketStore.getUserBasket(userId).then(products => {
          setListBasket(products);
        })
      });
    }
    //basketStore.getUserBasket().then(products => setListBasket(products));
    //authStore.checkAuth().then(id =>  setUserId(id));
   

  }, []);


  const listBasketProduct = basketList.map((product) => {
    
    return <div class="card rounded-3 mb-4">
      <div class="card-body p-4">
        <div class="row d-flex justify-content-between align-items-center">
          <div class="col-md-2 col-lg-2 col-xl-2">
            <img
              src={product.product.img}
              class="img-fluid rounded-3" alt="Cotton T-shirt" />
          </div>
          <div class="col-md-3 col-lg-3 col-xl-3">
            <p class="lead fw-normal mb-2">{product.product.name}</p>
            <p><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>Grey</p>
          </div>
          <div class="col-md-1 col-lg-1 col-xl-2">
            <h5 class="mb-0">{product.quantity}</h5>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button class="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
              <i class="fas fa-minus"></i>
            </button>
            <h5 class="mb-0">{product.product.price*product.quantity}p</h5>

            <button class="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
              <i class="fas fa-plus"></i>
            </button>
          </div>
       
          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <button type="button" className="btn btn-primary btn-sm" onClick={() => { basketStore.deleteFromBasket(userId, product.product.id); setListBasket(basketList.filter((productBasket) => productBasket.product.id !== product.product.id)); }}>Убрать из корзины</button>
          </div>
        </div>
      </div>
    </div>
  });



  return <>
    <Navbar></Navbar>
    {authStore.isAuth ?
      <section class="h-100" >
        <div class="container h-100 py-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-10">

              <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="fw-normal mb-0 text-black">Корзина</h3>
                <div>
                  <p class="mb-0"><span class="text-muted">Сортировать по:</span> <a href="#!" class="text-body">цене <i
                    class="fas fa-angle-down mt-1"></i></a></p>
                </div>
              </div>


              {listBasketProduct}

            </div>
          </div>
        </div>
      </section>
      :
      <h1>Пройдите регистрацию</h1>}
  </>
})

export default Basket;