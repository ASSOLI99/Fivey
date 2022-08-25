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
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Users.css";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState(false);
  const [number, setNumber] = useState(1);
  // async function getCategoriesData(pageNumber = 1) {

  // }
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState({
    data: ["Array", " Array"],
    current_page: "",
    per_page: "",
    total: "",
  });
  useEffect(() => {
    setIsLoading(true);
    const url = `http://localhost:8000/api/users?page=${page}`;
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
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
    fData.append("userName", e.target[1].value);
    fData.append("email", e.target[2].value);
    fData.append("role", e.target[3].value);
    fData.append("password", e.target[4].value);
    const token = localStorage.getItem("token");
    axios
      .post("http://127.0.0.1:8000/api/users/add", fData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setBackError(false);
        setMessage("added successfully");
        e.target.reset();
        setNumber(number + 1);
      })
      .catch((error) => {
        setBackError(Object.values(JSON.parse(error.request.response).errors));
      });
  };
  const { data, current_page, per_page, total } = users;

  return (
    <div className="category">
      <Container fluid className="container-xl text-center">
        <h1>Users</h1>
        <Row className="d-flex justify-content-center text-start">
          <Col className="options col-12 col-md-9 col-lg-8 col-xl-6 ">
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="fw-bold">Name *</Form.Label>
                <Form.Control type="text" placeholder="Name" name="name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label className="fw-bold">User Name *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="User Name"
                  name="userName"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email *</Form.Label>
                <Form.Control type="email" placeholder="email" name="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicRole">
                <Form.Label className="fw-bold">Role *</Form.Label>
                <Form.Select aria-label="role" name="role">
                  <option disabled>Select Role</option>
                  <option value="0">Admin</option>
                  <option value="1" defaultChecked>
                    User
                  </option>
                  <option value="2">instructor</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">password *</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  name="password"
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
                <th>name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="overflow-hidden">
              {!isLoading && (
                <>
                  {data.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.id}</td>
                        <td>
                          <img
                            className="img-fluid"
                            src={`http://localhost:8000/img/user/${user.image}`}
                            width="70px"
                          />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          {user.role == 0 && "Admin"}
                          {user.role == 1 && "User"}
                          {user.role == 2 && "Instructor"}
                        </td>
                        <td>
                          {/* {user.rol == 1 && "aklsjdklsajdlkasjdlkAdmin"} */}
                          {/* <Link to={`${user.id}`} className="btn btn-warning">
                            Edit
                          </Link> */}
                          {user.role == 0 ? (
                            <span className="text-warning">Admin</span>
                          ) : (
                            <Link to={`${user.id}`} className="btn btn-warning">
                              Show
                            </Link>
                          )}
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
export default Users;
