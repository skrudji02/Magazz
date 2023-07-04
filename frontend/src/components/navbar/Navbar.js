import React, {useContext, useEffect}from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../index';
import {observer} from 'mobx-react-lite';

const Navbar = observer(() => {
  
  const {store} = useContext(Context);

  useEffect( () => {
    if(localStorage.getItem('token')){
      store.checkAuth();
     
    }
  }, []);

    return(
    <nav className="navbar navbar-expand-lg" >
      <div className="container-fluid">
        <a className="navbar-brand">Magazz</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/magazz/home/' className="nav-link active" aria-current="page">Главная</Link>
            </li>
            <li className="nav-item">
                <Link to='/magazz/product/guitar' className="nav-link active">Товары</Link>
            </li>
                { store.role == 'ADMIN' ? <li className="nav-item"><Link to='/magazz/product' className="nav-link active">Админ</Link></li> : <li></li>}
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success">Корзина</button> 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {store.isAuth ? <div className="nav-link active">{store.user} | <a onClick={() => store.logout()}>Выйти</a></div> : <div className="nav-link active"><Link to='/magazz/user/registration'>Регистрация</Link> | <Link to='/magazz/user/login'>Войти</Link></div>}
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
      
    );
})

export default Navbar;