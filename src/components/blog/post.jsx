import React, { useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">Fastener Detection</h1>
        <p>
        At my most recent co-op at Martinrea International, 
        I got the opportunity to champion a computer vision project for a very specific purpose- 
        Identifying Fasteners. 
        Through this journey I learned the fundamentals of object detection, computer vision, machine learning, data collection, and implementing a product in an industrial setting. 
        </p>

        <p>
          Embedded below is my end-of-term presentation which I presented to several managers at the Alfield plant I worked at, 
          as well as Martinrea executives from across Ontario.
        </p>
        <div>
          <p>
          If you have any questions about this project, feel free to  
          <NavLink to="/contact" style={{paddingLeft: "5px"}}>
            contact me!
          </NavLink>
          </p>
          
         </div>
        <div style={{
      position: 'relative',
      width: '100%',
      height: 0,
      paddingTop: '56.2500%',
      paddingBottom: 0,
      boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
      marginTop: '1.6em',
      marginBottom: '0.9em',
      overflow: 'hidden',
      borderRadius: '8px',
      willChange: 'transform'
    }}>
      <iframe
        loading="lazy"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          border: 'none',
          padding: 0,
          margin: 0,
        }}
        src="https://www.canva.com/design/DAFdXFKw-a0/view?embed"
        allowFullScreen="allowfullscreen"
        allow="fullscreen"
      ></iframe>
    </div>
    <a
      href="https://www.canva.com/design/DAFdXFKw-a0/view?utm_content=DAFdXFKw-a0&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
      target="_blank"
      rel="noopener"
    >
      PK EOT
    </a>
    <div style={{
      position: 'relative',
      width: '100%',
      
      paddingTop:"5%"}}>

      </div>

        </div>
        
       
      </div>
    
  );
}

export default Post;
