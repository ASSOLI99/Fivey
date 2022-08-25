import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { Link, useParams } from "react-router-dom";
import "./SingleCourses.css";

const SingleCourses = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState(false);
  const [number, setNumber] = useState(1);
  // async function getCategoriesData(pageNumber = 1) {

  // }
  const [page, setPage] = useState(1);
  const [courses, setCourses] = useState({
    data: ["Array", " Array"],
    current_page: "",
    per_page: "",
    total: "",
  });
  useEffect(() => {
    setIsLoading(true);
    const url = `http://localhost:8000/api/user/admin/courses/${id}?page=${page}`;
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCourses(res.data);
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
  const { data, current_page, per_page, total } = courses;

  return (
    <div className="category">
      <Container fluid className="container-xl text-center">
        <h1>Courses</h1>
        <Row className="category-table p-3 d-flex justify-content-center overflow-scroll">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>image</th>
                <th>Course Name</th>
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
                        <td>{courses.id}</td>
                        <td>
                          <img
                            className="img-fluid"
                            src={`http://localhost:8000/img/course/${courses.image}`}
                            width="70px"
                          />
                        </td>
                        <td>{courses.name}</td>
                        <td>{courses.state == 0 ? "Hidden" : "Active"}</td>
                        <td>
                          <Link
                            to={`/Admin/courses/${courses.id}`}
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
export default SingleCourses;
