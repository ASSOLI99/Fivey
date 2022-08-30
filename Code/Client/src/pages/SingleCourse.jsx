import "./CSS/SingleCourse.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from "react-js-pagination";
const SingleCourse = () => {
  const userId = useSelector((state) => state.user.id);
  const { id } = useParams();
  const [courseData, setCourseData] = useState("");
  const [userCourses, setUserCourses] = useState(false);
  const [owned, setOwned] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState({
    data: [],
    current_page: "",
    per_page: "",
    total: "",
  });
  const [page, setPage] = useState(1);
  const [counter, setCounter] = useState(1);
  const pageNumber = (value) => {
    setPage(value);
  };
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/fullCourse/${id}?page=${page}`)
      .then((res) => {
        console.log(res.data);
        setCourseData(res.data.data[0]);
        setVideos(res.data);
        setIsLoading(false);
        window.scrollTo(0, 0);
        // console.log(res.data.data[0]);
      });
  }, [page]);
  const ownedHandler = () => {
    if (userCourses) {
      for (let i = 0; i < userCourses.length; i++) {
        if (userCourses[i].course_id == id) {
          setOwned(true);
          break;
        }
      }
    }
  };
  const handleUser = () => {
    if (counter < 3) {
      axios
        .get(`http://127.0.0.1:8000/api/userCourses/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setUserCourses(res.data);
          setCounter(counter + 1);
          ownedHandler();
        })
        .catch((error) => console.log(error));
    }
  };

  const { data, current_page, per_page, total } = videos;
  return (
    <div className="single-course">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <main>
        <section className="course-details">
          <div className="container">
            <div className="content">
              <img
                className="main-image"
                src={`http://localhost:8000/img/course/${courseData.course_image}`}
                alt=""
              />
              <div className="rated">
                <p className="rating">
                  <span>(1023){handleUser()}</span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                </p>
                <p className="difficulty">{courseData.course_language}</p>
              </div>
              <div className="pricing">
                {!owned ? (
                  <>
                    <button className="buy-btn">Buy course</button>
                    <button className="add-btn">Add to cart</button>
                  </>
                ) : (
                  <button className="add-btn">
                    <i className="bi bi-bookmark-star"></i> Rate Course
                  </button>
                )}
              </div>
              <div className="description">
                <h2>{courseData.course_name}</h2>
                <p className="detail">{courseData.course_description}</p>
                <div className="instructor">
                  <Link
                    className="text-black text-decoration-none"
                    to={`/profile/${courseData.instructor_id}`}
                  >
                    <img
                      src={`http://localhost:8000/img/user/${courseData.instructor_image}`}
                      alt=""
                    />
                  </Link>
                  <div>
                    <h4>
                      <Link
                        className="text-black text-decoration-none"
                        to={`/profile/${courseData.instructor_id}`}
                      >
                        {courseData.instructor_name}
                      </Link>
                    </h4>
                    <p>{courseData.instructor_field}</p>
                  </div>
                </div>
              </div>
              <div className="course-content">
                <div className="heading">
                  <h3>Course Content</h3>
                  <p>
                    {videos.data.length * videos.last_page} lecture
                    <i className="fa-solid fa-circle"></i>{" "}
                    {courseData.course_time}mins
                  </p>
                </div>
                <div className="lectures">
                  {isLoading ? (
                    <div
                      className="spinner-border text-warning ms-5"
                      role="status"
                    ></div>
                  ) : (
                    data.map((video, index) => {
                      if (video.video_state == 0) {
                        return;
                      }
                      return (
                        <Link
                          to={`/course/${id}/${video.video_id}`}
                          className="videoLink"
                        >
                          <div className="lecture">
                            <img
                              src={`http://localhost:8000/img/course/${courseData.course_image}`}
                              alt=""
                            />
                            <span className="video-number">
                              {(current_page - 1) * per_page + (index + 1)}
                            </span>

                            <div className="details">
                              <p className="time">
                                <i className="fa-solid fa-clock"></i>{" "}
                                {video.length >= 60
                                  ? `${video.video_length / 60}min`
                                  : `${video.video_length}sec`}
                              </p>
                              <h4>{video.video_name}</h4>
                              <p className="about">{video.video_description}</p>
                            </div>
                            {video.video_state == 2 && (
                              <p className="play-btn">
                                <i className="fa-solid fa-circle-play"></i>
                              </p>
                            )}
                            {video.video_state == 1 && (
                              <>
                                {!owned ? (
                                  <p className="play-btn">
                                    <i className="fa-solid fa-lock"></i>
                                  </p>
                                ) : (
                                  <p className="play-btn">
                                    <i className="fa-solid fa-circle-play"></i>
                                  </p>
                                )}
                              </>
                            )}
                          </div>
                        </Link>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={Number(current_page)}
                totalItemsCount={Number(total)}
                itemsCountPerPage={Number(per_page)}
                onChange={(pageNum) => {
                  pageNumber(pageNum);
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default SingleCourse;
