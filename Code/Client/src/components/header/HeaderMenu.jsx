import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardMenu from "../UI/card/CardMenu";
import "./HeaderMenu.css";
const HeaderMenu = (props) => {
  const id = useSelector((state) => state.user.id);
  const [allCourses, setAllCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    axios
      .get(`http://127.0.0.1:8000/api/homeCourses/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setAllCourses(res.data);
      });
    setIsLoading(false);
  }, [id]);
  return (
    <>
      <Container fluid className="container-xl">
        <Row>
          <Col className="col-3 d-none d-xl-block">
            <div className="side-bar bg-white p-2">
              <h2>See More</h2>
              <hr />
              {props.allCategory.map((category) => {
                return (
                  <p key={category.name}>
                    <Link
                      className="justify-content-between d-flex text-black text-decoration-none"
                      to={`categories/${category.name}`}
                    >
                      <span>{category.name}</span>
                    </Link>
                  </p>
                );
              })}
            </div>
          </Col>
          <Col className="col-xl-9 col-12">
            <Row>
              {allCourses.length > 0 ? (
                isLoading ? (
                  <div
                    className="spinner-border text-warning ms-5"
                    role="status"
                  ></div>
                ) : (
                  allCourses.map((course, index) => {
                    return (
                      <Col key={index} className="col-12 col-sm-6 col-md-4">
                        <Link
                          to={`/course/${course.id}`}
                          className="text-decoration-none"
                        >
                          <CardMenu
                            hasRate={4.5}
                            description={false}
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
                  })
                )
              ) : (
                <Col className="col-12 d-flex justify-content-center align-items-center">
                  <h2 className="mt-5 text-center">
                    You have no courses{" "}
                    <Link
                      className="link-warning d-inline-block"
                      to={"/categories"}
                    >
                      Brows Something
                    </Link>
                  </h2>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HeaderMenu;
