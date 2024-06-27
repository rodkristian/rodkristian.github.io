import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [active, setActive] = useState();
  return (
      <div className="pointclick d-flex justify-content-between flex-column bg-dark text-white py-3 ps-3 pe-5 vh-100">
        <div>
          <a href="" className="p-3 text-white text-decoration-none">
            <FontAwesomeIcon icon={faCat} className="fs-4 me-4" />
            <span className="fs-3">Neko</span>
          </a>
          <hr className="text-white mt-2" />
          <ul className="nav nav-pills flex-column mt-3">
            <li className={active === 1 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"} 
                onClick={(e) => setActive(1)}>
              <Link to="/" className="p-1 text-decoration-none text-white">
                <i className="bi bi-speedometer2 me-3 fs-4"></i>
                <span className="fs-4">
                  Dashboard
                </span>
              </Link>
            </li>
            <li className={active === 2 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"} 
                onClick={(e) => setActive(2)}>
              <Link to="/users" className="p-1 text-decoration-none text-white">
                <i className="bi bi-people me-3 fs-4"></i>
                <span className="fs-4">
                  Users
                </span>
              </Link>
            </li>
            <li className={active === 3 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"} 
                onClick={(e) => setActive(3)}>
              <Link to="/orders" className="p-1 text-decoration-none text-white">
                <i className="bi bi-table me-3 fs-4"></i>
                <span className="fs-4">
                  Orders
                </span>
              </Link>
            </li>
            <li className={active === 4 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"} 
                onClick={(e) => setActive(4)}>
              <span className="p-1 text-decoration-none text-white">
                <i className="bi bi-grid me-3 fs-4"></i>
                <span className="fs-4">
                  Reports
                </span>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <hr className="text-white mt-2" />
          <div className="nav-item">
            <a href="" className="p-3 text-white text-decoration-none">
              <i className="bi bi-person-circle me-3 fs-5"></i>
              <span className="fs-4">
                Krin
              </span>
            </a>
          </div>
        </div>
      </div>
  );
}

export default Sidebar;
