import React from "react";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <div className="page">
        <p className="heading">Testimonials</p>
        <div className="testimonialflex">
          <div className="image">
            <img src="./testimonial.jpg" alt="testimonialimage" />
          </div>
          <div className="testimonial">

            <div>
              <div className="person">

                  <div className="image">
                     <img src={require('../images/person2.jpg')} alt="person" />
                  </div> 

                  <p className="name">Bernard Kusi</p>         
              </div>
              
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita praesentium iusto nobis officia inventore repellendus,
                ratione consectetur?
              </p>
            </div>
            
            <div>
              <div className="person">

                  <div className="image">
                     <img src={require('../images/person2.jpg')} alt="person" />
                  </div> 

                  <p className="name">Bernard Kusi</p>         
              </div>
              
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita praesentium iusto nobis officia inventore repellendus,
                ratione consectetur?
              </p>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
