import React, { useEffect, useState } from 'react'
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
  const [products,setProducts] = useState([]);
  useEffect((() =>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
    .then(res => res.json())
    .then(data => setProducts(data)
    )
  }),[])

  
  const handleAddrpoduct = () => {
    console.log('Product Add');
  }

  return (
    <div className='shop-container'>
      <div className="product-container">

        {
          products.map((product, i) => (
            <Product product={product} key={i} handleAddrpoduct={handleAddrpoduct}></Product>
          ))
        }
      
      </div>
      <div className="cart-container">
        <h1>This is cart</h1>
      </div>
    </div>
  )
}

export default Shop
