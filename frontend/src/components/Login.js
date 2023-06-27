import React, { useContext, useState } from 'react';
import { Context } from "../index";
import { observer } from 'mobx-react-lite';
import '../components/login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { store } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="mask d-flex align-items-center h-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" >
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Magazz</h2>
                <form>

                  <div className="form-outline mb-4">
                    <input onChange={e => setEmail(e.target.value)}
                      value={email}
                      type="email" id="form3Example3cg"
                      className="form-control form-control-lg" />
                    <label className="form-label">Email</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input onChange={e => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      id="form3Example4cg"
                      className="form-control form-control-lg" />
                    <label className="form-label">Пароль</label>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button onClick={() => {
                      store.login(email, password); 
                      if(!store.isAuth)  
                        navigate('/magazz/home');
                    }} 
                    type="button" 
                    className="btn btn-primary btn-block btn-lg ">Войти</button>
                  </div>

                  <p className="text-center text-muted mt-5 mb-0">Еще не зарегистрированы? <a onClick={() => navigate('/magazz/user/registration', { replace: false })} href="#!" className="fw-bold text-body"><u>Зарегистрироваться.</u></a></p>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(Login);