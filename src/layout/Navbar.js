import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span className="fs-5 d-none d-sm-inline logo-size">SRMS</span>
            </Link>
            
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="nav-item">
                <Link to="/" className={`nav-link align-middle px-0 text-nowrap ${activeLink === 0 ? 'active-link' : ''}`} onClick={() => handleLinkClick(0)}>
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/addnewstudents" className={`nav-link align-middle px-0 text-nowrap ${activeLink === 1 ? 'active-link' : ''}`} onClick={() => handleLinkClick(1)}>
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Add New Students</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/studentslist" className={`nav-link align-middle px-0 text-nowrap ${activeLink === 2 ? 'active-link' : ''}`} onClick={() => handleLinkClick(2)}>
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Students List</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/addnewcourses" className={`nav-link align-middle px-0 text-nowrap ${activeLink === 3 ? 'active-link' : ''}`} onClick={() => handleLinkClick(3)}>
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Add New Courses</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/courseslist" className={`nav-link align-middle px-0 text-nowrap ${activeLink === 4 ? 'active-link' : ''}`} onClick={() => handleLinkClick(4)}>
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Courses List</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/addnewresults" className={`nav-link align-middle px-0 text-nowrap ${activeLink === 5 ? 'active-link' : ''}`} onClick={() => handleLinkClick(5)}> 
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Add New Results</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/resultslist" className={`nav-link align-middle px-0 text-nowrap ${activeLink === 6 ? 'active-link' : ''}`} onClick={() => handleLinkClick(6)}>
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Results List</span>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
