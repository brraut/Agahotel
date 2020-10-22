import React from "react";

function Services() {
  return (
    <>
      <div className="lyfeinn-services">
        <div className="header">Our Services</div>

        <div className="dis-container">
          <div className="discover-content">
            <div className="img-container">
              <img
                className="img-fluid"
                src={require("../../assets/images/breakfast.jpg")}
                alt=""
              />
            </div>
            <div className="text">Breakfast in Bed</div>
            <div className="overlay-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              pariatur assumenda nobis voluptatum deserunt sint error
              voluptates!
            </div>
            <div className="overlay-color"></div>
          </div>

          <div className="discover-content">
            <div className="img-container">
              <img
                className="img-fluid"
                src={require("../../assets/images/laundry.jpg")}
                alt=""
              />
            </div>
            <div className="text">Laundry</div>
            <div className="overlay-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              pariatur assumenda nobis voluptatum deserunt sint error
              voluptates!
            </div>
            <div className="overlay-color"></div>
          </div>

          <div className="discover-content">
            <div className="img-container">
              <img
                className="img-fluid"
                src={require("../../assets/images/gym1.jpg")}
                alt=""
              />
            </div>
            <div className="text">Indoor Gym</div>
            <div className="overlay-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              pariatur assumenda nobis voluptatum deserunt sint error
              voluptates!
            </div>
            <div className="overlay-color"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
