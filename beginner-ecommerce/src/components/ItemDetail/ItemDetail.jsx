import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({item, onAdd}) => {
  console.log(item)
  return (
    <>
      <div className='item-detail'> 
        <img className='item-detail-img'
      src={item.pictureURL}
      alt=""
      />

      <div className="item-detail-info">
          <span className='item-detail-category'>{item.category}</span>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <span className='item-detail-price'>${item.price}</span>
        <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/> 
      </div>
      </div>
    </>
  )
}

export default ItemDetail
