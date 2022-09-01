import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function Other() {
  return (
    <Container className="mt-5">
      <ListGroup>
        <ListGroup.Item variant="warning">
          <i class="bi bi-link-45deg"></i>Other Links
        </ListGroup.Item>
        <ListGroup.Item>
          <Link
            to="/Admin/category"
            className="text-black fw-bold text-decoration-none"
          >
            <i class="bi bi-ui-radios-grid"></i> Category
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link
            to="/Admin/codes"
            className="text-black fw-bold text-decoration-none"
          >
            <i class="bi bi-upc"></i> Codes
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default Other;
