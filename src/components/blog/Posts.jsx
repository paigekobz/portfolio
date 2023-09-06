import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          
          
            <div class="col-lg-5 bg-white " style={{backgroundColor: "white", padding: "15px", borderRadius:"5px", boxShadow: "0 0 5px" }}>
            <h1 class="font-weight-light">Fastener Detection</h1>
            <p>
            At my most recent co-op at Martinrea International, 
        I got the opportunity to champion a computer vision project for a very specific purpose- 
        Identifying Fasteners. 
        Through this journey I learned the fundamentals of object detection, data collection, and implementing a product in an industrial setting. 
        
        
            </p>
            <Link to="/blog/fastener-detection">
            <button type="button" class="btn btn-primary">Learn More</button>
            </Link>
          </div>
          <div class="col-lg-7">
          <img src={require("../../images/fastener700.png")} alt="..."  />
           
          </div>
        </div>
        <div class="row align-items-center my-5">
          
        <div class="col-lg-7">
          <img src={require("../../images/wheel2.png")} alt="..."  />
           
          </div>
            <div class="col-lg-5 bg-white " style={{backgroundColor: "white", padding: "15px", borderRadius:"5px", boxShadow: "0 0 5px" }}>
            <h1 class="font-weight-light">Solar Shade</h1>
            <p>
            Through this project for my Uwaterloo design course, 
            I learned the fundamentals of solar power collection, 
            arduino programming, and electro-mechanical design. 
            We were prompted to design a product that would harness solar energy, 
            and use it to power a motor. This solar shade prototype, made for wheelchair users,
             measures sunlight intensity, and automatically re-orients itself to shade the user 
             from the area with the greatest sunlight. 

        
            </p>
            <Link to="/blog/solarshade">
            <button type="button" class="btn btn-primary">Learn More</button>
            </Link>
          </div>
          <div class="row align-items-center my-5">
          
        <div class="col-lg-7">
          <img src={require("../../images/Frame 1.png")} alt="..."  />
           
          </div>
            <div class="col-lg-5 bg-white " style={{backgroundColor: "white", padding: "15px", borderRadius:"5px", boxShadow: "0 0 5px" }}>
            <h1 class="font-weight-light">Movegreen</h1>
            <p>
            An app that allows people to connect with others 
            while being conscious of their own carbon 
            footprint to reduce air pollution and climate change.
        
            </p>
            <Link to="/blog/movegreen">
            <button type="button" class="btn btn-primary">Learn More</button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
