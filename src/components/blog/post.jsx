import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">Fastener Detection</h1>
        <h6 className="mb-5">The post slug is, {postSlug}</h6>
        <p>
        At my most recent co-op at Martinrea International, 
        I got the opportunity to champion a computer vision project for a very specific purpose- 
        Identifying Fasteners. 
        Through this journey I learned the fundamentals of object detection, data collection, and implementing a product in an industrial setting. 
        </p>
        <p>
          Insert canva presentation here
        </p>
        <p>
          Insert additional images/text here.
        </p>
      </div>
    </div>
  );
}

export default Post;
