import "./title.css";
import Blink from "../blink/blink";
// import logo from "../static/image.jpg";
import { wait } from "../utils";

const bounce = async (event) => {
  event.target.classList.add("bounce-ele");
  await wait(1000);
  event.target.classList.remove("bounce-ele");
};

export default function Title(params) {
  return (
    <div id={"title"}>
      <div id="img">
        {/* <img src={logo} width="345.6px" height="460.8px" alt="title" /> */}
      </div>
      <div>
        <div className={"text"}>
          {"Finally, you found me!"
            .split("")
            .map((ele) =>
              ele === " " ? (
                <div>&nbsp;</div>
              ) : (
                <div onMouseOver={bounce}>{ele}</div>
              )
            )}
        </div>
        <div className={"text"}>
          {"Welcome to my Portfolio"
            .split("")
            .map((ele) =>
              ele === " " ? (
                <div>&nbsp;</div>
              ) : (
                <div onMouseOver={bounce}>{ele}</div>
              )
            )}
        </div>
        <div className={"text"}>
          {"Where do you wanna go?"
            .split("")
            .map((ele) =>
              ele === " " ? (
                <div>&nbsp;</div>
              ) : (
                <div onMouseOver={bounce}>{ele}</div>
              )
            )}
        </div>
        <Blink />
      </div>
    </div>
  );
}
