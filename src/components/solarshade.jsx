import React from "react";
import { NavLink } from "react-router-dom";
import Pdf from '../images/SolarshadeConclusions.pdf';


function Solarshade() {
  
  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">Solar Shade</h1>
        <p>
          This solar shade was designed as part of a team for a third-year design project. We were prompted
          to create a device powered by a solar panel that would optimize it's usage based on the position of the sun. 
          We decided to look beyond just optimizing power production of the solar panel, and we came up with an 
          idea to use the knowledge of the sun's location for another purpose: to keep people out of the shade. 
        </p>
        <p>
          We considered designing a product for able-bodied users that would shade them from the sun while working outside, 
          but felt it would not provide a great amount  of benefit to the users, as many people could easily move the shade with their hands as the sun moved. 
          Instead, we thought about how wheelchair users may not have the same level of access as they would need to use their hands to propel themselves, 
          or may have decreased mobility levels in their arms. 
        </p>
        <img src={require('../images/image 5.png')} alt="..."  style={{paddingBottom: "5px"}}/>
         
        <p>
        This solar sunshade gathers data from photoresitors as well as pre-defined sun-tracking software to make an estimate of the sun's position. 
        I developed a program that uses this data to provide intructions to a stepper motor which rotates the sunshade according to the position of the sun
        in order to provide maximal coverage from the sun, without obstructing the user's view.

        </p>
        <img src={require('../images/image 4.png')} alt="..."  />
        <p>
        Over the course of this project, our team overcame a variety of obstacles. From gathering materials to build our shade, to wiring up the 
        extensive circuitry, and finding times in our busy schedules to test our product while the sun was out.
         </p>
         <p>
            This project helped me to develop my skills in arduino programming, electrical circuit design, 
            mechanical design, and project management. Below are some pictures documenting our progress as well as an attachment
            to view a pdf of some final conclusions I made.

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
          <a href={Pdf}  target="_blank"preview>
                  <button type="button" class="btn btn-primary" style={{paddingBottom: "10px"}}>
                  View Conclusions
                  </button>
              </a>

          </div>
         
         <div class="col-lg-7">
         <img src={require('../images/image 6.png')} alt="..."  style={{paddingBottom: "10px"}}/>
         
         </div>
         </div>
         </div>
        </div>
        
       
      </div>
    
  );
}
export default Solarshade;