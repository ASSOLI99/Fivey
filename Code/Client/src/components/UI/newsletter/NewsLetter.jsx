import { Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NewsLetter.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NewsLetter = () => {
  return (
    <Container fluid className="container-xl">
      <div className="form-content d-flex justify-content-between bg-white my-4 py-5 px-4 align-items-center">
        <h2 className="fs-5 fw-bold">
          Get the best deals delivered direct to your inbox
        </h2>
        <Form className="d-flex justify-content-center align-items-center">
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>
          <span>
            <i className="bi bi-envelope"></i>
          </span>
          <Button className="fw-bold" variant="primary" type="submit">
            Subscribe
          </Button>
        </Form>
      </div>
    </Container>
  );
};
export default NewsLetter;
