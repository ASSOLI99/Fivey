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
import CardMenu from "../../../components/UI/card/CardMenu";
import { Link } from "react-router-dom";
import "./categories.css";
const Categories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState(false);
  const [number, setNumber] = useState(1);
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState({
    data: ["Array", " Array"],
    current_page: "",
    per_page: "",
    total: "",
  });
  useEffect(() => {
    setIsLoading(true);
    const url = `http://localhost:8000/api/categories?page=${page}`;
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCategories(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
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
    const token = localStorage.getItem("token");
    axios
      .post("http://127.0.0.1:8000/api/categories/add", fData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
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
  const { data, current_page, per_page, total } = categories;

  return (
    <div className="category">
      <Container fluid className="container-xl text-center">
        <h1>Categories</h1>
        <Row className="d-flex justify-content-center text-start">
          <Col className="options col-12 col-md-9 col-lg-8 col-xl-6 ">
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
              <ul className="text-danger mt-2 p-0">
                {backError &&
                  backError.map((error, index) => {
                    // console.log("index :>> ", index);
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
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="overflow-hidden">
              {!isLoading && (
                <>
                  {data.map((category, index) => {
                    return (
                      <tr key={index}>
                        <td>{category.id}</td>
                        <td>
                          <img
                            src={`http://localhost:8000/img/category/${category.image}`}
                            width="80px"
                          />
                        </td>
                        <td>{category.name}</td>
                        <td className="overflow-hidden">
                          {category.description.length > 51
                            ? `${category.description.slice(0, 50)}...`
                            : category.description}
                        </td>
                        <td>
                          <Link
                            to={`${category.id}`}
                            className="btn btn-warning"
                          >
                            Edit/Delete
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
export default Categories;
