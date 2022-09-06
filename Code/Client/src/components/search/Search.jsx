import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { Link, useParams } from "react-router-dom";
import CardMenu from "../UI/card/CardMenu";

const Search = (props) => {
  const { search } = useParams();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState({
    data: [],
    current_page: "",
    per_page: "",
    total: "",
  });
  useEffect(() => {
    setIsLoading(true);
    const url = `http://localhost:8000/api/courses/search/${search}?page=${page}`;
    axios
      .get(url)
      .then((res) => {
        setCourses(res.data);
        setIsLoading(false);
        // console.log(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
        // console.log(error);
      });
  }, [page, search]);
  const pageNumber = (value) => {
    setPage(value);
  };

  const { data, current_page, per_page, total } = courses;

  return (
    <div className="category">
      <Container fluid className="container-xl" key={props.uniqueKey}>
        <h1 className="fs-2">
          Results from <span className="text-warning">{search}</span>
        </h1>
        {isLoading ? (
          <div className="spinner-border text-warning ms-5" role="status"></div>
        ) : (
          <Row className="d-flex justify-content-center">
            {data.map((course, index) => {
              return (
                <Col key={index} className="col-12 col-sm-6 col-md-4  col-xl-3">
                  <Link
                    to={`/course/${course.id}`}
                    className="text-decoration-none"
                  >
                    <CardMenu
                      hasRate={4}
                      description={course.description}
                      title={course.name}
                      hasDetails={true}
                      hasCart={true}
                      time={course.time}
                      secondDescription={course.second_description}
                      cardImage={`http://localhost:8000/img/course/${course.image}`}
                    />
                  </Link>
                </Col>
              );
            })}
          </Row>
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
      </Container>
    </div>
  );
};
export default Search;
