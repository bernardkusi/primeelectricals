import React, { useState } from 'react'
import { useEffect } from 'react'
import Product from '../components/Product'
import {items} from '../products'
import {useParams} from 'react-router-dom'
import Rating from '../components/Rating'

const Productpage = ({addtocart}) => {
    let { id } = useParams();

    const [products,setproducts]=useState([])
    const [product,setproduct]=useState(null)

 
    
    useEffect(()=>{
            setproduct(items.find(item=>String(item.id)===id)) 
            console.log(id)
            console.log(product)  

    },[id])
    
    useEffect(() => {
      setproducts(items.filter((item,index)=>{
        return index<=3;
      }))

    }, [])
    
    
  return (
    <div>
        <div className='page full'>
      <h3 className="heading">You searched for {product && product.itemname}</h3>
     {product &&  <div className="item">
          <div className="image">
            <img src={require(`../images/${product.itemimage}`)} alt={product.itemname} />
          </div>
          <div className="details">
            <p className="itemname">{product.itemname}</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              molestias adipisci corrupti quae iste perferendis!
            </p>
            <p className="itemprice">${product.itemprice}</p>
            <Rating rating={product.itemrating } />
            <button className="click" onClick={()=>{addtocart(product)}}>Buy Now</button>
          </div>
        </div>}
    <h3 className="heading">Other Products in stock</h3>
      <div id="products">
        <div className="productgrid">
        {products && products.map(element=><Product key={element.id} product={element} addtocart={addtocart}/>)}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Productpage