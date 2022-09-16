import React from 'react'
import Rating from './Rating'
import {Link} from 'react-router-dom'

const Product = ({product,addtocart}) => {
  return (
    <div className="product">
    <div className="productimage">
      <Link to={`/products/${product.id}`}><img src={require(`../images/${product.itemimage}`)} alt={product.itemname} /></Link>
    </div>
    <div className="productdetails">
    <p className="brand">
        {product.brand}
      </p>
      <p className="productname">{product.itemname}</p>
      <p className="rating"><Rating rating={product.itemrating } /></p>
      <p className="price">${product.itemprice}</p>
      <button className="click" onClick={()=>{addtocart(product)}}>Add To Cart</button>
    </div>
  </div>
  )
}

export default Product