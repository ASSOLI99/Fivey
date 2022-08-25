import axios from "axios";
import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
// import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
// import CardMenu from "../../../components/UI/card/CardMenu";
import myPic from "./myPic.jpeg";
import coursePic from "./mobile-app.jpg";
import "./SingleUser.css";
const SingleUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [number, setNumber] = useState(1);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/user/admin/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserData(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [number]);
  const deleteHandler = () => {
    let okay = "Are You Sure!\nEither OK or Cancel.";
    if (confirm(okay) == true) {
      axios
        .delete(`http://127.0.0.1:8000/api/user/delete/${userData.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
          navigate("../");
        });
    } else {
      return;
    }
  };
  const [message, setMessage] = useState(false);

  // const [imageData, setImageData] = useState("");
  // const handleChange = (file) => {
  //   setImageData(file[0]);
  //   console.log(imageData);
  // };

  return (
    <div className="singleCatContainer">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="user-profile">
        <section className="profile">
          <div className="container">
            <div className="details">
              <div className="left-side">
                <h1>{userData.name}</h1>
                <p className="role">{userData.field}</p>
                <p className="student-number">
                  <span>2245</span> Students /static/
                </p>
                <p className="rating-number">
                  <span>4</span> courses /static/
                </p>
                <div className="about-me">
                  <h2>About Me</h2>
                  <p>{userData.description}</p>
                </div>
              </div>
              <div className="right-side">
                {userData.image ? (
                  <img
                    src={`http://localhost:8000/img/user/${userData.image}`}
                    alt=""
                  />
                ) : (
                  <img src={myPic} alt="" />
                )}

                <a className="send-message" href={`mailto:${userData.email}`}>
                  <i className="fa-solid fa-envelope"></i> Send Message
                </a>
                <div className="links">
                  {userData.youtube && (
                    <a href={`${userData.youtube}`} className="link">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  )}

                  {userData.facebook && (
                    <a href={`${userData.facebook}`} className="link">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  )}

                  {userData.phone && (
                    <a href={`tel:${userData.phone}`} className="link">
                      <i className="fa-solid fa-phone"></i>
                    </a>
                  )}
                  {userData.linkedin && (
                    <a href={`${userData.linkedin}`} className="link">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="courses-view">
          <div className="container">
            <div className="heading">
              <Link className="seeCourses" to={`${userData.id}`}>
                My Courses
              </Link>
            </div>
            <p onClick={deleteHandler} className={"btn btn-danger"}>
              Delete
            </p>
          </div>
        </section>
      </div>
      {message && <Alert variant="success my-4">{message}</Alert>}

      <br />
    </div>
  );
};
export default SingleUser;
