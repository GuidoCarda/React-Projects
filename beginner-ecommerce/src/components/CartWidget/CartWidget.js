import React from 'react'
import './CartWidget.css'

import { FaShoppingCart } from 'react-icons/fa'

const CartWidget = () => {
  return (
    <>
      <button className='cart-btn'>
        <span className='total-items'>1</span>
        <i className='cart-icon'><FaShoppingCart/></i>
      </button>
      
    </>
  )
}

export default CartWidget
