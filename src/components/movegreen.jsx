import React from "react";

import { NavLink } from "react-router-dom";


function Movegreen() {

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">Movegreen</h1>
        <p>
          Movgreen is an app I designed as part of a team for a hackathon. 
          We wanted to design a social media app that encourages people to travel in more eco-friendly ways. 
          The app allows you to post about your journeys with your friends, and earn points the more you move
          without contributing a carbon footprint.

        </p>
        <img src={require('../images/frame 1.png')} alt="..."  style={{paddingBottom: "10px"}}/>
         
        <p>
        UI/UX Designer is a position I had at two of my co-op placements as well. From learning 
        UI/UX design as well as UX research I feel I have developed many transferable skills that 
        I can carry with me in other positions. 
         </p>

         <p>
            Anytime I work on a product, I have learned to put myself in the shoes of the final user. 
            I have learned to conduct thorough research and develop a list of requirements and constraints. 
            In UI/UX, I have learned the importance of clearly communicating my ideas and motivations. 
            As UX design is a very iterative process, I have lots of practice immediately applying feedback 
            to new iterations.
         </p>
         

        <p>
          Below is a link to the prototype of the app designed by my team and I.
        </p>
        <div>
          <p>
          If you have any questions about this project, feel free to  
          <NavLink to="/contact" style={{paddingLeft: "5px"}}>
            contact me!
          </NavLink>
          </p>
          <div class="row d-flex align-items-top my-5">
          <div class="col-lg-5">
          <a href="https://www.figma.com/proto/jKv3FbadApUCeqnFaKk1Nq/HackAttack-2020?type=design&node-id=1-4&t=hL5eVX6vEUqxlteb-1&scaling=scale-down&page-id=0%3A1&mode=design"  target="_blank"preview>
                  <button type="button" class="btn btn-primary" style={{paddingBottom: "10px"}}>
                  View Prototype
                  </button>
              </a>

          </div>
         
         <div class="col-lg-7">
         <img src={require('../images/image 3.png')} alt="..."  style={{paddingBottom: "10px"}}/>
         
         </div>
         </div>

         </div>
        
        </div>
        
       
      </div>
    
    );
}

export default Movegreen;


