import React, { useEffect } from "react";
import { useState } from "react";
import Product from "../components/Product";
import { items } from "../products";

const Productspage = ({addtocart}) => {
  const [products,setproducts]=useState([])
  useEffect(() => {
  setproducts(items)
  }, [])
  

  return (
    <div className="page full">
      <h3 className="heading">Products in stock</h3>
      <div id="products">

        <div className="productgrid">
          {products && products.map((element) => (
            <Product key={element.id} product={element} addtocart={addtocart}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productspage;
