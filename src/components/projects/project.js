import "./project.css";
import list from "./data.json";

function Card(props) {
  return (
    <div
      className={"card"}
      style={{ left: `${props.content.id * 10}%` }}
      onMouseOver={async () => {
        for (let i = props.content.id - 2; i >= 0; i--) {
          document.getElementsByClassName("card")[
            i
          ].style.transform = `translateX(-${20 * (i + 1)}px)`;
        }
        for (let i = list.length - props.content.id; i > 0; i--) {
          document.getElementsByClassName("card")[
            6 - i
          ].style.transform = `translateX(${350 - 70 * (6 - i)}px)`;
        }
      }}
      onMouseLeave={async () => {
        for (let i = 0; i < 6; i++) {
          document.getElementsByClassName("card")[i].style.transform = `none`;
        }
      }}
    >
      <div className="shadow"></div>
      <div className={"card-content"}>
        <div className={"card-title"}>{props.content.title}</div>
        <div className={"card-body"}>{"props.content.description"}</div>
      </div>
    </div>
  );
}

export default function Project(props) {
  return (
    <div id={"proj"}>
      <>
        {/* <div className={"project-title"}>Projects</div> */}
        <div className={"project-content"}>
          {list.map((ele) => (
            <Card overlap={ele.id + 1} content={ele} key={`${ele.id}`} />
          ))}
        </div>
      </>
    </div>
  );
}
