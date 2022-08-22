import "./categories.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Pagination from "react-js-pagination";
import CardMenu from "../../../components/UI/card/CardMenu";
import { Link } from "react-router-dom";

const Categories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  // async function getCategoriesData(pageNumber = 1) {

  // }
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
  }, [page]);
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
      })
      .catch((error) => {
        console.log(error);
        // let arr = Object.values(error.response.data.errors);
        // setBackError(arr);
      });
  };
  const { data, current_page, per_page, total } = categories;

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
        <Row className="p-3 d-flex justify-content-center">
          {!isLoading && (
            <>
              {data.map((category, index) => {
                return (
                  <Col className="col-lg-4 col-md-6 col-12" key={index}>
                    <Link to={`${category.id}`}>
                      <CardMenu
                        hasRate={false}
                        description={category.description}
                        hasDetails={false}
                        hasCart={false}
                        secondDescription={false}
                        cardImage={`http://localhost:8000/img/category/${category.image}`}
                      />
                    </Link>
                  </Col>
                );
              })}
            </>
          )}
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
