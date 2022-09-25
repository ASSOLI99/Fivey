import { Container, Col, Form, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NewsLetter from "../UI/newsletter/NewsLetter";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FooterMenu.css";
const FooterMenu = () => {
  return (
    <>
      <Container fluid className="bg-white">
        <div className="">
          <NewsLetter />
        </div>
        <Row>
          <Col className="col-12 col-sm-6 col-md-4 col-xl-3 col1 mb-3">
            <h4 className="fs-6">Follow Us on</h4>
            <ul className="p-0 m-0 justify-content-start list-unstyled d-flex">
              <li className="social-li rounded-circle d-flex align-items-center justify-content-center me-2">
                <a className="social-page px-2 py-1" href="social-page">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="social-li rounded-circle d-flex align-items-center justify-content-center me-2">
                <a className="social-page px-2 py-1" href="social-page">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li className="social-li rounded-circle d-flex align-items-center justify-content-center me-2">
                <a className="social-page px-2 py-1" href="social-page">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="social-li  rounded-circle d-flex align-items-center justify-content-center  me-2">
                <a className="social-page px-2 py-1" href="social-page">
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
            <h5 className="fs-6 my-3">Get app exclusive deals</h5>
            <a
              href="our App"
              className="application py-2 px-3 rounded text-light text-decoration-none"
            >
              <i className="bi bi-phone me-2"></i>Download our App
            </a>
          </Col>
          <Col className="col-12 col-sm-6 col-md-3 col-xl-3 col2 mb-3">
            <h4 className="fs-5">Fivey</h4>
            <ul className="p-0 m-0 justify-content-start list-unstyled d-flex flex-column gap-2">
              <li>
                <Link to={"/About"}>About Us</Link>
              </li>
              <li>
                <Link to={"/categories"}>Courses</Link>
              </li>
              <li>
                <Link to={"/terms"}>Terms & Returns</Link>
              </li>
              <li>
                <Link to={"teachers"}>Our Teachers</Link>
              </li>
            </ul>
          </Col>
          <Col className="col-12 col-sm-6 col-md-3 col-xl-3 col3 mb-3">
            <h4 className="fs-5">My Account</h4>
            <ul className="p-0 m-0 justify-content-start list-unstyled d-flex flex-column gap-2">
              <li>
                <Link to={"/profile"}>My Account</Link>
              </li>
              <li>
                <Link to={"/cart"}>My Cart</Link>
              </li>
              <li>
                <Link to={"My-Account"}>My Courses</Link>
              </li>
              <li>
                <Link to={"My-Account"}>FAQ</Link>
              </li>
            </ul>
          </Col>
          <Col className="col-12 col-sm-6 col-md-2 col-xl-3 col4 mb-3">
            <h4 className="fs-5">Merchants</h4>
            <ul className="p-0 m-0 justify-content-start list-unstyled d-flex flex-column gap-2">
              <li>
                <Link to={"Merchants"}>Tun a Deal</Link>
              </li>
              <li>
                <Link to={"Merchants"}>Merchant Centre</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default FooterMenu;
