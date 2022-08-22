import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import CardMenu from "../../../components/UI/card/CardMenu";
import "./SingleCat.css";
const SingleCat = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState("");
  const [editClasses, setEditClasses] = useState("showEditForm");
  const token = localStorage.getItem("token");
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`http://127.0.0.1:8000/api/categories/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("s");
        setCategoryData(res.data[0]);
        console.log("hi");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const deleteHandler = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/categories/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        navigate("../");
      });
  };
  const changeHandler = () => {
    if (editClasses === "") {
      setEditClasses("showEditForm");
    } else {
      setEditClasses("");
    }
  };
  const [backError, setBackError] = useState(false);
  // const [imageData, setImageData] = useState("");
  // const handleChange = (file) => {
  //   setImageData(file[0]);
  //   console.log(imageData);
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    const fData = new FormData();
    fData.append("name", e.target[0].value);
    fData.append("description", e.target[1].value);
    fData.append("image", e.target[2].files[0]);
    // console.log(e.target[2].files[0]);
    for (var data of fData.entries()) {
      console.log(data[0] + ", " + data[1]);
    }
    const token = localStorage.getItem("token");
    axios
      .put(`http://127.0.0.1:8000/api/categories/edit/${id}`, fData, {
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
  return (
    <div className="singleCatContainer">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="col-12 col-md-6 col-lg-8">
            <CardMenu
              hasRate={false}
              description={categoryData.description}
              hasDetails={false}
              hasCart={false}
              secondDescription={false}
              cardImage={`http://localhost:8000/img/category/${categoryData.image}`}
            />
          </Col>
        </Row>
        <p onClick={deleteHandler} className={"btn btn-danger"}>
          Delete
        </p>
        <br />
        <p onClick={changeHandler} className={"btn btn-primary"}>
          Edit
        </p>
        <div className={`options ${editClasses}`}>
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
              <Form.Control type="file" name="image" />
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
        </div>
      </Container>
    </div>
  );
};
export default SingleCat;
