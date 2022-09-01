import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Table,
} from "react-bootstrap";
import Pagination from "react-js-pagination";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Courses.css";

const Courses = () => {
  const userId = useSelector((state) => state.user.id);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState(false);
  const [number, setNumber] = useState(1);
  // async function getCategoriesData(pageNumber = 1) {

  // }
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState({
    data: ["Array", " Array"],
    current_page: "",
    per_page: "",
    total: "",
  });
  useEffect(() => {
    const url = `http://localhost:8000/api/course/categories`;
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const url = `http://localhost:8000/api/courses?page=${page}`;
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCourses(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [page, number]);
  const pageNumber = (value) => {
    setPage(value);
  };
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
          setBackError(false);
          setMessage("added successfully");
          e.target.reset();
          setNumber(number + 1);
        }
      });
  };
  const { data, current_page, per_page, total } = courses;
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

              <Button variant="warning" type="submit">
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
        <Row className="category-table p-3 d-flex justify-content-center overflow-scroll">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>image</th>
                <th>Course Name</th>
                <th>User Name</th>
                <th>State</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="overflow-hidden">
              {!isLoading && (
                <>
                  {data.map((courses, index) => {
                    return (
                      <tr key={index}>
                        <td>{courses.course_id}</td>
                        <td>
                          <img
                            className="img-fluid"
                            src={`http://localhost:8000/img/course/${courses.course_image}`}
                            width="70px"
                          />
                        </td>
                        <td>{courses.course_name}</td>
                        <td>{courses.user_name}</td>

                        <td>
                          {courses.course_state == 0 ? "Hidden" : "Active"}
                        </td>
                        <td>
                          <Link
                            to={`${courses.course_id}`}
                            className="btn btn-warning"
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </Table>

          {isLoading && (
            <div className="spinner-border text-warning" role="status"></div>
          )}

          <div className="d-flex justify-content-center mt-5">
            <Pagination
              activePage={Number(current_page)}
              totalItemsCount={Number(total)}
              itemsCountPerPage={Number(per_page)}
              onChange={(pageNum) => {
                pageNumber(pageNum);
              }}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default Courses;
