import "./Experience.css";
function Experience() {
  return (
    <>
      {/* Experience
Tech Solutions

2018 - Present

Senior Software Engineer
· Led development of high-performance microservices architecture.
. Implemented scalable cloud solutions reducing latency by 40%.
. Managed a team of 8 engineers in critical projects.
1G
Innovatech Inc.

2013 - 2018

Software Engineer
. Developed and maintained RESTful APIs.
. Optimized databse performance, improving efficiency by 30%.
· Contributed to open-source projects. */}
      <div className="experience-section" id="experience">
        <h2 className="experience-title">Experience</h2>
        <div className="experience-item new-experience-item">
          <h3>Tech Solutions</h3>
          {/* <span className="experience-duration">2018 - Present</span> */}
          <h4>Sr. Technical Manager / Sr. Project Manager</h4>
          <ul>
            <li>
              Led development of high-performance microservices architecture.
            </li>
            <li>
              Implemented scalable cloud solutions reducing latency by 40%.
            </li>
            <li>Managed a team of 8 engineers in critical projects.</li>
          </ul>
        </div>
        <div className="experience-item new-experience-item">
          <h3 className="experience-title">Software Engineer</h3>
          <ul>
            <li>Developed and maintained RESTful APIs.</li>
            <li>
              Optimized database performance, improving efficiency by 30%.
            </li>
            <li>Contributed to open-source projects.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Experience;
