import axios from "axios";
import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
const Login = () => {
  //navigate
  const navigate = useNavigate();
  //message
  const [message, setMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  //email
  const [emailValid, setEmailValid] = useState(false);
  //password
  const [passwordValid, setPasswordValid] = useState(false);

  const emailHandler = (e) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      setEmailValid(true);
      setEmailMessage("");
    } else {
      setEmailValid(false);
      setEmailMessage("Invalid Email Format");
    }
  };
  const passwordHandler = (e) => {
    if (
      /^(?=.*\d)(?=.*[!@#$%^&._*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
        e.target.value
      )
    ) {
      setPasswordValid(true);
      setPasswordMessage("");
    } else {
      setPasswordValid(true);
      setPasswordMessage(
        "at least 8 length contain: number,upper & lower letter and one spital character"
      );
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (emailValid && passwordValid) {
      const api = {
        email: e.target[0].value,
        password: e.target[1].value,
      };
      axios.post("http://127.0.0.1:8000/api/login", api).then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
        location.reload();
      });
    } else {
      setMessage("Invalid Credential !");
    }
    setMessage("Invalid Credential !");
  };
  return (
    <div className="auth">
      <Container>
        <h1>
          Login <span>.</span>
        </h1>
        <Link className="text-light link-warning" to={"/register"}>
          Don't have Account ?
        </Link>
        <Row>
          <Col className="options col-12 col-md-8">
            <Form onSubmit={submitHandler}>
              <Form.Group className="group mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">
                  <i class="bi bi-envelope"></i> Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onKeyDown={emailHandler}
                  onChange={emailHandler}
                  placeholder="Enter email"
                />
                <Form.Text className="text-danger">{emailMessage}</Form.Text>
              </Form.Group>

              <Form.Group className="group mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">
                  <i class="bi bi-shield-lock"></i> Password
                </Form.Label>
                <Form.Control
                  type="password"
                  onKeyDown={passwordHandler}
                  onChange={passwordHandler}
                  name="password"
                  placeholder="Password"
                />
                <Form.Text className="text-danger">{passwordMessage}</Form.Text>
              </Form.Group>
              <Button
                disabled={emailValid && passwordValid ? false : true}
                variant="warning"
                type="submit"
              >
                Login
              </Button>
              <p className="text-danger mt-2">{message}</p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
