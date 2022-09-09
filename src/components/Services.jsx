import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      style={{
        backgroundImage:
          " linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(./services.jpg)",
      }}
    >
      <div className="page">
        <p className="heading">Our Services</p>

        <div className="serviceflex">
          <div className="service">
            <div className="service2">
              <div className="front">
                <h1>
                  <i class="fa-solid fa-truck-fast"></i>
                </h1>
              </div>
              <div className="back">
                <p className="title">Fast Delivery</p>
                <p className="body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, tenetur. Esse corrupti saepe atque vel amet suscipit.
                </p>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service2">
              <div className="front">
                <h1>
                  <i class="fa-solid fa-money-bill-wave"></i>
                </h1>
              </div>
              <div className="back">
                <p className="title">Affordable goods</p>
                <p className="body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, tenetur. Esse corrupti saepe atque vel amet suscipit.
                </p>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service2">
              <div className="front">
                <h1>
                  <i class="fa-solid fa-handshake"></i>
                </h1>
              </div>
              <div className="back">
                <p className="title">Quality quaranteed</p>
                <p className="body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, tenetur. Esse corrupti saepe atque vel amet suscipit.
                </p>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service2">
              <div className="front">
                <h1>
                  <i class="fa-solid fa-globe"></i>
                </h1>
              </div>
              <div className="back">
                <p className="title">Online purchase</p>
                <p className="body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, tenetur. Esse corrupti saepe atque vel amet suscipit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
