import { useState, useEffect, useContext } from 'react';
import { Context } from "../index";
import { observer } from 'mobx-react-lite';
import Navbar from '../components/navbar/Navbar';
import '../styles/css/table.css';

const Table = observer(() => {

    const { musicInstrumentStore, typeStore, brandStore } = useContext(Context);
    const [viewTable, setView] = useState('');

    useEffect(() => {
        typeStore.getTypes();
        brandStore.getBrand();
    }, []);

    const [nameProduct, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState(null);
    const [typeId, setTypeId] = useState(0);
    const [brandId, setBrandId] = useState(0);

    const selectImg = e => {
        console.log(e.target.files[0]);
        setImg(e.target.files[0].name);
        console.log(img);
    }

    const table = musicInstrumentStore.product.map(function (item) {
        return <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.typeId}</td>
                    <td>{item.brandId}</td>
                    <td><button>Изменить</button> <button type="button" onClick={() => { musicInstrumentStore.deleteProduct(item.id); }}>Удалить</button></td>
                </tr>
    });

    const veiwTable = () => {
        if(viewTable){
            return                         <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">typeId</th>
                <th scope="col">brandId</th>
            </tr>
        </thead>
        }else{
            return  <button type="button" className="btn btn-primary btn-lg" onClick={()=>{musicInstrumentStore.getProduct(); setView(true);}}>Показать данные</button>
        }
    }

    const type = typeStore.types.map((type) => {
        return <option value={type.id}>{type.name}</option>
    });

    const brand = brandStore.brands.map((brand) => {
        return <option value={brand.id}>{brand.name}</option>
    })

    return (
        <>
        <Navbar></Navbar>
        
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <table className="table">
                        {veiwTable()}
                        <tbody>
                            {table}
                        </tbody>
                    </table>
                </div>
                
                <div className="col">
                <div className="input_data">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Name</span>
                        <input onChange={e => setName(e.target.value)} value={nameProduct} type="text" className="control" aria-label="Пример размера поля ввода" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Price</span>
                        <input onChange={e => setPrice(e.target.value)} value={price} type="text" className="form-control" aria-label="Пример размера поля ввода" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="input-group mb-3">
                        <input onChange={e => setImg(e.target.files[0].name)} type="file" className="form-control"/>
                        <label className="input-group-text" for="inputGroupFile02">Фото</label>
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text">Type</label>
                        <select onChange={e => setTypeId(e.target.value)} className="form-select">
                            <option selected>Выберите...</option>
                                {type}
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text">Brand</label>
                        <select onChange={e => setBrandId(e.target.value)} className="form-select">
                            <option selected>Выберите...</option>
                                {brand}
                         </select>
                    </div>
                    <button onClick={() => {musicInstrumentStore.addProduct(nameProduct, price, img, typeId, brandId)}} type="button" className="btn btn-primary btn-lg">Применить</button>
                </div>
                </div>
            </div>
        </div>
        </>
    );
});

export default Table;