import "./project.css";

function Card(props) {
  return (
    <div
      id={"card"}
      style={{ transform: `translateX(-${35 * props.overlap}%)` }}
      onMouseEnter={(event) => (event.target.style.width = "250px")}
      onMouseLeave={(event) => (event.target.style.width = "200px")}
    >
      <div class="shadow"></div>
      <div className={"card-content"}>
        <div className={"card-title"}>{"props.title"}</div>
        <div className={"card-body"}>{"props.body"}</div>
      </div>
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
          style={{ transform: "translate(20%)" }}
        >
          {[1].map((ele) => (
            // {[1, 2, 3, 4, 5, 6].map((ele) => (
            <Card overlap={ele + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
