import Navbar from "../../nav_bar/navbar";
import Footer from "../../footer/footer"
import "./about_page.css";
function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="About_page_container">
        <div className="About_page_text_cantioner">
          <h3 className="About_page_main_heading">Senior Software Engineer</h3>
          <div className="About_page_main_paragraph">

                <p>
                  I am a senior software engineer with over 12 years of
                  experience designing, building, and scaling distributed
                  software systems. My work focuses on creating reliable,
                  maintainable, and high-performance applications that solve
                  real business problems at scale.
                </p>

                <p>
                  I specialize in backend architecture, cloud infrastructure,
                  and system design, with hands-on experience leading complex
                  projects from concept to production.
                </p>

          </div>
        </div>
        <div className="About_page_main_heading_image_caintainer">
          <img
            className="About_page_profile_image"
            src="/photo.png"
            alt=""
            srcset=""
          />
        </div>

        <div className="About_page_Bottom_caintainer">
          <h3 className="About_page_leadership_heading">Leadership Focus</h3>
          <div className="About_pages_Bottom_cards">
            <h3 className="About_pages_bottom_focus">Professional Focus</h3>
            <ul className="About_page_main_paragraph">
              <li>Designing scalable and resilient distributed systems</li>
              <li>Building cloud-native architectures with long-term maintainability</li>
              <li>Mentoring engineers and fostering strong technical teams</li>
              <li>Aligning technical decisions with business goals</li>
            </ul>
          
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AboutPage;
