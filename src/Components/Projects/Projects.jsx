import React from "react";
import Card from "./Card";
import Styles from "./Project.module.css";


const projectObj = [
  {
    img: "https://pbs.twimg.com/media/E_JZaX2VgAcfSaa.jpg",
    title: "TATA 1MG.com",
    description:
      "India's best online pharmacy with a wide range of Prescription and OTC medicines. Order medicines online at 1mg's medicine store in 100+ cities.",
    tech: "Tech Stack :",
    used: "HTML | CSS | JavaScript | Local Storage | Reuseable Components",
    github: "https://github.com/mohitbirla20/team_1mg",
    blog: "https://frolicking-macaron-68e3c3.netlify.app/",
  },
  {
    img: "https://d540vms5r2s2d.cloudfront.net/mad/uploads/mad_60817d048b5f81619098884.png",
     title: "Loseit.com",
    description:
      "It's a calorie counting website which helps you reach your weight loss goal Tell us what you want to acheive and receive personalized goals.",
    tech: "Tech Stack :",
    used: "HTML | CSS | JavaScript | Local Storage | Reauseable Components",
    github: "https://github.com/Aayush983/doting-water-1849",
    blog: "https://scintillating-clafoutis-dbade0.netlify.app/",
  },
];

function Projects() {
  return (
    <div className={`${Styles.Project} section`}>
      <div>
        <h1 className="heading">Projects</h1>
      </div>
      <div className={Styles.Project__showcase}>
        {projectObj.map((proj) => (
          // <a href={proj.github} target="_blank">
          <Card key={proj.title} {...proj} tech={proj.tech} used={proj.used} />
          // </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
