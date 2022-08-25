import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Profile.css";
const Profile = () => {
  const {
    id,
    name,
    email,
    image,
    role,
    facebook,
    phone,
    linkedin,
    youtube,
    field,
    description,
    userName,
  } = useSelector((state) => state.user);

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
              {!description && (
                <div
                  className="left-side"
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <h1>{name}</h1>
                  <small>{userName}</small>
                  {field && (
                    <>
                      <p className="role">{field}</p>
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
              {description && (
                <div className="left-side">
                  <h1>{name}</h1>
                  <small>{userName}</small>
                  {field && (
                    <>
                      <p className="role">{field}</p>
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
                    <p>{description}</p>
                  </div>
                </div>
              )}
              <div className="right-side">
                {image ? (
                  <img src={`http://localhost:8000/img/user/${image}`} alt="" />
                ) : (
                  <img src={`http://localhost:8000/img/user/logo.png`} alt="" />
                )}

                <a className="send-message" href={`mailto:${email}`}>
                  <i className="fa-solid fa-envelope"></i> Send Message
                </a>
                <Link to={"edit"} class="edit">
                  <i class="fa-solid fa-pen"></i> Edit
                </Link>
                <div className="links">
                  {youtube && (
                    <a href={`${youtube}`} className="link">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  )}

                  {facebook && (
                    <a href={`${facebook}`} className="link">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  )}

                  {phone && (
                    <a href={`tel:${phone}`} className="link">
                      <i className="fa-solid fa-phone"></i>
                    </a>
                  )}
                  {linkedin && (
                    <a href={`${linkedin}`} className="link">
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
              {role == 2 && (
                <Link className="seeCourses" to={`${id}`}>
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
export default Profile;
