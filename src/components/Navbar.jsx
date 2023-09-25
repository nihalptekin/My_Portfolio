import React from 'react';

const Navbar = () => {
  return (
    <div >
      <nav className="navbar navbar-expand-lg fixed-top d-flex justify-content-center " style={{ zIndex: 10, backgroundColor: "#d9d7ed" }}>
        <div className="border rounded-pill bg-white mt-5 mb-5 ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                 Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fas fa-info" style={{ color: "#883081" }}></i> About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 <i class="fas fa-pen" style={{ color: "#883081" }}></i> Projects
                </a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Hizmet 1</a></li>
                <li><a class="dropdown-item" href="#">Hizmet 2</a></li>
                <li><a class="dropdown-item" href="#">Hizmet 3</a></li>
              </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-person" style={{ color: "#883081" }}></i> Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-list" style={{ color: "#80239a" }}></i> Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-phone fa-rotate-250" style={{ color: "#852c90" }}></i> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
