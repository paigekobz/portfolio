import React from "react";
import Pdf from '../images/PaigeKobzar2024Winter.pdf';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row d-flex align-items-center my-5">
          <div class="col-lg-7">
          <img src={require('../images/home2.png')} alt="..."  />
           
          </div>
          
            <div class="col-lg-5 bg-white " style={{backgroundColor: "white", padding: "15px", borderRadius:"5px", boxShadow: "5px 5px 5px #888" }}>
            <h1 class="font-weight-light">Hi, I'm Paige!</h1>
            <p>
            I’m a 3rd year engineering student at the University of Waterloo studying Systems Design Engineering.
            I am passionate about the environment, and I want to do work to make the world a more equitable, and sustainable place. 
            I am interested in computer vision and machine learning, and I am currently seeking a co-op position for January 2024. 
            
        
            </p>
            

              <a href={Pdf} without rel="noopener noreferrer" target="_blank">
                  <button type="button" class="btn btn-primary">
                  Download Resume
                  </button>
              </a>

             </div>
        </div>
      </div>
    </div>
  );
}

export default Home;