import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
  console.log(props.product);
  const {  name, seller, stock,img,price} = props.product;
  const handleAddrpoduct = props.handleAddrpoduct;
  return (
    <div className='product'>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className='product-name'>{name}</h4>
        <br />
        <p><small>by:{seller}</small></p>
        <p>${price}</p>
        <br />
        <p><small>Only {stock} left in stock - Order soon</small></p>
        <button className='main-button' onClick={()=>handleAddrpoduct()}>
          <FontAwesomeIcon icon={faShoppingCart}
          />add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;