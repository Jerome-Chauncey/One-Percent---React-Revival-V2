import React from 'react'
import TeamMember from '../components/TeamMember'
import TickerTape from "../components/TickerTape";



const teamMembers = [
  {
    photo: "",
    name: "Alex Dunstan Kiiru",
    role: "",
    description: "",
  },
  {
    photo: "/f2.jpeg",
    name: "Jerome Chauncey",
    role: "CTO",
    description:
      "Jerome oversees all technical aspects and ensures our platform is cutting-edge.",
  },
  {
    photo: "/f3.jpeg",
    name: "Janyce Wathuo",
    role: "",
    description: "",
  },
  {
    photo: "/f3.jpeg",
    name: "Faisal Said",
    role: "",
    description: "",
  },
  {
    photo: "/f3.jpeg",
    name: "Maverick Kabogo",
    role: "",
    description: "",
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
            Meet Our Team
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
