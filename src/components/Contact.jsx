function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="container">

        <h4>Contact Me</h4>

        <h2>Let's Work Together</h2>

        <div className="contact-container">

          {/* Left Side */}

          <div className="contact-info">

            <div className="contact-info">

  <p>
    📞
    <a href="tel:+91 8870884011">
      +91 8870884011
    </a>
  </p>

  <p>
    📧
    <a href="mailto:mohamedmoosanizam@gmail.com">
      mohamedmoosanizam@gmail.com
    </a>
  </p>

</div>

            <div className="contact-card">
              <h3>📍 Location</h3>
              <p>Coimbatore, Tamil Nadu</p>
            </div>

            <div className="contact-card">
              <h3>💻 GitHub</h3>
              <a
                href="https://github.com/mohamedmoosanizam-create"
                target="_blank"
                rel="noreferrer"
              >
                github.com/ mohamedmoosanizam-create
              </a>
            </div>

            <div className="contact-card">
              <h3>💼 LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/mohamed-moosa-6341552a4"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/mohamed-moosa-6341552a4
              </a>
            </div>

          </div>

          {/* Right Side */}

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button className="btn">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;