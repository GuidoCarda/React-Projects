import React from 'react'
import './ItemCount.css'
import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

const ItemCount = ({ stock, initial, onAdd}) => {

  const [ count, setCount ] = useState(initial);

  const addItem = () => setCount( count + 1 )
  const removeItem = () => setCount( count - 1 )

  return (
    <div className='item-container'>
      <span>Stock disponible: {stock}</span>
      <div className="count-container">
        <button className='control-btn' onClick={removeItem} disabled={count === 0}><FaMinus/></button>
        <span>{count}</span>
        <button className='control-btn'  onClick={addItem} disabled={ count === stock || stock === 0}><FaPlus/></button>
      </div>
      <button className='item-btn' onClick={()=>onAdd(count)} disabled={!stock || count === 0}>{ stock ? 'Agregar al carrito' : ' No hay stock'}</button>
    </div>
  )
}

export default ItemCount
