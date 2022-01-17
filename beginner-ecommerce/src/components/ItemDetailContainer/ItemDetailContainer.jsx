import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  return (
    <div className="container details-flex">    
      <img src="https://logitechar.vteximg.com.br/arquivos/ids/157593-1000-1000/G733-FOB-Blk.png?v=637358672115100000" alt="" />  
      <div>
        <h1>Detail container</h1> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vero officiis eligendi, voluptatem laborum dolorem a perferendis debitis porro veritatis soluta doloribus illum sint quibusdam mollitia autem assumenda beatae fugiat.</p>
        <ItemCount/>
      </div>
    </div>
  )
}

export default ItemDetailContainer
