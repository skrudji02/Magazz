import { useContext, useEffect, useState } from 'react';
import { Context } from "../index";
import Navbar from '../components/navbar/Navbar';
import { observer } from 'mobx-react-lite';
import BrandList from '../components/BrandList';

const Brand = observer(() =>{

    const {brandStore} = useContext(Context);
    const [nameBrand, setBrand] = useState('');
    const [data, setTable] = useState([]);

    useEffect(() =>{
        brandStore.getBrand();
    }, []);

  


    return(
        <>
        <Navbar></Navbar>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Brand</th>
                            </tr>
                        </thead>
                        <tbody>
                            <BrandList brandStore = {brandStore}></BrandList>
                        </tbody>
                    </table>
                </div>
                
                <div class="col">
                <div class="input_data">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Brand</span>
                        <input onChange={e => setBrand(e.target.value)} value={nameBrand} type="text" class="form-control" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <button onClick={() => {brandStore.addBrand(nameBrand); brandStore.getBrand();}} type="button" class="btn btn-primary btn-lg">Добавить</button>
                </div>
                </div>
            </div>
        </div>
        </>
    );
})

export default Brand;