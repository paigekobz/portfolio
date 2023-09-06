import React, { useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

function Solarshade() {
  let { postSlug } = "solarshade";

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">Solar Shade</h1>
        <p>
          Movgreen is an app I designed as part of a team for a hackathon. 
          We wanted to design a social media app that encourages people to travel in more eco-friendly ways. 
          The app allows you to post about your journeys with your friends, and earn points the more you move
          without contributing a carbon footprint.

        </p>
        <p>
        UI/UX Designer is a position I had at two of my co-op placements as well. From learning 
        UI/UX design as well as UX research I feel I have developed many transferable skills that 
        I can carry with me in other positions. 
         </p>

         <p>
            Anytime I work on a project, I have learned to put myself in the shoes of the final user. 
            I have learned to conduct thorough research and develop a list of requirements and constraints. 
            In UI/UX, I have learned the importance of clearly communicating my ideas and motivations. 
            As UX design is a very iterative process, I have lots of practice immediately applying feedback 
            to new iterations.
         </p>

        <p>
          Below 
        </p>
        <div>
          <p>
          If you have any questions about this project, feel free to  
          <NavLink to="/contact" style={{paddingLeft: "5px"}}>
            contact me!
          </NavLink>
          </p>
          
         </div>
         <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" 
        width="800" height="450" 
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FjKv3FbadApUCeqnFaKk1Nq%2FHackAttack-2020%3Ftype%3Ddesign%26mode%3Ddesign%26t%3Dsj27WHIJ8WINDPfW-1" 
        allowfullscreen></iframe>
        </div>
        
       
      </div>
    
  );
}

export default Solarshade;