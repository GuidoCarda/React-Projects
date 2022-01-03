import React from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = ({onAdd}) => {
  return (
    <div className='items-container'>
      <ItemList/>
    </div>
  )
}

export default ItemListContainer
