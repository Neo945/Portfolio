import "./project.css";
import list from "./data.json";
import { useState } from "react";

function Card(props) {
  return (
    <div
      className={"card"}
      style={{ left: `${props.content.id * 10}%` }}
      onMouseOver={async () => {
        const list = document.getElementsByClassName("card");
        const id = props.content.id;
        for (let i = id; i < list.length; i++) {
          list[i].style.transform = `translateX(${
            50 * (6 - i + id)
          }px) rotateY(0deg)`;
        }
      }}
      onMouseLeave={async () => {
        for (let i = 0; i < 6; i++) {
          document.getElementsByClassName("card")[
            i
          ].style.transform = `rotateY(20deg)`;
        }
      }}
    >
      <div className="shadow"></div>
      <div className={"card-content"}>
        <div className={"card-title"}>{props.content.title}</div>
        {/* <div className={"card-body"}>{props.content.description}</div> */}
      </div>
    </div>
  );
}

export default function Project(props) {
  return (
    <div id={"proj"}>
      <>
        <div className={"project-title"}>Projects</div>
        <div className={"project-content"}>
          {list.map((ele) => (
            <Card overlap={ele.id + 1} content={ele} key={`${ele.id}`} />
          ))}
        </div>
      </>
    </div>
  );
}
