import "./navbar.css";
export default function Navbar(params) {
  return (
    <div id={"nav"} className={"open"}>
      <div>
        <ul id={"navitems"}>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </div>
      <a href="#home">
        <div id={"arrow"}></div>
      </a>
    </div>
  );
}
