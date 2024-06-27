import React from "react"
import 'bootstrap/dist/js/bootstrap.bundle.js'

function Navbar({Toggle}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid p-1">
        <a className="navbar-brand d-block d-md-none" onClick={Toggle}>
          <i className='bi bi-justify'></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link rounded border" aria-current="page" href="#">
                <i className="bi bi-search"></i>
                Search
              </a>
            </li>
            <li className="nav-item mx-2 rounded border">
              <a className="nav-link" aria-current="page" href="#">
                Account
              </a>
            </li>
            <li className="nav-item rounded border">
              <a className="nav-link" aria-current="page" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
