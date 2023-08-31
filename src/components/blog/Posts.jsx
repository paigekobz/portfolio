import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home">
      <div class="container">
        <div class="row d-flex align-items-center my-5">
          
          
            <div class="col-lg-5 bg-white " style={{backgroundColor: "white", padding: "15px", borderRadius:"5px", boxShadow: "5px 5px 5px #888" }}>
            <h1 class="font-weight-light">Fastener Detection</h1>
            <p>
            At my most recent co-op at Martinrea International, 
        I got the opportunity to champion a computer vision project for a very specific purpose- 
        Identifying Fasteners. 
        Through this journey I learned the fundamentals of object detection, data collection, and implementing a product in an industrial setting. 
        
        
            </p>
            <Link to="/blog/this-is-a-post-title">
            <button type="button" class="btn btn-primary">Learn More</button>
            </Link>
          </div>
          <div class="col-lg-7">
          <img src={require("../../images/fastenercover.png")} alt="..."  />
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
