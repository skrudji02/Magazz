import { useState, useEffect } from 'react';

const Table = () => {

    const [product, setProduct] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/magazz/product/guitar")
        .then(res => res.json())
        .then(
          (result) => {
            setProduct(result);
          }
        )
      }, []);


    const data_table = product.map(function (item) {
        return <tr>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.typeId}</td>
        <td>{item.brandId}</td>
        <td><button>Изменить</button> <button>Удалить</button></td>
    </tr>
      });



    return (   
<div class="app align-content-stretch d-flex flex-wrap">
    <div class="app-sidebar">
        <div class="app-menu">
            <ul class="accordion-menu">
                <li class="sidebar-title">
                    Таблички
                </li>
                <li>
                    <a href="index.html"><i class="material-icons-two-tone">dashboard</i>Dashboard</a>
                </li>
            </ul>
        </div>
    </div>

    <div class="app-container">
        <div class="app-content">
            <div class="content-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="card invoice">
                                <div class="card-body">
                                    <div class="invoice-header">
                                        <div class="row">
                                            <div class="col-9">
                                                <h3>Invoice <button>+</button></h3>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div class="row">
                                        <div class="table-responsive">
                                            <table class="table invoice-table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">typeId</th>
                                                        <th scope="col">brandId</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data_table}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>);
}

export default Table;