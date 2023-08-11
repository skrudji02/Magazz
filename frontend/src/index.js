import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthStore from './store/AuthStore';
import BrandStore from './store/BrandStore';
import TypeStore from './store/TypeStore';
import MusicInstrument from './store/MusicStore';
import BasketStore from './store/BasketStore';
import 'bootstrap/dist/css/bootstrap.min.css';

export const authStore = new AuthStore();
export const brandStore = new BrandStore();
export const typeStore = new TypeStore();
export const musicInstrumentStore = new MusicInstrument();
export const basketStore = new BasketStore();

export const Context = createContext({
  authStore, brandStore, typeStore, musicInstrumentStore, basketStore,
    
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
      authStore, brandStore, typeStore, musicInstrumentStore, basketStore,
    }}>
        <App />
    </Context.Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

