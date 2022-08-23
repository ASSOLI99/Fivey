import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Welcoming.css";
import { useSelector } from "react-redux";
const Welcoming = () => {
  const userName = useSelector((state) => state.user.name);
  return (
    <>
      <Container
        fluid
        className="welcoming container-xl d-flex flex-column justify-content-center align-items-center py-5"
      >
        <h1>
          Welcome{" "}
          {userName ? (
            <span> {userName}</span>
          ) : (
            <>
              To <span>Fivey</span>
            </>
          )}
        </h1>
        <p>
          {userName ? (
            <>
              Here your Last <span>Courses</span> Have Fun
            </>
          ) : (
            <>
              The <span>best</span> online courses platform
            </>
          )}
        </p>
      </Container>
    </>
  );
};
export default Welcoming;
