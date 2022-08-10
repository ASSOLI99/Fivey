import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Welcoming.css";
const Welcoming = () => {
  return (
    <>
      <Container
        fluid
        className="welcoming container-xl d-flex flex-column justify-content-center align-items-center py-5"
      >
        <h1>
          Welcome To <span>Fivey</span>
        </h1>
        <p>
          The <span>best</span> online courses platform
        </p>
      </Container>
    </>
  );
};
export default Welcoming;
