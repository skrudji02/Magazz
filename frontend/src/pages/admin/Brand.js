import { useContext, useEffect, useState } from 'react';
import { Context } from "../../index";
import Navbar from '../../components/navbar/Navbar';
import { observer } from 'mobx-react-lite';
import BrandList from '../../components/BrandList';

const Brand = observer(() =>{

  const {brandStore} = useContext(Context);
  const [brandsList, setListBrands] = useState([]);
  const [nameBrand, setBrand] = useState('');
  
  useEffect(() =>{
    brandStore.getBrand().then(brands => setListBrands(brands));  
  }, []);
 
  const BrandList = brandsList.map(function (item) {
        return <tr>
                   <th scope="row">{item.id}</th>
                   <td>{item.name}</td>
                   <td><button type="button" onClick={() => { brandStore.deleteBrand(item.id); setListBrands(brandsList.filter(element=> element.id !== item.id))}} className="btn btn-primary btn-sm">Удалить</button></td>
                </tr>
  });


    return(
        <>
        <Navbar></Navbar>
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Брэнд</th>
                            </tr>
                        </thead>
                        <tbody>
                           {BrandList}
                        </tbody>
                    </table>
                </div>
                <div className="col">
                <div className="input_data">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Брэнд</span>
                        <input onChange={e => setBrand(e.target.value)} value={nameBrand} type="text" className="form-control" aria-describedby="inputGroup-sizing-default" placeholder='Введите новый брэнд'/>
                    </div>
                    <button onClick={() => {brandStore.addBrand(nameBrand).then(res=>setListBrands(prev => [...prev, res]))}} type="button" className="btn btn-primary btn-lg">Добавить</button>
                </div>
                </div>
            </div>
        </div>
        </>
    );
})

export default Brand;