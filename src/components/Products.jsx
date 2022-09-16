import React, { useState } from "react";
import Product from "./Product";
import { items } from "../products";


const Products = ({addtocart}) => {

const [products,setproducts]=useState(items)

  return (
    <div id="products">
      <div className="page">
        <p className="heading">Our Products</p>
        <div className="productgrid">
        {products.map(element=><Product key={element.id} product={element} addtocart={addtocart}/>)}
        
        
        </div>
      </div>
    </div>
  );
};

export default Products;
