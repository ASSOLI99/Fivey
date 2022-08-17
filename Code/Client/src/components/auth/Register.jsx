import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./auth.css";
const Register = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (!e.target[0].value == "") {
      const api = {
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
      };
      axios.post("http://127.0.0.1:8000/api/register", api).then(() => {
        window.location.href = "http://localhost:5173/login";
      });
    }
  };
  return (
    <div className="auth">
      <Container fluid className="container-xl">
        <h1>SingUp</h1>
        <Row>
          <Col className="options col-12 col-md-8">
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="warning" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Register;
