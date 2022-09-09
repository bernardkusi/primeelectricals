import React from 'react'

const Blog = ({image}) => {
  return (
    <div className="blog">
    <div className="blogimage">
      <img src={image} alt="blogimage" />
    </div>
    <div className="blogdetails">
      <p className="blogname">Lorem ipsum dolor sit.</p>
      <p className="blogtext">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
        accusantium deleniti magnam veritatis! Accusamus expedita nihil
        maxime aliquid! Autem at repellendus omnis est earum numquam
        dolores eligendi quae. Dolores pariatur voluptas ullam!
      </p>
      <a href="#" className="click">Read more</a>
    </div>
  </div>
  )
}

export default Blog