import React from 'react';
import { observer } from 'mobx-react-lite';

const BrandList = observer(({brandStore}) => {
    return (brandStore.brands.map(function (item) {
        return <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td><button type="button" onClick={() => { brandStore.deleteBrand(item.id); window.location.reload();}}>Удалить</button></td>
                </tr>
    }));
});

export default BrandList;