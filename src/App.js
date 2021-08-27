import "./app.css";
import { useState } from "react";
import { Page, Navbar, Title, AboutMe, Contact } from "./components";

function Sample(params) {
  return <div></div>;
}

function Cursor(params) {
  return <div id={"cursor"} className={params.is ? "active" : ""}></div>;
}

function moveEvent(event) {
  const cursor = document.getElementById("cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
}
function App() {
  const [active, setActive] = useState(false);
  return (
    <div
      onMouseMove={moveEvent}
      onMouseUp={() => setActive(false)}
      onMouseDown={() => setActive(true)}
    >
      <Navbar />
      <div id={"content"}>
        <Cursor is={active} />
        <Page id={"home"} component={Title} />
        <Page id={"about"} component={AboutMe} />
        <Page id={"project"} component={Sample} />
        <Page id={"contact"} component={Contact} />
      </div>
    </div>
  );
}

export default App;
