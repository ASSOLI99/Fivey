import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import "./Videos.css";
const Videos = () => {
  const userId = useSelector((state) => state.user.id);
  const navigate = useNavigate();
  const { id } = useParams();
  const [courseUserId, setCourseUserId] = useState("");
  const [videos, setVideos] = useState({
    data: ["Array", " Array"],
    current_page: "",
    per_page: "",
    total: "",
  });
  const [number, setNumber] = useState(1);
  const [courseImage, setCourseImage] = useState("");
  const numberChangeHandler = () => {
    setNumber(number + 1);
  };
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState(true);
  const [upload, setUpload] = useState(null);
  const [courseLength, setCourseLength] = useState(0);
  const pageNumber = (value) => {
    setPage(value);
  };
  useEffect(() => {
    const url = `http://localhost:8000/api/courses/user/${id}`;
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setCourseUserId(res.data[0].user_id);
        setCourseImage(res.data[0].image);
        setCourseLength(res.data[0].time);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const url = `http://localhost:8000/api/videos/course/${id}?page=${page}`;
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setVideos(res.data);
        setIsLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        setIsLoading(false);
        window.scrollTo(0, 0);
        console.log(error);
      });
  }, [number, page]);
  if (courseUserId != userId) {
    navigate("/");
  }
  const [backError, setBackError] = useState(false);
  const [videoData, setVideoData] = useState("");
  const handleChange = (file) => {
    setVideoData(file[0]);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const fData = new FormData();
    fData.append("video", videoData);
    fData.append("name", e.target[0].value);
    fData.append("description", e.target[1].value);
    fData.append("state", e.target[2].value);
    fData.append("course_id", e.target[3].value);

    axios
      .post(`http://127.0.0.1:8000/api/video/add/${id}`, fData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let percent = Math.floor((loaded * 100) / total);
          setUpload(`${percent}`);
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          setBackError(res.data.errors);
          setMessage(false);
          setUpload("wrong inputs ");
          setDisableBtn(false);
        } else {
          setBackError(false);
          setMessage("added successfully");
          e.target.reset();
          setNumber(number + 1);
          setDisableBtn(false);
          setUpload("uploaded successfully ");
        }
      });
  };
  const { data, current_page, per_page, total } = videos;
  // console.log(videos);
  const [disableBtn, setDisableBtn] = useState(false);
  const disableHandler = () => {
    setTimeout(() => {
      setDisableBtn(true);
    }, 0);
  };
  const enableHandler = () => {
    setTimeout(() => {
      setDisableBtn(false);
    }, 0);
  };
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col className="options col-12 col-md-9 col-lg-8 col-xl-6 ">
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="fw-bold">Video Name *</Form.Label>
                <Form.Control
                  onChange={enableHandler}
                  required
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label className="fw-bold">Description</Form.Label>
                <Form.Control
                  onChange={enableHandler}
                  as="textarea"
                  type="text"
                  placeholder="Description"
                  name="description"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicState">
                <Form.Label className="fw-bold">state *</Form.Label>
                <Form.Select
                  aria-label="state"
                  onChange={enableHandler}
                  name="state"
                >
                  <option disabled>Select state</option>
                  <option value={0}>visible</option>
                  <option selected value={1}>
                    only subscribers
                  </option>
                  <option value={2}>for all</option>
                </Form.Select>
              </Form.Group>
              <Form.Control type="hidden" name="course_id" value={id} />
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>
                  upload your video Must Be MP4 less than 1GB
                </Form.Label>
                <Form.Control
                  required
                  onChange={(e) => {
                    enableHandler();
                    handleChange(e.target.files);
                  }}
                  type="file"
                  name="video"
                />
              </Form.Group>
              {upload && (
                <ProgressBar
                  animated
                  variant="warning"
                  className="mb-2  fw-bold"
                  now={upload}
                  label={`${upload}%`}
                />
              )}
              <Button
                type="submit"
                disabled={disableBtn}
                onClick={disableHandler}
                variant="warning"
              >
                Submit
              </Button>
              <ul className="text-danger mt-2 p-0">
                {backError &&
                  backError.map((error, index) => {
                    // console.log("index :>> ", index);
                    return (
                      <li className="list-unstyled" key={index}>
                        - {error}
                      </li>
                    );
                  })}
              </ul>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className="single-course">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

        <div className="container">
          <div className="content">
            <div className="course-content">
              <div className="heading">
                <h3>Course Content</h3>
                <p>
                  {videos.data.length * videos.last_page}
                  <i className="fa-solid fa-circle"></i>
                  {courseLength}m
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
                    return (
                      <Link
                        to={`/course/${id}/${video.id}`}
                        className="videoLink"
                      >
                        <div className="lecture">
                          <img
                            src={`http://localhost:8000/img/course/${courseImage}`}
                            alt=""
                          />
                          <span className="video-number">
                            {(current_page - 1) * per_page + (index + 1)}
                          </span>

                          <div className="details">
                            <p className="time">
                              <i className="fa-solid fa-clock"></i>{" "}
                              {video.length >= 60
                                ? `${video.length / 60}min`
                                : `${video.length}sec`}
                            </p>
                            <h4>{video.name}</h4>
                            <p className="about">{video.description}</p>
                          </div>
                          <p className="play-btn">
                            <i className="fa-solid fa-circle-play"></i>
                          </p>
                        </div>
                      </Link>
                    );
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
      </div>
    </>
  );
};
export default Videos;
