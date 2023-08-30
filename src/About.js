import React from 'react';
import Image from './images/test.jpg';


function About() {
  return (
    <div className="page">
      <h2>About me</h2>
      {/* Subheading and Paragraph for CV/ML */}
      <img src={Image} alt="Image 1" />
      {/* Subheading and Paragraph for Helping the environment */}
      <img src={Image} alt="Image 2" />
      {/* Subheading and Paragraph for Developing equitable tech */}
      <p>Contact: pkobzar@uwaterloo.ca</p>
    </div>
  );
}

export default About;
