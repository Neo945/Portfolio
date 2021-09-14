import "./project.css";
import list from "./data.json";

function Card(props) {
  return (
    <div className={"card"}>
      <div>
        <div className={"card-content"}>
          <div className={"card-title"}>{props.content?.title}</div>
          <div
            className={"card-body"}
            style={{ fontSize: "1.5em", width: "100%", height: "auto" }}
          >
            {props.content?.description}
          </div>
          <a
            href={props.content?.git}
            className={"github-link"}
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>Project link</div>
            <div className={"next"}></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Project(props) {
  return (
    <div id={"proj"}>
      <>
        <div
          className={"project-title"}
          style={{
            width: "80%",
            fontWeight: "bold",
            fontSize: "4em",
            margin: "2.5%",
            marginTop: "5%",
          }}
        >
          Projects
        </div>
        <div className={"project-content"}>
          {list.map((ele) => (
            <Card overlap={ele.id + 1} content={ele} key={`${ele.id}`} />
          ))}
        </div>
      </>
    </div>
  );
}
