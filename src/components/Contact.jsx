import React, { useState, useEffect } from "react";
const AnimatedText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const typingSpeed = 100; // Adjust the typing speed as needed

  useEffect(() => {
    let currentIndex = 0;
    let timeout;

    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayText(prevText => prevText + text[currentIndex]);
        currentIndex++;
        timeout = setTimeout(typeText, typingSpeed);
      } else {
        clearTimeout(timeout);
      }
    };

    typeText();

    return () => {
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    <div style={{ textAlign: 'center', fontSize: '24px' }}>
      <p>{displayText}</p>
    </div>
  );
};





function Contact() {
  return (
    <div className="contact">
      <div class="container">

      <AnimatedText text="Nice to meet you! Let's keep in touch" />

        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img src={require('../images/pretty.png')} alt="..."  />
           
            
          </div>
          <div class="col-lg-5"  style={{backgroundColor: "white", padding: "15px", borderRadius:"5px", boxShadow: "5px 5px 5px #888" }}>
            <h1 class="font-weight-light">Contact</h1>
            <p>
              Hi! Feel free to email me at <a href="mailto:pkobzar@uwaterloo.ca" style={{paddingRight: "5px"}}>pkobzar@uwaterloo.ca</a>
              or visit my Linkedin and Github pages
            </p>
            <a href="mailto:pkobzar@uwaterloo.ca" without rel="noopener noreferrer" target="_blank">
                  <button type="button" class="btn btn-primary" >
                  Send an email
                  </button>
              </a>
              <a href="https://www.linkedin.com/in/paige-kobzar/" without rel="noopener noreferrer" target="_blank" style={{paddingLeft: "5px"}}>
                  <button type="button" class="btn btn-primary" >
                  Visit Linkedin
                  </button>
              </a>
              <a href="https://github.com/paigekobz" without rel="noopener noreferrer" target="_blank" style={{paddingLeft: "5px"}}>
                  <button type="button" class="btn btn-primary">
                  Visit Github
                  </button>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;