import React from "react";
import Card from "./EduCard";
import Styles from "./Education.module.css";

const projectObj = [
  {
    title: "FULL-STACK WEB DEVELOPMENT",
    time: "April 2022 | Present",
    description: "MASAI SCHOOL BENGALURU, KA. ",
  },
  {
    title: "B.Tech in Computer Science Engineering",
    time: "August 2017-October 2021 ",
    description: "Maryland Institute of Technology and Management, Jamshedpur",
  },
  {
    title: "Diploma in Computer Science",
    time: "August 2014-July 2017",
    description: "Al-Kabir Polytechnic, Jamshedpur",
  },
];

function Education() {
  return (
    <div className={`${Styles.Education} section`}>
      <div>
        <h1 className="heading">Education</h1>
      </div>
      <div className={Styles.Education__showcase}>
        {projectObj.map((proj) => (
          <a href={proj.github} target="_blank">
            <Card key={proj.title} {...proj} time={proj.time} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Education;
