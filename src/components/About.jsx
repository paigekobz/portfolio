import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center d-flex my-5">
          <div class="col-lg-7">
            <img
               src={require('../images/me.png')}
              alt=""
            />
          </div>
          <div class="col-lg-5 bg-white " style={{backgroundColor: "white", padding: "15px", borderRadius:"5px", boxShadow: "0 0 5px #888" }}>
          <h1 class="font-weight-light">About Me</h1>
            <p>
            I have experience in computer vision software development from a previous co-op position (click here to learn more),
             and some personal projects (here). 
             In my classes at UW, I learn how to solve problems using a holistic systems perspective,
              and how to design solutions through an iterative design process.
            </p>
          </div>
          </div>
          <div class="row align-items-center d-flex my-5">
          
          <div class="col-lg-5 bg-white " style={{backgroundColor: "white", padding: "15px", borderRadius:"5px", boxShadow: "0 0 5px #888" }}>
          <h1 class="font-weight-light">Computer Vision</h1>
            <p>My interest in computer vision was initially sparked during a co-op term at an automotive manufacturing plant. 
              I was working as a UI/UX designer on a team of students developing automation devices for the factory. 
              I got to work alongside students developing an autonomous vehicle for material movement, and vision applications to automate quality inspection processes.
               I found an immediate interest and decided to take a second co-op term at the same plant; this time to work on the development side.
                I got to work on an individual project to automate detection of fasteners. 
              See project link here (link this to Fastener Detection Project).</p>
              <p>
              After this experience, I have gone out of my way to learn as much as I can about computer vision, 
              image processing, and machine learning. This has included taking  classes such as: Image Processing, 
              Data Structures and Algorithms, and pursuing individual projects and research. 
              Link here to Computer Vision tagged projects

              </p>
              </div>
              <div class="col-lg-7">
            <img
              src={require('../images/cvml700.png')}
              alt=""
            />
            </div>
            </div>
            <div class="row align-items-center d-flex my-5">
            <div class="col-lg-7">
            <img
              src={require('../images/enviro1.png')}
              alt=""
            />
            </div>
            <div class="col-lg-5 bg-white " style={{backgroundColor: "white", padding: "15px", borderRadius:"5px", boxShadow: "0 0 5px #888"}}>
          <h1 class="font-weight-light">Environmental Advocacy</h1>
            <p>Being born and raised in North Vancouver, British Columbia, 
              I spent much of my childhood outdoors, hiking, camping, and exploring.
               After learning about climate change, I was quickly inspired to take action, joining the meatless Mondays club,
                and the district student sustainability council, as well as marketing for multiple climate strikes in high school. 
                </p>
                <p>
                Since getting to university, I have taken the time to learn how different systems, including energy, transportation, 
                and technology impact the environment in various ways. This has been achieved by taking classes such as Design, Systems, and Society, and Sustainability: The Future We Want, 
                as well as
                doing self-initiated research. Additionally, I have taken on projects that have demonstrated this interest such as: 
                designing a user interface for an eco-friendly travel app, 
                and developing a plan to phase-out the use of single-use plastics in the city of North Vancouver.
                </p>
          </div>
          
          </div>
          <div class="row align-items-center d-flex my-5">
           
            <div class="col-lg-5 bg-white " style={{backgroundColor: "white", padding: "15px", borderRadius:"5px", boxShadow: "0 0 5px #888" }}>
          <h1 class="font-weight-light">Designing for Equity and Accessibility</h1>
            <p>After acquiring an interest in feminism as a teen, I applied to take a social justice program in high school where I got the opportunity
               to learn about various social issues, and present ideas to municipal, provincial, and federal 
               government representatives. I additionally got the opportunity to travel to Ecuador with this class where
                I learned firsthand the impacts of Canadian mining companies on local communities.
 </p>
                <p>
                Since coming to university I have pursued additional education on these topics through studying Economics of Design, and Intro to Transnational Feminism in the Global South.
Additionally, during my exchange at Nanyang Technological University in Singapore, I have been provided with an opportunity to develop a global perspective. 
Learning about new technology popularized on the other side of the planet has inspired me even further to design equitable tech.
I have also taken on projects to promote social causes I care about such as: designing a social media user interface to connect people with charities and nonprofit organizations that match their goals,
 and designing a self-adjusting solar powered sun shade for wheelchair users.
 </p>
          </div>
          <div class="col-lg-7">
            <img
              src={require('../images/wheel2.png')}
              alt=""
            />
            </div>
          </div>
        </div>
      </div>
    
    
    
  );
}

export default About;