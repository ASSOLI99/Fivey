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
import CardMenu from "../UI/card/CardMenu";
import "./MyCourses.css";

const MyCourses = (props) => {
  const userId = useSelector((state) => state.user.id);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [page, setPage] = useState(1);
  const [courses, setCourses] = useState({
    data: ["Array", " Array"],
    current_page: "",
    per_page: "",
    total: "",
  });
  useEffect(() => {
    setIsLoading(true);
    const url = `http://localhost:8000/api/courses/${userId}?page=${page}`;
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
  }, [page]);
  const pageNumber = (value) => {
    setPage(value);
  };

  const { data, current_page, per_page, total } = courses;

  return (
    <div className="category">
      <Container fluid className="container-xl" key={props.uniqueKey}>
        <h1>My Courses</h1>
        {/* {props.isLoading && (
          <div className="spinner-border text-warning ms-5" role="status"></div>
        )} */}
        <Row className="d-flex justify-content-center">
          {data.map((course, index) => {
            return (
              <Col key={index} className="col-12 col-sm-6 col-md-4  col-xl-3">
                <Link to={`${course.id}`} className="text-decoration-none">
                  <CardMenu
                    hasRate={4}
                    description={course.description}
                    title={course.name}
                    hasDetails={true}
                    hasCart={true}
                    time={course.time}
                    secondDescription={course.second_description}
                    cardImage={`http://localhost:8000/img/course/${course.image}`}
                    // cardImage={"aeb84584eaa6c41eed7337bd45f4ad22e01cdf99.jpg"}
                  />
                </Link>
              </Col>
            );
          })}
        </Row>
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
      </Container>
    </div>
  );
};
export default MyCourses;
