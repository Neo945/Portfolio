import twitter from "../static/twitter.png";
import instagram from "../static/instagram.png";
import linkedin from "../static/linkedin.png";
import resume from "../static/resume.gif";
import "./contact.css";
const list = [
  {
    name: "Twitter",
    icon: twitter,
    id: "twitter",
    url: "https://twitter.com/ShreeshSrivast8",
  },
  {
    name: "Instagram",
    icon: instagram,
    id: "instagram",
    url: "https://www.instagram.com/shreeshse105/",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    id: "linkedin",
    url: "https://www.linkedin.com/in/shreesh-srivastava/",
  },
  {
    name: "Resume",
    icon: resume,
    id: "resume",
    url: "https://drive.google.com/file/d/1ez20E_MlRXZT6fcpOHcdX0vmRC8LPa5d/view?usp=sharing",
  },
];

export default function Contact(props) {
  return (
    <div id={"contact"}>
      <div>
        <div
          className={"contact-header"}
          style={{ margin: "20px", fontweight: "bold" }}
        >
          You can contact me from anywhere...
        </div>
        <div className={"contact-content"}>
          <ul>
            {list.map((item) => (
              <li
                key={item.id}
                onMouseOver={() =>
                  (document.getElementById(item.id).style.opacity = 1)
                }
                onMouseLeave={() =>
                  (document.getElementById(item.id).style.opacity = 0)
                }
              >
                <a
                  href={item.url}
                  // className={"icon"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.icon} alt={item.name} />
                </a>
                <div className="icon-text" id={item.id}>
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
