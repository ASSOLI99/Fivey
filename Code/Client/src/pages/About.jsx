import "./CSS/About.css";
import myImage from "./images/myPic.jpeg";
const About = () => {
  return (
    <div className="about-page">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <main>
        <section className="hero">
          <div className="container">
            <div className="heading">
              <h1>
                Know about best online <br /> learning platform
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, voluptatum! Laboriosam sed autem odio at fugit,
                commodi velit, veniam, aperiam quod tempore enim.
              </p>
            </div>
            <div className="content">
              <div className="top">
                <div className="left-side"></div>
                <div className="right-side">
                  <div className="block">
                    <h2>
                      <i className="fa-solid fa-video" /> Professional Tutor
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe eaque ipsum labore cumque officia, illo maxime.
                      Corrupti cupiditate velit sunt recusandae.
                    </p>
                  </div>
                  <div className="block">
                    <h2>
                      <i className="fa-solid fa-globe" /> Online Community
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe eaque ipsum labore cumque officia, illo maxime.
                      Corrupti cupiditate velit sunt recusandae.
                    </p>
                  </div>
                  <div className="block">
                    <h2>
                      <i className="fa-solid fa-scroll" /> Course Guidelines
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe eaque ipsum labore cumque officia, illo maxime.
                      Corrupti cupiditate velit sunt recusandae.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <a href="#">Explore courses</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </section>
        <section className="objective">
          <div className="container">
            <div className="content">
              <h2>Objectives</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
                dolor. Aliquam error, repellat dolorum molestiae consectetur
                repudiandae laudantium id sunt mollitia saepe libero sapiente
                voluptas at, accusantium iste ab officia?
              </p>
              <div className="state">
                <i className="fa-solid fa-star" /> <b>accepted</b> from more
                than <b>1200 students</b>
              </div>
            </div>
          </div>
        </section>
        <section className="our-team">
          <div className="container">
            <div className="content">
              <h2>Meet Our Team</h2>
              <p>
                Lorem ipsum dolor sit amet, Accusantium, illum voluptatibus
                reiciendis sapiente, perspiciatis facilis doloribus quibusdam
                adipisci error, accusamus consequuntur quidem vel enim quasi ea
                aperiam!
              </p>
              <div className="cards">
                <div className="card">
                  <img src={myImage} alt="" />
                  <div className="top">
                    <h3>Abdullah Assoli</h3>
                    <p>Developer</p>
                  </div>
                  <hr />
                  <div className="bottom">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odio, earum ducimus recusandae saepe porro doloribus autem
                      vel doloremque eius culpa.
                    </p>
                    <a href="#">View Profile</a>
                  </div>
                </div>
                <div className="card">
                  <img src={myImage} alt="" />
                  <div className="top">
                    <h3>Abdullah Assoli</h3>
                    <p>Designer</p>
                  </div>
                  <hr />
                  <div className="bottom">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odio, earum ducimus recusandae saepe porro doloribus autem
                      vel doloremque eius culpa.
                    </p>
                    <a href="#">View Profile</a>
                  </div>
                </div>
                <div className="card">
                  <img src={myImage} alt="" />
                  <div className="top">
                    <h3>Abdullah Assoli</h3>
                    <p>Founder</p>
                  </div>
                  <hr />
                  <div className="bottom">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odio, earum ducimus recusandae saepe porro doloribus autem
                      vel doloremque eius culpa.
                    </p>
                    <a href="#">View Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="start-learn">
          <div className="container">
            <div className="content">
              <div className="left-side">
                <h3>Start Learning today!</h3>
                <p>
                  the learn is the shortest way to achieve success in your life
                  and your carer
                </p>
              </div>
              <div className="right-side">
                <a href="#">Go to courses</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default About;
