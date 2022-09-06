import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import CardMenu from "../UI/card/CardMenu";
import CategoryHead from "../UI/categoryHead/CategoryHead";
import Pagination from "react-js-pagination";
const OneCat = () => {
  const [allCourses, setAllCourses] = useState({
    data: [""],
    current_page: "",
    per_page: "",
    total: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState("");
  const { name } = useParams();
  const [page, setPage] = useState(1);
  const pageNumber = (value) => {
    setPage(value);
  };
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/categories/name/${name}`)
      .then((res) => {
        console.log(res.data[0].id);
        setId(res.data[0].id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/courses/category/${id}?page=${page}`)
      .then((res) => {
        setAllCourses(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [page, id]);
  const { data, current_page, per_page, total } = allCourses;
  return (
    <>
      <Container fluid className="container-xl">
        <CategoryHead catName={name} />
        {isLoading ? (
          <div className="spinner-border text-warning ms-5" role="status"></div>
        ) : (
          <Row className="d-flex justify-content-center">
            {data &&
              data.map((course, index) => {
                return (
                  <Col
                    key={index}
                    className="col-12 col-sm-6 col-md-4  col-xl-3"
                  >
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
    </>
  );
};
export default OneCat;
