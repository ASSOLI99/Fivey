import { Card } from "react-bootstrap";
import "./CardMenu.css";
const CardMenu = (props) => {
  return (
    <Card className="w-full cardWithImage border-0">
      {props.hasCart && (
        <span className="loveElement">
          <i className="bi bi-cart-plus"></i>
        </span>
      )}
      {/* {!props.hasCart && (
        <span className="loveElement">
          <i className="bi bi-cart-plus"></i>
        </span>
      )} */}

      <div className="img-handler">
        <Card.Img variant="top" height={"300px"} src={`${props.cardImage}`} />
        {props.secondDescription && (
          <span className="img-description">{props.secondDescription}</span>
        )}
        {!props.secondDescription && (
          <span className="img-description">go there</span>
        )}
      </div>
      <Card.Body className="pb-0">
        <Card.Title className="text-dark fs-6">MERN Stack Developer</Card.Title>
        {props.hasRate && (
          <Card.Text className="mb-1 main-text">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-half"></i>
            <i className="bi bi-star"></i>
            <span className="text-secondary fs-6"> 12345</span>
          </Card.Text>
        )}

        <Card.Text className="mt-0 mb-0 text-secondary small-desc">
          {props.description}
        </Card.Text>
        {props.hasDetails && (
          <div className="d-flex justify-content-between align-items-end">
            <p className="text-secondary">
              <span className="students">12511</span> Student
            </p>
            <div className="main-text d-flex flex-column align-items-end">
              <small className="fw-normal mb-0 ">Hours</small>
              <p className="fs-2 fst-normal my-0">25</p>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
export default CardMenu;
