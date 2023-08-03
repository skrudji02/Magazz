import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const Admin = () => {

  const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>
      <div className="container" style={{ paddingTop: '10%' }}>
        <div class="d-grid gap-2 col-6 mx-auto text-center align-items-center">
          <button onClick={() => navigate('/magazz/product/admin_guitar')} class="btn btn-primary" type="button">Товары</button>
          <button onClick={() => navigate('/magazz/product/brand')} class="btn btn-primary" type="button">Брэнды</button>
          <button onClick={() => navigate('/magazz/product/type')} class="btn btn-primary" type="button">Типы</button>
        </div>
      </div>
      
    </>
  );
}

export default Admin;