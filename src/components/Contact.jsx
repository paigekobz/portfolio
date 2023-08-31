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
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;