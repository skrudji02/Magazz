import { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Context } from "../../index";
import { observer } from 'mobx-react-lite';

const Type = observer(() =>{

    const {typeStore} = useContext(Context);
    const [listTypes, setListTypes] = useState([]);
    const [newType, setNewType] = useState([]);

    useEffect(() =>{
      typeStore.getTypes().then(types => setListTypes(types));
    }, []);

    const data_table = listTypes.map(function (item) {

        return <tr>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td><button type="button" onClick={() => { typeStore.deleteType(item.id); setListTypes(listTypes.filter((type) => type.id !== item.id))}} className="btn btn-primary btn-sm">Удалить</button></td>
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
                                <th scope="col">Тип</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data_table}
                        </tbody>
                    </table>
                </div>
                <div className="col">
                <div className="input_data">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Тип</span>
                        <input onChange={e => setNewType(e.target.value)} value={newType} type="text" className="form-control" aria-describedby="inputGroup-sizing-default" placeholder='Введите тип продукта'/>
                    </div>
                    <button onClick={() => {typeStore.addType(newType).then(type => setListTypes(prev => [...prev, type]))}} type="button" className="btn btn-primary btn-lg">Добавить</button>
                </div>
                </div>
            </div>
        </div>
        </>
    );
});

export default Type;