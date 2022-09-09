import React from "react";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <div id="blog">
      <div className="page">
        <p className="heading">Our Blog</p>

        <div className="blogflex">
         <Blog image="./blog1.jpg"/>
         <Blog image="./services.jpg" />          
        </div>
      </div>
    </div>
  );
};

export default Blogs;
