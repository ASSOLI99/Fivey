import axios from "axios";
import { useState, useEffect } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import CardMenu from "../../../components/UI/card/CardMenu";
import "./SingleCat.css";
const SingleCat = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState({});
  const [editClasses, setEditClasses] = useState("showEditForm");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState(1);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/categories/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCategoryData(res.data[0]);
        console.log(res.data[0]);
        setDescription(res.data[0].description);
        setTitle(res.data[0].name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [number]);
  const deleteHandler = () => {
    let okay = "Are You Sure!\nEither OK or Cancel.";
    if (confirm(okay) == true) {
      axios
        .delete(`http://127.0.0.1:8000/api/categories/delete/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
          navigate("../");
        });
    } else {
      return;
    }
  };
  const changeHandler = () => {
    if (editClasses === "") {
      setEditClasses("showEditForm");
    } else {
      setEditClasses("");
    }
  };
  const [backError, setBackError] = useState(false);
  const [message, setMessage] = useState(false);

  // const [imageData, setImageData] = useState("");
  // const handleChange = (file) => {
  //   setImageData(file[0]);
  //   console.log(imageData);
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    const fData = new FormData();
    fData.append("_method", "PUT");
    fData.append("name", e.target[0].value);
    fData.append("description", e.target[1].value);
    if (e.target[2].files[0]) {
      fData.append("image", e.target[2].files[0]);
    }

    // for (var data of fData.entries()) {
    //   console.log(data[0] + ", " + data[1]);
    // }

    const token = localStorage.getItem("token");
    axios
      .post(`http://127.0.0.1:8000/api/categories/edit/${id}`, fData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.errors) {
          setBackError(res.data.errors);
          setNumber(number + 1);
          setMessage(false);
        } else {
          setBackError(false);
          setNumber(number + 1);
          setMessage("Updated Successfully");
        }
      })
      .catch((error) => {
        console.log(error);
        // let arr = Object.values(error.response.data.errors);
        // setBackError(arr);
      });
  };

  const descriptionHandleChange = (e) => {
    setDescription(e.target.value);
  };

  const titleHandleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="singleCatContainer">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="col-12 col-md-6 col-lg-4 mt-5">
            <CardMenu
              hasRate={false}
              description={categoryData.description}
              title={categoryData.name}
              hasDetails={false}
              hasCart={false}
              secondDescription={false}
              time={false}
              cardImage={`http://localhost:8000/img/category/${categoryData.image}`}
            />
          </Col>
          {message && <Alert variant="success my-4">{message}</Alert>}
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
              <Form.Control
                value={title}
                onChange={titleHandleChange}
                type="text"
                placeholder="Name"
                name="name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label className="fw-bold">Description</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                placeholder="Description"
                name="description"
                value={description}
                onChange={descriptionHandleChange}
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
