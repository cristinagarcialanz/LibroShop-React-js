import React, {memo} from 'react';
import "../hojas-de-estilo/ItemList.css";
import Item from './Item';

function ItemList({ items }) {
  //mapear los productos

  return (
    <div className='item-list'>

      { items.map((prod) => { 
        return <Item prod={prod} key={prod.id} /> } ) }
      
    </div>
  );
}

export default memo(ItemList);