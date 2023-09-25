import React from 'react';

const About = () => {
  return (
    <div>
      <div className="d-flex justify-content-center m-5 p-4">
        <img
          className="me-5"
          src="./img/about.jpeg"
          alt="aboutimage"
          style={{ width: "600px", height: "400px" }}
        />
        <div>
          <h1>Neden Ben?</h1>
          <h2 className="fw-light">
            Merhaba! <span style={{ color: "#811873" }}>Ben Selim</span>
          </h2>
          <div>
            <p style={{ color: "gray" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              perferendis, recusandae explicabo esse, veniam molestias non
              mollitia debitis numquam, officia adipisci totam vitae molestiae
              soluta deserunt quos voluptate fugit!
            </p>
            <br />
            <p style={{ color: "gray" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              perferendis, recusandae explicabo esse, veniam molestias non
              mollitia debitis numquam, officia adipisci totam vitae molestiae
              soluta deserunt quos voluptate fugit!
            </p>
            <br />
            <p style={{ color: "gray" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              perferendis, recusandae explicabo esse, veniam molestias non
              mollitia debitis numquam, officia adipisci totam vitae molestiae
              soluta deserunt quos voluptate fugit!
            </p>
            <h4 style={{ color: "#811873" }}>
              <i
                className="fab fa-facebook-f pt-3 pb-3 pe-4 ps-4 m-2 rounded-circle"
                style={{ border: "1px solid rgb(27, 27, 27)" }}
              ></i>

              <i
                className="fab fa-youtube p-3 m-2 rounded-circle"
                style={{ border: "1px solid rgb(27, 27, 27)" }}
              ></i>

              <i
                className="fab fa-linkedin p-3 m-2 rounded-circle"
                style={{ border: "1px solid rgb(27, 27, 27)" }}
              ></i>

              <i
                className="fab fa-instagram p-3 m-2 rounded-circle"
                style={{ border: "1px solid rgb(27, 27, 27)" }}
              ></i>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
