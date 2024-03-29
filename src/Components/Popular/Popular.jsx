import React from 'react';
// import { useState, useEffect } from 'react';
import './Popular.css';
import { Item } from '../Item/Item';
import data_product from '../Assests/data';

export const Populor = () => {

    // const [popularProducts, setPopularProducts] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:4000/popularinwomen')
    //     .then((response) => response.json())
    //     .then((data) => setPopularProducts(data))
    //  },[]);
    
    return ( 
        <div className='populor'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, index) => {
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}
