import React from 'react';
// import { useState, useEffect } from 'react';
import '../NewCollections/NewCollections.css';
import new_collections from '../Assests/new_collections';
import { Item } from '../Item/Item';

const NewCollections = () => {

  // const [new_collection, setNew_Collection] = useState([]);

  // useEffect(() => {
  //    fetch('http://localhost:4000/newcollections')
  //    .then((response) => response.json())
  //    .then((data) => setNew_Collection(data))
  // },[]);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
          {new_collections.map((item,index) => {
             return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
      </div>
    </div>
  )
}

export default NewCollections;