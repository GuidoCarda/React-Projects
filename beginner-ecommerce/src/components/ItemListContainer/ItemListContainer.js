import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import products from './products'

const ItemListContainer = () => {

  const [items,setItems] = useState([])

  useEffect( ()=> {
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(products)
      },3000)
    })

    promise.then( response => {
      setItems(response);
    })
  })

  const addToCart = ( count ) => alert(`${count} ${ count > 1 ? 'items agregados' : 'item agregado'} al carrito`)
  
  return (
    <div className="container">
      <ItemList items={items} onAdd={addToCart} />
    </div>
  )
}

export default ItemListContainer
