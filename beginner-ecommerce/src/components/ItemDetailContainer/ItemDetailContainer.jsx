import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'
import './ItemDetailContainer.css'

const ItemDetailContainer = ({onAdd}) => {
  
  const getItem = () => {
    return new Promise( (resolve,reject) => {
      setTimeout(() => {
        resolve({
          id: 'dkhga1',
          title: 'Teclado Redragon',
          description: 'Esto es una descripcion de ejemplo',
          stock: 10,
          price: 15500,
          pictureURL: 'https://www.venex.com.ar/products_images/1601297709_k552rgbsp3512x512.png',
          category: 'Perifericos'
        })
      }, 2000); 
    })
  }
  
  const [item,setItem] = useState({})
  const [loading,setLoading] = useState(false)
 
  useEffect(() => {
    setLoading(true)
    getItem().then( response => {
      setItem(response)
      setLoading(false)
    })
  }, [])

  return (
    <div className="container">    
      { loading ? <Loading/> : <ItemDetail item={item} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetailContainer
