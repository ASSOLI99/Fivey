import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardMenu from "../UI/card/CardMenu";
import CategoryHead from "../UI/categoryHead/CategoryHead";
import "./CategorySlice.css";
const CategoryMenu = (props) => {
  return (
    <>
      <Container fluid className="container-xl">
        <CategoryHead catName={props.catName} />
        <Row>
          <Col className="col-12 col-sm-6 col-xl-3">
            <Link to="/card" className="text-decoration-none slice">
              <CardMenu
                cardImage={"aeb84584eaa6c41eed7337bd45f4ad22e01cdf99.jpg"}
              />
            </Link>
          </Col>
          <Col className="col-12 col-sm-6 col-xl-3">
            <Link to="/card" className="text-decoration-none slice">
              <CardMenu
                cardImage={"7c9bce5858cda3b49856d1c1c27f27886dcdc7a3.jpg"}
              />
            </Link>
          </Col>
          <Col className="col-12 col-sm-6 col-xl-3">
            <Link to="/card" className="text-decoration-none slice">
              <CardMenu
                cardImage={"aeb84584eaa6c41eed7337bd45f4ad22e01cdf99.jpg"}
              />
            </Link>
          </Col>
          <Col className="col-12 col-sm-6 col-xl-3">
            <Link to="/card" className="text-decoration-none slice">
              <CardMenu
                cardImage={"aeb84584eaa6c41eed7337bd45f4ad22e01cdf99.jpg"}
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CategoryMenu;
