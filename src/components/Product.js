import React from 'react'
import Rating from './Rating'

const Product = ({product}) => {
  return (
    <div className="product">
    <div className="productimage">
      <img src={require(`../images/${product.itemimage}`)} alt={product.itemname} />
    </div>
    <div className="productdetails">
    <p className="brand">
        {product.brand}
      </p>
      <p className="productname">{product.itemname}</p>
      <p className="rating"><Rating rating={product.itemrating } /></p>
      <p className="price">${product.itemprice}</p>
      <button className="click">Add To Cart</button>
    </div>
  </div>
  )
}

export default Product