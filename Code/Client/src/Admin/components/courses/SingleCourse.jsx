import axios from "axios";
import { useState, useEffect } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CardMenu from "../../../components/UI/card/CardMenu";
import "./SingleCourse.css";
const SingleCourse = () => {
  const userId = useSelector((state) => state.user.id);
  const navigate = useNavigate();
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState({});
  const [editClasses, setEditClasses] = useState("showEditForm");
  const [description, setDescription] = useState("");
  const [secondDescription, setSecondDescription] = useState("");
  const [tags, setTags] = useState("");
  const [language, setLanguage] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState(1);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/courses/admin/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCategoryData(res.data[0]);
        console.log(res.data[0]);
        setTitle(res.data[0].name);
        setDescription(res.data[0].description);
        setSecondDescription(res.data[0].second_description);
        setTags(res.data[0].tags);
        setLanguage(res.data[0].language);
        setTime(res.data[0].time);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [number]);
  const deleteHandler = () => {
    let okay = "Are You Sure!\nEither OK or Cancel.";
    if (confirm(okay) == true) {
      axios
        .delete(`http://127.0.0.1:8000/api/courses/delete/${id}`, {
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
    fData.append("second_description", e.target[2].value);
    fData.append("tags", e.target[3].value);
    fData.append("language", e.target[4].value);
    fData.append("time", e.target[5].value);

    if (e.target[6].files[0]) {
      fData.append("image", e.target[6].files[0]);
    }
    fData.append("user_id", e.target[7].value);
    fData.append("category_id", e.target[8].value);
    const token = localStorage.getItem("token");
    axios
      .post(`http://127.0.0.1:8000/api/courses/edit/${id}`, fData, {
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
          changeHandler();
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
  const secondDescriptionHandleChange = (e) => {
    setSecondDescription(e.target.value);
  };
  const tagsHandleChange = (e) => {
    setTags(e.target.value);
  };
  const languageHandleChange = (e) => {
    setLanguage(e.target.value);
  };
  const timeHandleChange = (e) => {
    setTime(e.target.value);
  };
  return (
    <div className="singleCatContainer">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="col-10 col-sm-6 col-lg-3 mt-5">
            <CardMenu
              hasRate={4}
              description={categoryData.description}
              title={categoryData.name}
              hasDetails={true}
              hasCart={true}
              secondDescription={categoryData.second_description}
              time={categoryData.time}
              cardImage={`http://localhost:8000/img/course/${categoryData.image}`}
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
            <Form.Group
              className="mb-3"
              controlId="formBasicSecond_description"
            >
              <Form.Label className="fw-bold">Second Description</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                placeholder="Second Description"
                name="second_description"
                value={secondDescription}
                onChange={secondDescriptionHandleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTags">
              <Form.Label className="fw-bold">Tags</Form.Label>
              <Form.Control
                type="text"
                placeholder="Marketing Design etc"
                name="tags"
                value={tags}
                onChange={tagsHandleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLanguage">
              <Form.Label className="fw-bold">Language</Form.Label>
              <Form.Control
                type="text"
                placeholder="Arabic"
                name="language"
                value={language}
                onChange={languageHandleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTime">
              <Form.Label className="fw-bold">Time</Form.Label>
              <Form.Control
                type="number"
                placeholder="23"
                name="time"
                value={time}
                onChange={timeHandleChange}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>upload your image</Form.Label>
              <Form.Control type="file" name="image" />
            </Form.Group>
            <Form.Control type="hidden" value={userId} name="user_id" />
            <Form.Control type="hidden" value="1" name="category_id" />
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
export default SingleCourse;
