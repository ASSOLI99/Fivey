import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.id);
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const url = `http://localhost:8000/api/course/categories`;
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {});
  }, []);

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
    fData.append("second_description", e.target[2].value);
    fData.append("tags", e.target[3].value);
    fData.append("language", e.target[4].value);
    fData.append("user_id", e.target[5].value);
    fData.append("category_id", e.target[6].value);
    fData.append("time", e.target[7].value);
    const token = localStorage.getItem("token");
    axios
      .post("http://127.0.0.1:8000/api/courses/add", fData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.errors) {
          setBackError(res.data.errors);
          setMessage(false);
        } else {
          setDisableBtn(true);
          setBackError(false);
          setMessage("added successfully");
          e.target.reset();
          navigate("/courses/myCourses");
        }
      });
  };
  const [disableBtn, setDisableBtn] = useState(false);
  return (
    <div className="category">
      <Container fluid className="container-xl text-center">
        <h1>Courses</h1>
        <Row className="d-flex justify-content-center text-start">
          <Col className="options col-12 col-md-9 col-lg-8 col-xl-6 ">
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="fw-bold">Course Name *</Form.Label>
                <Form.Control type="text" placeholder="Name" name="name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label className="fw-bold">Description *</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Description"
                  name="description"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicSecond_description"
              >
                <Form.Label className="fw-bold">
                  Second Description *
                </Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Second Description"
                  name="second_description"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="tags">
                <Form.Label className="fw-bold">
                  Tags space separated
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Design Marketing etc"
                  name="tags"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="language">
                <Form.Label className="fw-bold">language *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Arabic"
                  name="language"
                />
              </Form.Group>

              <Form.Control type="hidden" value={userId} name="user_id" />
              <Form.Group className="mb-3" controlId="formBasicCategory">
                <Form.Label className="fw-bold">Category *</Form.Label>
                <Form.Select aria-label="category" name="category_id">
                  <option disabled>Select Category</option>
                  {categories.map((category, index) => {
                    return (
                      <option key={index} value={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                  {/* <option value="1">Student</option>
                  <option value="2">instructor</option> */}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="time">
                <Form.Label className="fw-bold">Expected Time *</Form.Label>
                <Form.Control type="number" placeholder="20" name="time" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>upload your image</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e.target.files)}
                  type="file"
                  name="image"
                />
              </Form.Group>

              <Button disabled={disableBtn} variant="warning" type="submit">
                Submit
              </Button>
              <ul className="text-danger mt-2 p-0">
                {backError &&
                  backError.map((error, index) => {
                    return (
                      <li className="list-unstyled" key={index}>
                        - {error}
                      </li>
                    );
                  })}
              </ul>
            </Form>
          </Col>
        </Row>
        {message && <Alert variant="success my-4">{message}</Alert>}
      </Container>
    </div>
  );
};
export default Create;
