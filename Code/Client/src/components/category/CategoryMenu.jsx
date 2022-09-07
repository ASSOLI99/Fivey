import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardMenu from "../UI/card/CardMenu";
import CategoryHead from "../UI/categoryHead/CategoryHead";
const CategoryMenu = (props) => {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/courses/${props.theId}`)
      .then((res) => {
        setAllCourses(res.data);
        props.setIsLoading(false);
      });
  }, []);
  return (
    <>
      <Container fluid className="container-xl" key={props.uniqueKey}>
        <CategoryHead catName={props.catName} />
        {props.isLoading ? (
          <div className="spinner-border text-warning ms-5" role="status"></div>
        ) : (
          <Row className="d-flex justify-content-center">
            {allCourses.map((course, index) => {
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
                      students={course.students}
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
      </Container>
    </>
  );
};
export default CategoryMenu;
