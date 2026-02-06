import "./skill.css";
function skills() {
  return (
    <>
      <div className="skills-section" id="skills">
        <h2 className="skills-title">Skills</h2>
        <div className="Skills-category-cantiner">
          <div className="skills-category">
            <h3>Languages</h3>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Frameworks</h3>
            <ul>
              <li>Spring</li>
              <li>Node js</li>
              <li>React</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>DevOps & Tools</h3>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Cloud</h3>
            <ul>
              <li>AWS</li>
              <li>Azure</li>
              <li>GCP</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default skills;
