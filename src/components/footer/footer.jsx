import "./footer.css";
function Footer() {
  return (
    <>
      <div className="footer" id="contact">
        <h4 className="Get-in-touch">Get in Touch</h4>
        <div className="contact_links">
          <div className="contact_email_div">
            <p className="Email-id">
              Email:
              <a href="mailto:PardeepBhardwaj.pb@gmail.com">
                {" "}
                PardeepBhardwaj.pb@gmail.com
              </a>
            </p>
            {/* <p className="Phone-number">
              Phone: <a href="tel:+1234567890">+1 234 567 890</a>
            </p> */}
          </div>
          <div className="social-media-links">
            <a
              className="linkden"
              href="https://www.linkedin.com/in/pardeep-kumar-3580537a/"
              
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="github"
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
