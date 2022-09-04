import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Profile.css";
const UserProfile = () => {
  const [userData, setUserData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    console.log(id);
    axios
      .get(`http://127.0.0.1:8000/api/user/profile/${id}`)
      .then((res) => {
        console.log(res.data[0]);
        setUserData(res.data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [id]);
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
            {isLoading ? (
              <div
                className="spinner-border text-warning ms-5"
                role="status"
              ></div>
            ) : (
              <div className="details">
                {!userData.description && (
                  <div
                    className="left-side"
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <h1>{userData.name}</h1>
                    <small>{userData.userName}</small>
                    {userData.field && (
                      <>
                        <p className="role">{userData.field}</p>
                        <p className="student-number">
                          <span>2245</span> Students /static/
                        </p>
                        <p className="rating-number">
                          <span>4</span> courses /static/
                        </p>
                      </>
                    )}
                  </div>
                )}
                {userData.description && (
                  <div className="left-side">
                    <h1>{userData.name}</h1>
                    <small>{userData.userName}</small>
                    {userData.field && (
                      <>
                        <p className="role">{userData.field}</p>
                        <p className="student-number">
                          <span>2245</span> Students /static/
                        </p>
                        <p className="rating-number">
                          <span>4</span> courses /static/
                        </p>
                      </>
                    )}

                    <div className="about-me">
                      <h2>About Me</h2>
                      <p>{userData.description}</p>
                    </div>
                  </div>
                )}
                <div className="right-side">
                  {userData.image ? (
                    <img
                      src={`http://localhost:8000/img/user/${userData.image}`}
                      alt=""
                    />
                  ) : (
                    <img
                      src={`http://localhost:8000/img/user/logo.png`}
                      alt=""
                    />
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
            )}
          </div>
        </section>
        <section className="courses-view">
          <div className="container">
            <div className="heading">
              {userData.role == 2 && (
                <Link className="seeCourses" to={`courses`}>
                  My Courses
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default UserProfile;
