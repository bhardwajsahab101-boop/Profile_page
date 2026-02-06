import "./skill_page.css";
import Navbar from "../../nav_bar/navbar";
import Footer from "../../footer/footer";
function skill_page() {
  return (
    <>
      <Navbar />
      {/* 
change Backend & API Development:
.NET (MVC .NET Framework, MVC .NET Core, .NET C#), Node.js (Express.js)

Frontend & UI Development:
React.js, JavaScript, HTML, CSS

Databases & Data Access:
MS SQL, MySQL, EDMX, Dapper

Cloud & DevOps:
AWS (EC2, S3, Root53, Cloud Services)

GitHub for version control

Operating Systems & Infrastructure:
Windows, Linux (Ubuntu), Raspberry Pi (RPI)

Scripting & Automation:
Java script, Python scripting
*/}
      <div className="skill">
        <div className="skill_container">
          <h1 className="skill_main_heading">Skills & Expertise</h1>
          <div className="skill_paragraph_container">
            <p className="skill_paragraph">
              I specialize in building scalable backend systems and cloud-native
              architectures, with a strong focus on performance, reliability,
              and long-term maintainability.
            </p>
          </div>
        </div>
        <div className="card_container">
          <div className="card">
            <h2 className="skill_sub_heading">Frontend & UI Development</h2>
            <ul className="skill_list">
              <li>
                React.js 
              </li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="skill_sub_heading">Databases & Data Access</h2>
            <ul className="skill_list">
              <li>MS SQL</li>
              <li> MySQL </li>
              <li>EDMX</li>
              <li>Dapper</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="skill_sub_heading">Cloud & DevOps</h2>
            <ul className="skill_list">
              <li>
              AWS (EC2, S3, Root53, Cloud Services)
              </li>
             
            </ul>
          </div>
          <div className="card">
            <h2 className="skill_sub_heading">Backend & API Development</h2>
            <ul className="skill_list">
              <li>
                .NET (MVC .NET Framework, MVC .NET Core, .NET C#)
              </li>
              <li>Node.js (Express.js)</li>
            
            </ul>
          </div>
          <div className="card">
            <h2 className="skill_sub_heading">
   Operating Systems & Infrastructure:
            </h2>
            <ul className="skill_list">
              <li>Windows</li>
              <li>Linux (Ubuntu)</li>
              <li>Raspberry Pi (RPI)</li>
              
            </ul>
          </div>
          <div className="card">
            <h2 className="skill_sub_heading">Scripting & Automation</h2>
            <ul className="skill_list">
              <li>Java script</li>
              <li>Python scripting</li>
             
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default skill_page;
