import { useState, useEffect } from "react";
import {
  Nav,
  Form,
  Navbar,
  Container,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth-slice";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavMenu.css";
const NavMenu = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.loggingOut());
    localStorage.removeItem("token");
  };
  return (
    <>
      <div className="helper d-none d-md-block"></div>
      {/* middle navbar start */}
      <Navbar className="top-nav middle-navBar d-none d-md-flex main-navBar bg-white fixed-top">
        <Container fluid className="container-xl">
          <Navbar.Collapse>
            <Nav
              className="full-nav-width justify-content-center my-2 my-lg-0 d-flex align-items-center"
              navbarScroll
            >
              <ul className="d-flex list-unstyled align-items-center p-0 m-0 justify-content-center">
                <li>
                  <Nav.Link
                    as={Link}
                    to="/Admin/category"
                    className="middle-link"
                  >
                    <i className="bi bi-grid"></i> Category
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    as={Link}
                    to="/Admin/courses"
                    className="middle-link"
                  >
                    <i className="bi bi-camera-video-fill"></i> Courses
                  </Nav.Link>
                </li>

                <li>
                  <Nav.Link
                    as={Link}
                    to="/Admin/message"
                    className="middle-link"
                  >
                    <i className="bi bi-chat-quote"></i> Message
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={Link} to="/Admin/users" className="middle-link">
                    <i className="bi bi-person-circle"></i> Users
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    as={Link}
                    to="/Admin/message"
                    className="middle-link"
                  >
                    <i className="bi bi-coin"></i> Revenue
                  </Nav.Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* middle nave end */}

      {/* bottom nave start */}
      <Navbar
        bg="white"
        className="d-block d-md-none bottom-nav"
        fixed="bottom"
      >
        <Container fluid className="d-flex justify-content-around px-0">
          <Nav.Link className="icon-link" as={Link} to="/Admin/category">
            <span className="icon-link d-flex justify-content-center nav-icon">
              <i className="bi bi-grid"></i>
            </span>
          </Nav.Link>
          <Nav.Link className="icon-link" as={Link} to="/Admin/users">
            <span className="icon-link d-flex justify-content-center nav-icon">
              <i className="bi bi-person-circle"></i>
            </span>
          </Nav.Link>
          <Nav.Link as={Link} to="/Admin/courses">
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-camera-video-fill"></i>
            </span>
          </Nav.Link>
          <Nav.Link as={Link} to="/Admin/message">
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-chat-quote"></i>
            </span>
          </Nav.Link>
          <Nav.Link as={Link} to="/Admin/revenue">
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-coin"></i>
            </span>
          </Nav.Link>
        </Container>
      </Navbar>
      {/* bottom nave end */}
    </>
  );
};
export default NavMenu;
