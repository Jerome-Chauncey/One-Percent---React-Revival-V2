import React from 'react'
import TeamMember from '../components/TeamMember'
import TickerTape from "../components/TickerTape";
import "../styles/index.css";

const teamMembers = [
  {
    photo: "/Dunstan.jpg",
    name: "Alex Dunstan Kiiru",
    description: "Developed the project skeleton, login/authentication, key components, pages, routes, and debugging.",
  },
  {
    photo: "/Jerome.jpeg",
    name: "Jerome Chauncey",
    description:
      "Group leader; designed project in Figma, coordinated team tasks, contributed to components, pages, API endpoints, and db.json.",
  },
  {
    photo: "/f3.jpeg",
    name: "Janyce Wathuo",
    description: "Contributed to project development and supported team efforts.",
  },
  {
    photo: "/Faisal.jpeg",
    name: "Faisal Said",
    description: "Led the project styling and visual design.",
  },
  {
    photo: "/Maverick.jpeg",
    name: "Maverick Kabogo",
    description: "Assisted in creating components and pages.",
  },
];

const Team = () => {
  return (
    <>
      <TickerTape />

      <section
        className="team-section py-5"
        style={{ backgroundColor: "#03045E" }}
      >
        <div className="container">
          <h2
            className="display-4 fw-bold mb-5 text-center"
            style={{ color: "#4CC9F0" }}
          >
            MEET OUR TEAM
          </h2>
          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                photo={member.photo}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Team
