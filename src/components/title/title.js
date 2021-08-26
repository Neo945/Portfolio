import "./title.css";
import Blink from "../blink/blink";
import logo from "../static/image.jpg";

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
        <Blink />
      </div>
      <div id="img">
        <img src={logo} width="200px" height="200px" alt="title" />
      </div>
    </div>
  );
}
