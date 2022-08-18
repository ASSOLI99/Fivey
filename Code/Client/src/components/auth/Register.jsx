import axios from "axios";
import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./auth.css";
const Register = () => {
  const [backError, setBackError] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();

    const api = {
      name: e.target[0].value,
      userName: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
      password_confirmation: e.target[4].value,
    };
    axios
      .post("http://127.0.0.1:8000/api/register", api)
      .then((res) => {
        window.location.href = "http://localhost:5173/login";
      })
      .catch((error) => {
        let arr = Object.values(error.response.data.errors);
        setBackError(arr);
      });
  };
  return (
    <div className="auth">
      <Container fluid className="container-xl">
        <h1>SingUp</h1>
        <Row>
          <Col className="options col-12 col-md-9 col-lg-8 col-xl-6">
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Form.Control type="text" placeholder="Name" name="name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label className="fw-bold">User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="User Name"
                  name="userName"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <Form.Text className="text-white">
                  at least 8 length contain: number,upper & lower letter and one
                  spital character
                </Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicPassword_confirmation"
              >
                <Form.Label className="fw-bold">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                />
              </Form.Group>
              <Button variant="warning" type="submit">
                Submit
              </Button>
              <p className="text-danger mt-2">
                {backError &&
                  backError.map((error) => {
                    return (
                      <>
                        <li className="list-unstyled">- {error}</li>
                      </>
                    );
                  })}
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Register;
