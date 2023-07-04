import { useContext, useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import { Context } from "../index";
import { observer } from 'mobx-react-lite';

const Type = observer(() =>{

    const {typeStore} = useContext(Context);
    const [type, setType] = useState('');

    useEffect(() =>{
        typeStore.getTypes();
    }, []);

    const data_table = typeStore.types.map(function (item) {

        return <tr>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td><button type="button" onClick={() => { typeStore.deleteType(item.id)}}>Удалить</button></td>
        </tr>
    });

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
                                <th scope="col">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data_table}
                        </tbody>
                    </table>
                </div>
                
                <div class="col">
                <div class="input_data">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Type</span>
                        <input onChange={e => setType(e.target.value)} value={type} type="text" class="form-control" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <button onClick={() => {typeStore.addType(type)}} type="button" class="btn btn-primary btn-lg">Добавить</button>
                </div>
                </div>
            </div>
        </div>
        </>
    );
});

export default Type;