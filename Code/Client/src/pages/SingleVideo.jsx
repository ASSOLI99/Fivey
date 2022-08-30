import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
      });
  }, [page]);

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
      axios
        .get(`http://127.0.0.1:8000/api/videos/${video_id}`)
        .then((res) => {
          setMyVideo(res.data);
          setVideoJsOptions({
            autoplay: true,
            controls: true,
            sources: [
              {
                src: `http://localhost:8000/video/course/${res.data[0].video}`,
                type: "video/mp4",
              },
            ],
          });
          if (res.data[0].state == 2) {
            setOwned(true);
          } else if (res.data[0].state == 0) {
            setOwned(false);
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
      {videoJsOptions && (
        <VideoJS
          className="theVideo"
          options={videoJsOptions}
          onReady={handlePlayerReady}
        />
      )}
    </Container>
  );
};
export default SingleVideo;
