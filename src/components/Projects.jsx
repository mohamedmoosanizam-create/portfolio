function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="container">

        <h4>My Projects</h4>
        <h2>Featured Projects</h2>

        <div className="project-grid">

          <div className="project-card">
            <h3>♻️ Smart Waste Management System</h3>

            <p>
              AI-powered waste management platform with chatbot assistance,
              waste identification, worker monitoring and waste marketplace.
            </p>

            <h4>Technologies</h4>

            <span>HTML • CSS • JavaScript • Python • AI</span>

            <div className="project-buttons">

              <a
  href="https://github.com/mohamedmoosanizam-create"
  target="_blank"
  rel="noopener noreferrer"
  className="btn"
>
  GitHub
</a>

<a
  href="https://wastemanagementapplication.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline"
>
  Live Demo
</a>

            </div>

          </div>

          <div className="project-card">

            <h3>🏫 Madrasa eCampus</h3>

            <p>
              Complete school management portal including
              Admin, Teacher, Student and Parent dashboards
              with attendance, marks and fee management.
            </p>

              <a href="#" className="btn">
                GitHub
              </a>

              <a href="#" className="btn btn-outline">
                Live Demo
              </a>

            </div>

          </div>

          <div className="project-card">

            <h3>🛒 E-Commerce Website</h3>

            <p>
              Full Stack shopping website with user authentication,
              product management, shopping cart and online checkout.
            </p>

            <h4>Technologies</h4>

            <span>React • Node.js • Express • MySQL</span>

            <div className="project-buttons">

              <a href="#" className="btn">
                GitHub
              </a>

              <a href="#" className="btn btn-outline">
                Live Demo
              </a>

            </div>

          </div>

          <div className="project-card">

            <h3>💻 Personal Portfolio</h3>

            <p>
              Responsive developer portfolio showcasing
              skills, education, projects and contact details.
            </p>

            <h4>Technologies</h4>

            <span>React • CSS • JavaScript</span>

            <div className="project-buttons">

              <a href="#" className="btn">
                GitHub
              </a>

              <a href="#" className="btn btn-outline">
                Live Demo
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;