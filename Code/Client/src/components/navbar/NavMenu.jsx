import { useState, useEffect } from "react";
import {
  Nav,
  Form,
  Navbar,
  Container,
  NavDropdown,
  Dropdown,
  Modal,
  Button,
} from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavMenu.css";
import FiveyLogo from "./Fivey-navbar.png";
import axios from "axios";
const NavMenu = () => {
  const [categories, setCategories] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const userId = useSelector((state) => state.user.id);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/category/dropMenu")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const role = useSelector((state) => state.user.role);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://127.0.0.1:8000/api/cart/length/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCartLength(res.data.length);
      });
  }, [userId]);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.loggingOut());
    localStorage.removeItem("token");
    location.reload();
  };
  const searchHandler = (e) => {
    e.preventDefault();
    if (e.target.children[1].value) {
      navigate(`/search/${e.target.children[1].value}`);
    } else {
      navigate(`/search/${e.target.children[0].value}`);
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} className="options" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-black">Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={searchHandler}>
            <Form.Control
              type="text"
              className="mb-3"
              name="search"
              placeholder="Find course"
              autoFocus
            />

            <Button type="submit" variant="warning" onClick={handleClose}>
              Search
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* top navbar start */}
      <Navbar
        className={`${scroll ? "back-nav" : "top-nav"} bg-main-blue text-light`}
        sticky="top"
      >
        <Container fluid className="container-xl">
          <Navbar.Collapse className="d-flex justify-content-between ">
            <Navbar.Brand as={Link} to="/" className="fs-2 fw-bold text-light">
              <img src={FiveyLogo} alt="Logo" width="80px" />
            </Navbar.Brand>
            <Nav
              className="my-2 my-lg-0 d-flex align-items-center text-light"
              navbarScroll
            >
              <i className="bi bi-globe2 fs-3"></i>
              <NavDropdown
                className="topDropMenu white-drop-menu text-light"
                title="Arabic"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item>
                  <span className="text-black">Arabic</span>
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item>
                  <span className="text-black">English</span>
                </NavDropdown.Item>
              </NavDropdown>
              {role && (
                <Nav.Link
                  as={Link}
                  to="/cart"
                  className="cart-icon position-relative fs-4 text-light d-none d-md-block"
                >
                  {cartLength != 0 && (
                    <span className="cart-length-top">{cartLength}</span>
                  )}

                  <i className="bi bi-cart"></i>
                </Nav.Link>
              )}

              <Dropdown className="user-drop-down">
                <Dropdown.Toggle id="dropdown-button-dark-example1">
                  <i className="bi bi-person"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {role && (
                    <>
                      <Dropdown.Item as={Link} to="/profile">
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Divider />
                    </>
                  )}
                  {role == 2 && (
                    <>
                      <Dropdown.Item as={Link} to="courses/myCourses">
                        My Courses
                      </Dropdown.Item>
                      <Dropdown.Divider />
                    </>
                  )}
                  {role && (
                    <>
                      <Dropdown.Item as={Link} to="/Learnings">
                        My Purchases
                      </Dropdown.Item>
                      <Dropdown.Divider />
                    </>
                  )}

                  {!role && (
                    <>
                      <Dropdown.Item as={Link} to="/login">
                        Login
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item as={Link} to="/register">
                        Register
                      </Dropdown.Item>
                    </>
                  )}
                  {role && (
                    <Dropdown.Item onClick={logoutHandler}>
                      Logout
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link
                as={Link}
                to="/Learnings"
                className="fs-4 text-light d-flex align-items-center d-none d-md-block"
              >
                <i className="bi bi-fast-forward-circle-fill"></i>{" "}
                <span className="fs-6 ms-1">My Learnings</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* top navbar end */}

      {/* middle navbar start */}
      <Navbar
        className={`
                ${
                  scroll ? "top-nav" : "back-nav "
                } middle-navBar d-none d-md-flex main-navBar bg-white`}
        sticky="top"
      >
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
                      {categories.map((category) => {
                        return (
                          <Dropdown.Item
                            as={Link}
                            key={category.name}
                            to={`/categories/${category.name}`}
                            className="text-decoration-none text-dark"
                          >
                            {category.name}
                          </Dropdown.Item>
                        );
                      })}
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
                {role == 2 ? (
                  <li>
                    <Nav.Link
                      as={Link}
                      to="courses/Create"
                      className="middle-link"
                    >
                      Add <i className="bi bi-plus-circle-dotted"></i>
                    </Nav.Link>
                  </li>
                ) : (
                  <li>
                    {role ? (
                      <Nav.Link
                        as={Link}
                        to="/Learnings"
                        className="middle-link"
                      >
                        watch <i className="bi bi-play-circle"></i>
                      </Nav.Link>
                    ) : (
                      <Nav.Link as={Link} to="/login" className="middle-link">
                        Login <i className="bi bi-box-arrow-in-right"></i>
                      </Nav.Link>
                    )}
                  </li>
                )}
              </ul>
            </Nav>
            <Form
              className="position-relative"
              action="go"
              onSubmit={searchHandler}
            >
              <span className="position-absolute search-icon-input">
                <i className="bi bi-search"></i>
              </span>
              <Form.Control
                type="search"
                placeholder="Find Courses"
                aria-label="Search"
                className="search-input"
                name="search"
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
          <Nav.Link as={Link} to="/categories">
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-grid"></i>
            </span>
            <span>Categories</span>
          </Nav.Link>

          <Nav.Link onClick={handleShow}>
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-search"></i>
            </span>
            <span>Search</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/Learnings">
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-play-circle-fill"></i>
            </span>
            <span>My Learnings</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/categories">
            <span className="d-flex justify-content-center nav-icon">
              <i className="bi bi-fire"></i>
            </span>
            <span>Trending</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            <span className="d-flex justify-content-center nav-icon position-relative">
              {cartLength != 0 && (
                <span className="cart-length-bottom">{cartLength}</span>
              )}
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
