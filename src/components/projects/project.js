import "./project.css";

function Card(props) {
  return (
    <div
      id={"card"}
      style={{ transform: `translateX(-${25 * props.overlap}%)` }}
    >
      <div></div>
    </div>
  );
}

export default function Project(props) {
  return (
    <div id={"proj"}>
      <div>
        <div className={"project-title"}>Projects</div>
        <div
          className={"project-content"}
          style={{ transform: "translate(15%)" }}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((ele) => (
            <Card overlap={ele} />
          ))}
        </div>
      </div>
    </div>
  );
}
