import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardMenu from "../UI/card/CardMenu";
import "./HeaderMenu.css";
const HeaderMenu = (props) => {
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
                  <p>
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
              <Col className="col-12 col-sm-6 col-md-6">
                <Link to="/card" className="text-decoration-none">
                  <CardMenu
                    cardImage={"5d1bda1df52b87ffd1e830018694f197eb10b027.jpg"}
                  />
                </Link>
              </Col>
              <Col className="col-12 col-sm-6 col-md-6">
                <Link to="/card" className="text-decoration-none">
                  <CardMenu
                    cardImage={"aeb84584eaa6c41eed7337bd45f4ad22e01cdf99.jpg"}
                  />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HeaderMenu;
