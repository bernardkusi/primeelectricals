import React from 'react'
import Product from '../components/Product'

const Productpage = () => {
    const items=[
        {
            id:1,
            itemname:'Toaster',
            itemimage:'toaster.jpg',
            itemdescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?',
            itemprice:200,
            itemrating:4,
            brand:'Samsung',
        },
        
        {
            id:2,
            itemname:'Samsung TV',
            itemimage:'ledtv.jpg',
            itemdescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?',
            itemprice:750,
            itemrating:5,
            brand:'Samsung',
        },
        {
            id:3,
            itemname:'Double-door Fridge',
            itemimage:'fridge.jpg',
            itemdescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?',
            itemprice:370,
            itemrating:3,
            brand:'Nasco',
        },
        {
            id:4,
            itemname:'Blender',
            itemimage:'blender.jpg',
            itemdescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?',
            itemprice:120,
            itemrating:5,
            brand:'Binatone',
        },
    ]
  return (
    <div>
        <div className='page full'>
      <h3 className="heading">You searched for Blender</h3>
      <div className="item">
          <div className="image">
            <img src={require("../images/blender.jpg")} alt="fridge" />
          </div>
          <div className="details">
            <p className="itemname">Blender</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              molestias adipisci corrupti quae iste perferendis!
            </p>
            <p className="rating">
            
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            
            </p>
            <button className="click">Buy Now</button>
          </div>
        </div>
    <h3 className="heading">Other Products in stock</h3>
      <div id="products">
        <div className="productgrid">
        {items.map(element=><Product key={element.id} product={element}/>)}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Productpage