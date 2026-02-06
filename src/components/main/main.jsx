import "./main.css";
// import Experience from "../experience/experience.jsx";
function main() {
  return (
    <>
      <div className="main_container">
        <img className="profile_image" src="/photo.png" alt="" srcset="" />
        <div className="main_content">
          <h1 className="main_content_chacha_name">Pardeep Bhardwaj</h1>
          <p className="main_content_p">
            Sr. Technical Manager / Sr. Project Manager at PraGaut Technologies
            Pvt Ltd
          </p>
          <p className="main_content_p">
            Specializing in Distributed Systems & Cloud Architecture | 12+ Years
            of Experience
          </p>
          <div className="buttons_main_div">
            <a
              href="https://www.linkedin.com/in/pardeep-kumar-3580537a/"
              className="buttons_main" target="blank"
            >
              LinkedIn
            </a>
            <a href="#experience" className="buttons_main">
              Experience
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default main;
