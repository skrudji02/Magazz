import React from 'react';

const Navbar = () => {
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
              <a className="nav-link active" aria-current="page">Главная</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">Товары</a>
            </li>
            <li className="nav-item">
            
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success">Корзина</button> 
          </form>
        </div>
      </div>
    </nav>
      
    );
}

export default Navbar;