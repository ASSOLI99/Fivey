import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";
const EditProfile = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.id);
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("");
  const [field, setField] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [youtube, setYoutube] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data[0]);
        setDescription(res.data[0].description);
        setName(res.data[0].name);
        setRole(res.data[0].role);
        setField(res.data[0].field);
        setPhone(res.data[0].phone);
        setFacebook(res.data[0].facebook);
        setLinkedin(res.data[0].linkedin);
        setYoutube(res.data[0].youtube);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [number]);
  const deleteHandler = () => {
    let okay = "Are You Sure!\nEither OK or Cancel.";
    if (confirm(okay) == true) {
      axios
        .delete(`http://127.0.0.1:8000/api/user/delete/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          localStorage.removeItem("token");
          console.log(res);
          navigate("/login");
          location.reload();
        });
    } else {
      return;
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
    fData.append("_method", "PUT");
    fData.append("name", e.target[0].value);
    fData.append("field", e.target[1].value);
    fData.append("role", e.target[2].value);
    fData.append("description", e.target[3].value);
    fData.append("phone", e.target[4].value);
    fData.append("youtube", e.target[5].value);
    fData.append("linkedin", e.target[6].value);
    fData.append("facebook", e.target[7].value);
    if (e.target[8].files[0]) {
      fData.append("image", e.target[8].files[0]);
    }

    // for (var data of fData.entries()) {
    //   console.log(data[0] + ", " + data[1]);
    // }

    const token = localStorage.getItem("token");
    axios
      .post(`http://127.0.0.1:8000/api/user/edit/${userId}`, fData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setBackError(false);
        navigate("../");
        location.reload();
        setNumber(number + 1);
      })
      .catch((error) => {
        console.log(JSON.parse(error.request.response));
      });
  };

  const descriptionHandleChange = (e) => {
    setDescription(e.target.value);
  };

  const nameHandleChange = (e) => {
    setName(e.target.value);
  };
  const fieldHandleChange = (e) => {
    setField(e.target.value);
  };
  const roleHandleChange = (e) => {
    setRole(e.target.value);
  };
  const phoneHandleChange = (e) => {
    setPhone(e.target.value);
  };
  const youtubeHandleChange = (e) => {
    setYoutube(e.target.value);
  };
  const linkedinHandleChange = (e) => {
    setLinkedin(e.target.value);
  };
  const facebookHandleChange = (e) => {
    setFacebook(e.target.value);
  };

  return (
    <div className="singleCatContainer mt-5">
      <Container>
        <div className="options">
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="fw-bold">Name *</Form.Label>
              <Form.Control
                value={name}
                onChange={nameHandleChange}
                type="text"
                placeholder="Name"
                name="name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicField">
              <Form.Label className="fw-bold">Field</Form.Label>
              <Form.Control
                value={field}
                onChange={fieldHandleChange}
                type="text"
                placeholder="Designer"
                name="field"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRole">
              <Form.Label className="fw-bold">Role *</Form.Label>
              <Form.Select
                onChange={roleHandleChange}
                aria-label="role"
                name="role"
                value={role}
              >
                <option disabled>Select Role</option>
                <option value="1">Student</option>
                <option value="2">instructor</option>
              </Form.Select>
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
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label className="fw-bold">Phone</Form.Label>
              <Form.Control
                value={phone}
                onChange={phoneHandleChange}
                type="text"
                placeholder="+962772341232"
                name="phone"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicYoutube">
              <Form.Label className="fw-bold">Youtube Link</Form.Label>
              <Form.Control
                value={youtube}
                onChange={youtubeHandleChange}
                type="text"
                placeholder="Youtube Link"
                name="youtube"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLinkedin">
              <Form.Label className="fw-bold">Linkedin Link</Form.Label>
              <Form.Control
                value={linkedin}
                onChange={linkedinHandleChange}
                type="text"
                placeholder="Linkedin Link"
                name="linkedin"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFacebook">
              <Form.Label className="fw-bold">Facebook Link</Form.Label>
              <Form.Control
                value={facebook}
                onChange={facebookHandleChange}
                type="text"
                placeholder="Facebook Link"
                name="facebook"
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>upload your image</Form.Label>
              <Form.Control type="file" name="image" />
            </Form.Group>
            <Button variant="warning" type="submit">
              Update
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
        <p
          onClick={deleteHandler}
          className={"text-danger link-danger cursor-pointer mt-5"}
        >
          <i className="bi bi-trash"></i> Delete account
        </p>
      </Container>
    </div>
  );
};
export default EditProfile;
