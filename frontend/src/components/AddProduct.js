import { useState, useContext } from 'react';
import { Context } from "../index";

const Add = () => {

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();
    const [typeId, setTypeId] = useState();
    const [brandId, setBrandId] = useState();

    const { store } = useContext(Context);

    return (
        <div class="card-footer">
            <div class="row invoice-summary">
                <div class="col-lg-4">
                    <div class="invoice-info">
                        <p>name: <input onChange={e => setName(e.target.value)} value={name}/></p>
                        <p>price: <input onChange={e => setPrice(e.target.value)} value={price}/></p>
                        <p>img: <input onChange={e => setImg(e.target.value)} value={img}/></p>
                        <p>typeId: <input onChange={e => setTypeId(e.target.value)} value={typeId}/></p>
                        <p>brandId: <input onChange={e => setBrandId(e.target.value)} value={brandId}/></p>
                        <div class="invoice-info-actions">
                            <a onClick={() => {store.addGuitar(name, price, img, typeId, brandId)}} class="btn btn-success m-l-xs" type="button">Добавить</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add;
