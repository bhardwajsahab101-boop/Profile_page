import React from "react";
import Navbar from "../../nav_bar/navbar";
import "./Experience_page.css";
import Footer from "../../footer/footer";
function Experiencepage() {
  return (
    <div>

      <Navbar />

      <div className="experience_page">
        <div className="experience_main_page">
          <h3 className="experience_main_page_heading">Experience</h3>

          <div className="experience_page_card">
            <p className="project_main_card_name">
              PraGaut Technologies Pvt. Ltd.{" "}
            </p>
            <p className="project_main_card_p">
              Jan 2023 – Present | Gurugram, Haryana
            </p>
            <ul className="project_main_card_ul">
              <li>
                Leading end-to-end delivery of enterprise web applications with
                full ownership of architecture, timelines, and quality.
              </li>
              <li>
                Managing cross-functional teams of developers, designers, and QA
                engineers.
              </li>
              <li>
                Driving technical decisions using ASP.NET MVC, Node.js,
                React.js, and modern design patterns.
              </li>
              <li>
                Implementing dependency injection, clean architecture, and
                scalable backend systems.
              </li>
              <li>
                Acting as the bridge between business stakeholders and
                engineering teams to ensure on-time, high-quality delivery.
              </li>
            </ul>
          </div>

          <div className="experience_page_card">
            <p className="project_main_card_name">
              Project Manager / Technical Lead{" "}
            </p>
            <p className="project_main_card_p">
              Jan 2018 – Jan 2023 | Gurugram, Haryana
            </p>
            <ul className="project_main_card_ul">
              <li>
                Led multiple client projects simultaneously from requirement
                analysis to production release.
              </li>
              <li>Designed RESTful APIs and modular backend systems.</li>
              <li>
                Reviewed code, mentored team members, and enforced best
                practices.
              </li>
              <li>
                Coordinated sprint planning, task allocation, and release
                management.
              </li>
              <li>
                Improved application performance, stability, and maintainability
                across projects.
              </li>
            </ul>
          </div>


          <div className="experience_page_card">
            <p className="project_main_card_name">
              Sr. Software Engineer / Team Lead{" "}
            </p>
            <p className="project_main_card_p">
              Nov 2015 – Jan 2018 | Gurugram, Haryana
            </p>
            <ul className="project_main_card_ul">
              <li>
                Developed and maintained scalable web applications and internal
                tools.    
              </li>
              <li>
                Handled database design, optimization, and hosting management.
              </li>
              <li>
                Built responsive user interfaces using JavaScript, jQuery, and
                HTML.
              </li>
              <li>
                Took ownership of production deployments and server maintenance.
              </li>
              <li>
                Supported junior developers through code reviews and technical
                guidance.
              </li>
            </ul>
            </div>
            <div className="experience_page_card">
            <p className="project_main_card_name">
              IT Executive{" "} 
              </p>
            <p className="project_main_card_p">
              Jan 2015 – Nov 2015 | Gurugram, Haryana
            </p>
            <ul className="project_main_card_ul">
              <li>Managed internal IT systems and application support.</li>
              <li>
                Assisted in development and maintenance of company software tools.
              </li>
              <li>Provided technical support and infrastructure troubleshooting.</li>
            </ul>
            </div>
            <div className="experience_page_card">
            <p className="project_main_card_name">
              Software Developer{" "}
              </p>
            <p className="project_main_card_p">
              Mar 2014 – Dec 2014 | Greater Delhi Area
            </p>
            <ul className="project_main_card_ul">
              <li>
                Worked on core software development tasks and feature
                implementation.
              </li>
              <li>
                Gained hands-on experience in application development lifecycle.
              </li>
              <li>
                Collaborated with senior developers to deliver client-focused
                solutions.
              </li>
            </ul>
            </div>
        </div>
      </div>
      <Footer/> 
    </div>
  );
}

export default Experiencepage;
