function Skills() {

  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React", level: "80%" },
    { name: "Java", level: "85%" },
    { name: "Python", level: "80%" },
    { name: "MySQL", level: "80%" },
    { name: "Git & GitHub", level: "75%" }
  ];

  return (
    <section className="skills" id="skills">

      <div className="container">

        <h4>My Skills</h4>

        <h2>Technical Skills</h2>

        <div className="skills-container">

          {skills.map((skill, index) => (

            <div className="skill" key={index}>

              <div className="skill-title">

                <span>{skill.name}</span>

                <span>{skill.level}</span>

              </div>

              <div className="progress">

                <div
                  className="progress-bar"
                  style={{ width: skill.level }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;