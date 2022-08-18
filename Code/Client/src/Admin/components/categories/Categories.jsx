import axios from "axios";
import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./categories.css";
const Categories = () => {
  const [backError, setBackError] = useState(false);
  const [imageData, setImageData] = useState("");
  const handleChange = (file) => {
    setImageData(file[0]);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const fData = new FormData();
    fData.append("image", imageData);
    fData.append("name", e.target[0].value);
    fData.append("description", e.target[1].value);
    const token = localStorage.getItem("token");
    axios
      .post("http://127.0.0.1:8000/api/categories/add", fData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        // let arr = Object.values(error.response.data.errors);
        // setBackError(arr);
      });
  };
  return (
    <div className="category">
      <Container fluid className="container-xl">
        <h1>Categories</h1>
        <Row>
          <Col className="options col-12 col-md-9 col-lg-8 col-xl-6">
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Form.Control type="text" placeholder="Name" name="name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label className="fw-bold">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Description"
                  name="description"
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>upload your image</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e.target.files)}
                  type="file"
                  name="image"
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
export default Categories;
