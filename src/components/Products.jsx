import React from "react";
import Product from "./Product";
import './items';

const Products = () => {

  const items=[
    {
        id:1,
        itemname:'Rice Cooker',
        itemdescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?',
        itemprice:200,
        itemrating:4,
        brand:'Samsung',
    },
    
    {
        id:2,
        itemname:'Samsung TV',
        itemdescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?',
        itemprice:750,
        itemrating:5,
        brand:'Samsung',
    },
    {
        id:3,
        itemname:'Table-top Fridge',
        itemdescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?',
        itemprice:370,
        itemrating:3,
        brand:'Nasco',
    },
    {
        id:4,
        itemname:'Electric Stove',
        itemdescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?',
        itemprice:200,
        itemrating:4,
        brand:'LG',
    },

]

  return (
    <div id="products">
      <div className="page">
        <p className="heading">Our Products</p>
        <div className="productgrid">
        {items.map(element=><Product key={element.id} product={element}/>)}
        
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
        
        </div>
      </div>
    </div>
  );
};

export default Products;
