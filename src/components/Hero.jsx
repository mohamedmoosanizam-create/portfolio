import profile from "../assets/images/profile.jpeg";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">

        <h3>Hello, I'm</h3>

        <h1>Mohamed Moosa</h1>

        <h2>Final Year B.Tech IT Student</h2>

        <p>
          Passionate Full Stack Developer with knowledge of HTML, CSS,
          JavaScript, React, Java, Python and MySQL.
          I enjoy building responsive websites and solving real-world problems
          through technology.
        </p>

        <div className="hero-buttons">
          <a href="/MOHAMED_MOOSA_Resume.pdf" className="btn" download>
            Download Resume
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>

      </div>

      <div className="hero-image">
        <img
  src={profile}
  alt="Mohamed Moosa"
  className="profile-img"
/>
      </div>
    </section>
  );
}

export default Hero;