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
        <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFdXFKw-a0&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
      <p>
      <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFdXFKw-a0&#x2F;view?utm_content=DAFdXFKw-a0&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">End of Term Presentation</a>
      </p>
       <p>
          Insert additional images/text here.
        </p>
      </div>
    </div>
  );
}

export default Post;
