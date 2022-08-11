import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardMenu from "../UI/card/CardMenu";
import CategoryHead from "../UI/categoryHead/CategoryHead";
const CategoryMenu = (props) => {
  return (
    <>
      <Container fluid className="container-xl">
        <CategoryHead catName={props.catName} />
        <Row>
          <Col className="col-12 col-sm-6 col-xl-3">
            <Link to="/course" className="text-decoration-none">
              <CardMenu
                cardImage={"aeb84584eaa6c41eed7337bd45f4ad22e01cdf99.jpg"}
              />
            </Link>
          </Col>
          <Col className="col-12 col-sm-6 col-xl-3">
            <Link to="/course" className="text-decoration-none">
              <CardMenu
                cardImage={"03271b22cb2560bde21866096247b76a0be8d7c4.jpg"}
              />
            </Link>
          </Col>
          <Col className="col-12 col-sm-6 col-xl-3">
            <Link to="/course" className="text-decoration-none">
              <CardMenu
                cardImage={"aeb84584eaa6c41eed7337bd45f4ad22e01cdf99.jpg"}
              />
            </Link>
          </Col>
          <Col className="col-12 col-sm-6 col-xl-3">
            <Link to="/course" className="text-decoration-none">
              <CardMenu
                cardImage={"65c7f3a7366df04a723717b0ce571b28bd77effb.jpg"}
              />
            </Link>
          </Col>
          <Col className="col-12 col-sm-6 col-xl-3">
            <Link to="/course" className="text-decoration-none">
              <CardMenu
                cardImage={"aeb84584eaa6c41eed7337bd45f4ad22e01cdf99.jpg"}
              />
            </Link>
          </Col>
          <Col className="col-12 col-sm-6 col-xl-3">
            <Link to="/course" className="text-decoration-none">
              <CardMenu
                cardImage={"aeb84584eaa6c41eed7337bd45f4ad22e01cdf99.jpg"}
              />
            </Link>
          </Col>
          <Col className="col-12 col-sm-6 col-xl-3">
            <Link to="/course" className="text-decoration-none">
              <CardMenu
                cardImage={"aeb84584eaa6c41eed7337bd45f4ad22e01cdf99.jpg"}
              />
            </Link>
          </Col>
          <Col className="col-12 col-sm-6 col-xl-3">
            <Link to="/course" className="text-decoration-none">
              <CardMenu
                cardImage={"7c9bce5858cda3b49856d1c1c27f27886dcdc7a3.jpg"}
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CategoryMenu;
