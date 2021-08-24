import "./app.css";
// import { useState } from "react";
import { Page, Navbar, Title } from "./components";

function Sample(params) {
  return <div></div>;
}

function Cursor(params) {
  return <div id={"cursor"}></div>;
}

function moveEvent(event) {
  const cursor = document.getElementById("cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
}
function App() {
  return (
    <div onMouseMove={moveEvent}>
      <Navbar />
      <div id={"content"}>
        <Cursor />
        <Page component={Title} />
        <Page component={Sample} />
        <Page component={Sample} />
        <Page component={Sample} />
      </div>
    </div>
  );
}

export default App;
