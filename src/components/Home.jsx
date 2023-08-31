import React from "react";


function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <img class="media-object" src="{require('./home2.png')} " alt="..." />
           
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Hi, I'm Paige!</h1>
            <p>
            I’m a 3rd year engineering student at the University of Waterloo studying Systems Design Engineering.
            I am passionate about the environment, and I want to do work to make the world a more equitable, and sustainable place. 
            I am interested in computer vision and machine learning, and I am currently seeking a co-op position for January 2024. 
            
        
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;