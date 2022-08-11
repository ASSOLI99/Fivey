import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoriesCard = () => {
  return (
    <div className="CategoriesCards my-5">
      <Container>
        <Row>
          <Col className="col-6 col-sm-4 col-md-3 d-flex justify-content-center align-items-center text-white p-2">
            <Link
              to="/categories"
              className="text-decoration-none btn btn-warning"
            >
              Design
            </Link>
          </Col>
          <Col className="col-6 col-sm-4 col-md-3 d-flex justify-content-center align-items-center text-white p-2">
            <Link
              to="/categories"
              className="text-decoration-none btn btn-warning"
            >
              Marketing
            </Link>
          </Col>
          <Col className="col-6 col-sm-4 col-md-3 d-flex justify-content-center align-items-center text-white p-2">
            <Link
              to="/categories"
              className="text-decoration-none btn btn-warning"
            >
              Calculus
            </Link>
          </Col>
          <Col className="col-6 col-sm-4 col-md-3 d-flex justify-content-center align-items-center text-white p-2">
            <Link
              to="/categories"
              className="text-decoration-none btn btn-warning"
            >
              Premiere pro
            </Link>
          </Col>
          <Col className="col-6 col-sm-4 col-md-3 d-flex justify-content-center align-items-center text-white p-2">
            <Link
              to="/categories"
              className="text-decoration-none btn btn-warning"
            >
              Ui & Ux
            </Link>
          </Col>
          <Col className="col-6 col-sm-4 col-md-3 d-flex justify-content-center align-items-center text-white p-2">
            <Link
              to="/categories"
              className="text-decoration-none btn btn-warning"
            >
              Ui & Ux
            </Link>
          </Col>
          <Col className="col-6 col-sm-4 col-md-3 d-flex justify-content-center align-items-center text-white p-2">
            <Link
              to="/categories"
              className="text-decoration-none btn btn-warning"
            >
              Ui & Ux
            </Link>
          </Col>
          <Col className="col-6 col-sm-4 col-md-3 d-flex justify-content-center align-items-center p-2">
            <Link
              to="/categories"
              className="text-decoration-none btn btn-warning"
            >
              Ui & Ux
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default CategoriesCard;
