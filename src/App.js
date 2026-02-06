import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav_bar/navbar";
import Main from "./components/main/main";
import About from "./components/about/about.jsx";
import AboutPage from "./components/about/about_page/about_page";
import Experience from "./components/Experience/Experience.jsx";
import Skills from "./components/skills/skills.jsx";
import Footer from "./components/footer/footer.jsx";
import SkillPage from "./components/skills/Skill_page/skill_page.jsx";
import ContactPage from './components/contact/contact_page/contact_page.jsx';
import ExperiencePage from "./components/Experience/Experience_page/Experience_page.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Main />
              <About />
              <Experience />
              <Skills />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/skills" element={<SkillPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
