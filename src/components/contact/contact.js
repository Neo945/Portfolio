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
            <li>
              <img src={`${linkedin}`} alt="" />
              Linkedin
            </li>
            <li>
              <img src={`${twitter}`} alt="" />
              Twitter
            </li>
            <li>
              <img src={`${instagram}`} alt="" />
              Instagram
            </li>
            <li>
              <img src={`${resume}`} alt="" />
              Resume
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
