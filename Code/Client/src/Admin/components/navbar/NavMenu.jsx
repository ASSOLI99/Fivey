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
              className="me-auto my-2 my-lg-0 d-flex align-items-center"
              navbarScroll
            >
              <ul className="d-flex list-unstyled align-items-center p-0 m-0 justify-content-start">
                <li>
                  <Dropdown className="drop-categories">
                    <Dropdown.Toggle className="drop-btn" id="dropdown-basic">
                      All Corses
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        as={Link}
                        to="/React"
                        className="text-decoration-none text-dark"
                      >
                        React
                      </Dropdown.Item>
                      <Dropdown.Item
                        as={Link}
                        to="/PhotoShop"
                        className="text-decoration-none text-dark"
                      >
                        PhotoShop
                      </Dropdown.Item>
                      <Dropdown.Item
                        as={Link}
                        to="/Laravel"
                        className="text-decoration-none text-dark"
                      >
                        Laravel
                      </Dropdown.Item>
                      <Dropdown.Item
                        as={Link}
                        to="/React"
                        className="text-decoration-none text-dark"
                      >
                        React
                      </Dropdown.Item>
                      <Dropdown.Item
                        as={Link}
                        to="/React"
                        className="text-decoration-none text-dark"
                      >
                        React
                      </Dropdown.Item>
                      <Dropdown.Item
                        as={Link}
                        to="/React"
                        className="text-decoration-none text-dark"
                      >
                        React
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <Nav.Link as={Link} to="/categories" className="middle-link">
                    Trending
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={Link} to="/categories" className="middle-link">
                    New Courses
                  </Nav.Link>
                </li>

                <li>
                  <Nav.Link as={Link} to="/About" className="middle-link">
                    About Us
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={Link} to="/Create" className="middle-link">
                    Add <i className="bi bi-plus-circle-dotted"></i>
                  </Nav.Link>
                </li>
              </ul>
            </Nav>
            <Form className="position-relative">
              <span className="position-absolute search-icon-input">
                <i className="bi bi-search"></i>
              </span>
              <Form.Control
                type="search"
                placeholder="Search Fivey"
                aria-label="Search"
                className="search-input"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* middle nave end */}

      {/* bottom nave start */}
      <Navbar
        bg="light"
        className="d-block d-md-none bottom-nav"
        fixed="bottom"
      >
        <Container fluid className="d-flex justify-content-around px-0">
          <Nav.Link as={Link} to="/">
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-grid"></i>
            </span>
            <span>Categories</span>
          </Nav.Link>

          <Nav.Link as={Link} to="/">
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-search"></i>
            </span>
            <span>Search</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-play-circle-fill"></i>
            </span>
            <span>My Learnings</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-cart"></i>
            </span>
            <span>Cart</span>
          </Nav.Link>
        </Container>
      </Navbar>
      {/* bottom nave end */}
    </>
  );
};
export default NavMenu;
