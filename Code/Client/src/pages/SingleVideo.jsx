import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Alert, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
// This imports the functional component from the previous sample.
import VideoJS from "../components/video/Video";
import "./CSS/SingleVideo.css";
const SingleVideo = () => {
  const userId = useSelector((state) => state.user.id);
  const [myVideo, setMyVideo] = useState("");
  const { course_id, video_id } = useParams();
  const [courseData, setCourseData] = useState("");
  const [userCourses, setUserCourses] = useState(false);
  const [videoJsOptions, setVideoJsOptions] = useState(false);
  const [owned, setOwned] = useState(false);
  const [owned1, setOwned1] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState({
    data: [],
    current_page: "",
    per_page: "",
    total: "",
  });
  const [page, setPage] = useState(1);
  const pageNumber = (value) => {
    setPage(value);
  };
  //course Videos start
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/fullCourse/${course_id}?page=${page}`)
      .then((res) => {
        console.log(res.data);
        setCourseData(res.data.data[0]);
        setVideos(res.data);
        window.scrollTo(0, 0);
        setIsLoading(false);
        if (res.data.data[0].instructor_id == userId) {
          setOwned(true);
        }
      });
  }, [page, userId]);

  useEffect(() => {
    if (userCourses) {
      for (let i = 0; i < userCourses.length; i++) {
        if (userCourses[i].course_id == course_id) {
          setOwned(true);
          break;
        }
      }
    }
  }, [userCourses]);
  useEffect(() => {
    if (userId && userId > 0) {
      axios
        .get(`http://127.0.0.1:8000/api/userCourses/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setUserCourses(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [userId]);
  const { data, current_page, per_page, total } = videos;
  //course Videos end
  // get video start

  useEffect(() => {
    if (video_id && video_id > 0) {
      console.log(video_id);
      axios
        .get(`http://127.0.0.1:8000/api/videos/${video_id}`)
        .then((res) => {
          setMyVideo(res.data);
          setVideoJsOptions({
            controls: true,
            autoplay: true,
            playbackRates: [0.75, 1, 1.25, 1.5, 1.75, 2],
            userActions: { doubleClick: true, hotkeys: true },
            sources: [
              {
                src: `http://127.0.0.1:8080/${res.data[0].video}`,
                type: "video/mp4",
              },
            ],
          });
          console.log(res.data);
          if (res.data[0].state == 2) {
            setOwned1(true);
          } else if (res.data[0].state == 0) {
            setOwned1(false);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [video_id]);
  // get video end
  const playerRef = React.useRef(null);

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <Container>
      {owned1 || owned ? (
        videoJsOptions && (
          <VideoJS
            className="theVideo"
            options={videoJsOptions}
            onReady={handlePlayerReady}
          />
        )
      ) : (
        <Alert variant="danger mt-3">
          you must buy this course first!{" "}
          <Link
            to={`/course/${course_id}`}
            className="d-inline-block text-black fw-bold"
          >
            From hear
          </Link>
        </Alert>
      )}
      <div className="single-video">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <div className="content">
          <div className="course-content">
            <div className="heading">
              <h3>Course Content</h3>
              <p>
                {videos.data.length * videos.last_page} lecture
                <i className="fa-solid fa-circle"></i> {courseData.course_time}
                mins
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
                  if (owned || video.video_state == 2) {
                    return (
                      <a
                        key={index}
                        href={`/course/${course_id}/${video.video_id}`}
                        className="videoLink"
                      >
                        <div
                          className={`lecture ${
                            video_id == video.video_id && "active-video"
                          }`}
                        >
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
                      </a>
                    );
                  } else {
                    return (
                      <div
                        key={index}
                        className={`lecture ${
                          video_id == video.video_id && "active-video"
                        }`}
                      >
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
                    );
                  }
                })
              )}
            </div>
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
    </Container>
  );
};
export default SingleVideo;
