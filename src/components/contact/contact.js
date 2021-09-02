import twitter from "../static/twitter.png";
import instagram from "../static/instagram.png";
import linkedin from "../static/linkedin.png";
import resume from "../static/resume.gif";
import "./contact.css";

export default function Contact(props) {
  return (
    <div id={"contact"}>
      <div>
        <div className={"contact-header"}>
          You can contact me from anywhere...
        </div>
        <div className={"contact-content"}>
          <ul style={{ transform: "translateX(1em)" }}>
            <li
              onMouseOver={() =>
                (document.getElementById("linkedin").style.opacity = 1)
              }
              onMouseLeave={() =>
                (document.getElementById("linkedin").style.opacity = 0)
              }
            >
              <img src={`${linkedin}`} className={"icon"} alt="" />
              <div className="icon-text" id="linkedin">
                Linkedin
              </div>
            </li>
            <li
              onMouseOver={() =>
                (document.getElementById("twitter").style.opacity = 1)
              }
              onMouseLeave={() =>
                (document.getElementById("twitter").style.opacity = 0)
              }
            >
              <img src={`${twitter}`} className={"icon"} alt="" />
              <div className="icon-text" id="twitter">
                Twitter
              </div>
            </li>
            <li
              onMouseOver={() =>
                (document.getElementById("instagram").style.opacity = 1)
              }
              onMouseLeave={() =>
                (document.getElementById("instagram").style.opacity = 0)
              }
            >
              <img src={`${instagram}`} className={"icon"} alt="" />
              <div className="icon-text" id="instagram">
                Instagram
              </div>
            </li>
            <li
              onMouseOver={() =>
                (document.getElementById("resume").style.opacity = 1)
              }
              onMouseLeave={() =>
                (document.getElementById("resume").style.opacity = 0)
              }
            >
              <a
                href={
                  "https://drive.google.com/file/d/1R2YnU6Up6z5qGv0m6mAxl0vQv5yrIrsl/view?usp=sharing"
                }
                rel="noreferrer"
                target="_blank"
              >
                <img src={`${resume}`} className={"icon"} alt="" />
              </a>
              <div className="icon-text" id="resume">
                Resume
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
