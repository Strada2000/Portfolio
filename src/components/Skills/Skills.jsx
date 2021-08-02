import React from "react";
import "./skills.scss";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1 className="head">My Skills</h1>
      <p className="title">Python</p>
      <div class="container">
        <div class="skills python">80%</div>
      </div>
      <p className="title">React</p>
      <div class="container">
        <div class="skills react">75%</div>
      </div>
      <p className="title">HTML</p>
      <div class="container">
        <div class="skills html">70%</div>
      </div>
      <p className="title">CSS</p>
      <div class="container">
        <div class="skills css">80%</div>
      </div>
      <p className="title">C++</p>
      <div class="container">
        <div class="skills cpp">85%</div>
      </div>
    </div>
  );
}
