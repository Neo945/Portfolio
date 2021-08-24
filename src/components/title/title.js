import "./title.css";

function Blink(params) {
  return (
    <span
      id="text"
      style={{ height: "10px", margin: "10px", marginLeft: "0px" }}
    ></span>
  );
}

export default function Title(params) {
  return (
    <div id={"title"}>
      <div>
        <div className={"text"}>
          {"Finally, you found me!"
            .split("")
            .map((ele) => (ele === " " ? <pre>{ele}</pre> : <div>{ele}</div>))}
        </div>
        <div className={"text"}>
          {"Welcome to my Protfolio"
            .split("")
            .map((ele) => (ele === " " ? <pre>{ele}</pre> : <div>{ele}</div>))}
        </div>
        <div className={"text"}>
          {"Where do you wanna go?"
            .split("")
            .map((ele) => (ele === " " ? <pre>{ele}</pre> : <div>{ele}</div>))}
        </div>
      </div>
    </div>
  );
}
