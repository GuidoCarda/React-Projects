import React from 'react'
import './Item.css'

const Item = ({src}) => {
  console.log(src)
  return (
    <div className="item">
      <img className="item-img" src={src} alt="" />
      <div className="item-desc">
        <h3>Titulo de ejemplo</h3>
        <p>Descripcion de ejemplo</p>
      </div>
    </div>
  )
}

export default Item
