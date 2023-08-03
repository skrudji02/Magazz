import React, { useContext, useState } from 'react';
import {Context} from "../index";
import {observer} from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import '../styles/css/login.css';

const Registration = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_repit, setPasswordRepit] = useState('');
    const {authStore} = useContext(Context);
    const navigate = useNavigate();

    return(
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
                    type="email" 
                    id="form3Example3cg" 
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
                
                <div className="form-outline mb-4">
                  <input onChange={e => setPasswordRepit(e.target.value)}
                    value={password_repit}
                    type="password" 
                    id="password_repit" 
                    className="form-control form-control-lg" />
                  <label className="form-label">Повтор пароля</label>
                </div>

                <div className="d-flex justify-content-center">
                  <button onClick={() => {
                    if(password == password_repit)
                      authStore.registration(email, password);
                  }} 
                  type="button" 
                  className="btn btn-primary btn-block btn-lg ">Зарегистрироваться</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">У вас уже есть учетная запись? <a onClick={() => navigate('/magazz/user/login', { replace: false })} to="/magazz/user/login" href="#!" className="fw-bold text-body"><u>Войти</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}

export default observer(Registration);