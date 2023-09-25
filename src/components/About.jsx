import React from 'react';

const About = () => {
  return (
    <div className="container-fluid">
      <h1 className='text-center mt-4'>About Me</h1>
      <div className="row justify-content-center m-5 p-4">
        <div className="col-md-6">
          <h2 className="fw-light">
            Hi! <span style={{ color: "#811873" }}>I'm Nihal </span>
          </h2>
          <div className='fs-4' style={{ color: "gray" }}>
            <p >
            I am software developer specialized in front-end technologies. I enjoy doing web design. I am creative, open to innovations and accustomed to teamwork.
            </p>
            <br />
            <p>
            I strive for continuous growth and better results by following industry trends.
            </p>
            <br />
            <p>
              You can reach my LinkedIn, GitHub, Xing, and Instagram accounts from the links below.
            </p>
            
            <h4 style={{ color: "#811873" }}>
              <a className="text-decoration-none text-white me-2 fs-4" 
                href="https://www.linkedin.com/in/nihaltekin/"
                target='_blank'>
                <i className="fab fa-linkedin" style={{color: "#811873" }} ></i>
              </a>

              <a className="text-decoration-none" 
                href='https://www.instagram.com/nihalplt/'
                target='_blank'>
                <i className="fab fa-instagram  p-3 m-2 " style={{color: "#811873"}}></i>
              </a>  

              <a className="text-decoration-none text-white fs-4 m-2" 
                href="https://www.xing.com/profile/nihal_tekin096610/cv"
                target='_blank'>
                <i className="fa-brands fa-xing" style={{color: "#811873"}}></i>
              </a>

              <a className="text-decoration-none text-white fs-4 m-2" 
                href="https://github.com/nihalptekin"
                target='_blank'>
                <i className="fa-brands fa-github" style={{color: "#811873"}} ></i>
              </a>
            </h4>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="https://thumbs.dreamstime.com/b/vertical-collage-program-developer-shocked-business-lady-hands-cheeks-use-laptop-freelancer-big-money-income-isolated-pink-282869628.jpg"
            alt="aboutimage"
            style={{ width: "75%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
