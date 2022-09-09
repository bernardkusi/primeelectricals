import React from "react";

const Home = () => {
  return (
    <div id="home" style={{backgroundImage:" linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(./gadget.jpg)"}}>
      <div className="intro">
        <h1>All Your <span>Quality</span> Electrical Gadgets At Prime <span>Electricals</span></h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          necessitatibus fuga morem ipsum dolor sit amet.
        </p>

        <a href="#" className="click">Click Here</a>
      </div>
    </div>
  );
};

export default Home;
