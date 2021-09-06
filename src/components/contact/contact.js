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
    url: "https://drive.google.com/file/d/1R2YnU6Up6z5qGv0m6mAxl0vQv5yrIrsl/view?usp=sharing",
  },
  {
    name: "Instagram",
    icon: instagram,
    id: "instagram",
    url: "https://drive.google.com/file/d/1R2YnU6Up6z5qGv0m6mAxl0vQv5yrIrsl/view?usp=sharing",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    id: "linkedin",
    url: "https://drive.google.com/file/d/1R2YnU6Up6z5qGv0m6mAxl0vQv5yrIrsl/view?usp=sharing",
  },
  {
    name: "Resume",
    icon: resume,
    id: "resume",
    url: "https://drive.google.com/file/d/1R2YnU6Up6z5qGv0m6mAxl0vQv5yrIrsl/view?usp=sharing",
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
