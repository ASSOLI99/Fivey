import "./CSS/SingleCourse.css";
import courseImage from "./images/video-image.jpg";
import InstructorImage from "./images/myPic.jpeg";
const SingleCourse = () => {
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
              <img className="main-image" src={`${courseImage}`} alt="" />
              <div className="rated">
                <p className="rating">
                  <span>(1023)</span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                </p>
                <p className="difficulty">Intermediate</p>
              </div>
              <div className="pricing">
                <button className="buy-btn">Buy course</button>
                <button className="add-btn">Add to cart</button>
              </div>
              <div className="description">
                <h2>The word and programing</h2>
                <p className="detail">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Expedita reprehenderit odit perferendis quisquam obcaecati
                  consequuntur magni soluta esse quod amet iure cupiditate
                  corrupti dicta natus, laborum odio optio earum eos laudantium
                  explicabo? Deleniti nesciunt reiciendis incidunt aspernatur
                  vitae quos praesentium!
                </p>
                <div className="instructor">
                  <img src={`${InstructorImage}`} alt="" />
                  <div>
                    <h4>Abdullah Assoli</h4>
                    <p>Full-Stack Developer</p>
                  </div>
                </div>
              </div>
              <div className="course-content">
                <div className="heading">
                  <h3>Course Content</h3>
                  <p>
                    12 lecture <i className="fa-solid fa-circle"></i> 4 hours
                  </p>
                </div>
                <div className="lectures">
                  <div className="lecture">
                    <img src={`${courseImage}`} alt="" />
                    <div className="details">
                      <p className="time">
                        <i className="fa-solid fa-clock"></i> 03:12 mins
                      </p>
                      <h4>Intro</h4>
                      <p className="about">
                        Meet your instructor and learn about your course
                      </p>
                    </div>
                    <p className="play-btn">
                      <i className="fa-solid fa-circle-play"></i>
                    </p>
                  </div>
                  <div className="lecture">
                    <img src={`${courseImage}`} alt="" />
                    <div className="details">
                      <p className="time">
                        <i className="fa-solid fa-clock"></i> 03:12 mins
                      </p>
                      <h4>The Programing</h4>
                      <p className="about">
                        Meet your instructor and learn about your course
                      </p>
                    </div>
                    <p className="play-btn">
                      <i className="fa-solid fa-circle-play"></i>
                    </p>
                  </div>
                  <div className="lecture">
                    <img src={`${courseImage}`} alt="" />
                    <div className="details">
                      <p className="time">
                        <i className="fa-solid fa-clock"></i> 03:12 mins
                      </p>
                      <h4>The Word</h4>
                      <p className="about">
                        Meet your instructor and learn about your course
                      </p>
                    </div>
                    <p className="play-btn">
                      <i className="fa-solid fa-circle-play"></i>
                    </p>
                  </div>
                  <div className="lecture">
                    <img src={`${courseImage}`} alt="" />
                    <div className="details">
                      <p className="time">
                        <i className="fa-solid fa-clock"></i> 03:12 mins
                      </p>
                      <h4>Intro</h4>
                      <p className="about">
                        Meet your instructor and learn about your course
                      </p>
                    </div>
                    <p className="play-btn">
                      <i className="fa-solid fa-circle-play"></i>
                    </p>
                  </div>
                  <div className="lecture">
                    <img src={`${courseImage}`} alt="" />
                    <div className="details">
                      <p className="time">
                        <i className="fa-solid fa-clock"></i> 03:12 mins
                      </p>
                      <h4>The Programing</h4>
                      <p className="about">
                        Meet your instructor and learn about your course
                      </p>
                    </div>
                    <p className="play-btn">
                      <i className="fa-solid fa-circle-play"></i>
                    </p>
                  </div>
                  <div className="lecture">
                    <img src={`${courseImage}`} alt="" />
                    <div className="details">
                      <p className="time">
                        <i className="fa-solid fa-clock"></i> 03:12 mins
                      </p>
                      <h4>The Word</h4>
                      <p className="about">
                        Meet your instructor and learn about your course
                      </p>
                    </div>
                    <p className="play-btn">
                      <i className="fa-solid fa-circle-play"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default SingleCourse;
