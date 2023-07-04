import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './store/store';
import BrandStore from './store/BrandStore';
import TypeStore from './store/TypeStore';
import MusicInstrument from './store/MusicStore';
import 'bootstrap/dist/css/bootstrap.min.css';

export const store = new Store();
export const brandStore = new BrandStore();
export const typeStore = new TypeStore();
export const musicInstrumentStore = new MusicInstrument();

export const Context = createContext({
    store, brandStore, typeStore, musicInstrumentStore,
    
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        store, brandStore, typeStore, musicInstrumentStore,
    }}>
        <App />
    </Context.Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

