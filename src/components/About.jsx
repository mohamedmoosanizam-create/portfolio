import profile from "../assets/images/profile.jpeg";
function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-image">
         <img
  src={profile}
  alt="Mohamed Moosa"
  className="about-img"
/>
        </div>

        <div className="about-content">

          <h4>About Me</h4>

          <h2>Who Am I?</h2>

          <p>
            I am <strong>Mohamed Moosa</strong>, a Final Year
            B.Tech Information Technology student at
            Hindusthan College of Engineering and Technology.
          </p>

          <p>
            I am passionate about Full Stack Development,
            Web Development, and AI-powered applications.
            I enjoy creating responsive websites and solving
            real-world problems through technology.
          </p>

          <div className="about-info">

            <div className="info-card">
              <h3>College</h3>
              <p>Hindusthan College of Engineering and Technology</p>
            </div>

            <div className="info-card">
              <h3>Degree</h3>
              <p>B.Tech Information Technology</p>
            </div>

            <div className="info-card">
              <h3>CGPA</h3>
              <p>7.42</p>
            </div>

            <div className="info-card">
              <h3>Location</h3>
              <p>Coimbatore, Tamil Nadu</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;