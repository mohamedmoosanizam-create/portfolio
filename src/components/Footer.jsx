function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container">

        <h2>Mohamed Moosa</h2>

        <p>
          Final Year B.Tech Information Technology Student
        </p>

        <div className="footer-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#education">Education</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>

        <p className="copyright">
          © {year} Mohamed Moosa. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;