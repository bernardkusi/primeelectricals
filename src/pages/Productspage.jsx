import React from "react";
import Product from "../components/Product";

const Productspage = () => {
  const items = [
    {
      id: 1,
      itemname: "Toaster",
      itemimage: "toaster.jpg",
      itemdescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?",
      itemprice: 200,
      itemrating: 4,
      brand: "Samsung",
    },

    {
      id: 2,
      itemname: "Samsung TV",
      itemimage: "ledtv.jpg",
      itemdescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?",
      itemprice: 750,
      itemrating: 5,
      brand: "Samsung",
    },
    {
      id: 3,
      itemname: "Double-door Fridge",
      itemimage: "fridge.jpg",
      itemdescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?",
      itemprice: 370,
      itemrating: 3,
      brand: "Nasco",
    },
    {
      id: 4,
      itemname: "Blender",
      itemimage: "blender.jpg",
      itemdescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?",
      itemprice: 120,
      itemrating: 5,
      brand: "Binatone",
    },
    {
      id: 5,
      itemname: "Electric Stove",
      itemimage: "electricstove.jpg",
      itemdescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?",
      itemprice: 200,
      itemrating: 4,
      brand: "LG",
    },
    {
      id: 6,
      itemname: "Iron",
      itemimage: "iron.jpg",
      itemdescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?",
      itemprice: 155,
      itemrating: 5,
      brand: "LG",
    },
    {
      id: 7,
      itemname: "Microwave",
      itemimage: "microwave.jpg",
      itemdescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?",
      itemprice: 300,
      itemrating: 5,
      brand: "LG",
    },
    {
      id: 8,
      itemname: "Mixer",
      itemimage: "mixer.jpg",
      itemdescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odioatque ad veniam eius?",
      itemprice: 150,
      itemrating: 4,
      brand: "Nasco",
    },
  ];

  return (
    <div className="page full">
      <h3 className="heading">Products in stock</h3>
      <div id="products">

        <div className="productgrid">
          {items.map((element) => (
            <Product key={element.id} product={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productspage;
