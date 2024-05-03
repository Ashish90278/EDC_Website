import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Team.css";
import { MemberCard } from "../components/MemberCard.jsx";
import members from "./Json/Members.json";
import { usestate, useEffect } from "react";

export const Team = () => {
  const [dept, setDept] = useState(" ");

  useEffect(() => {}, [dept]);

  const handleDeptChange = (newDept) => {
    document.getElementById("core_team").style.display = "none";
    document.getElementById("leads").style.display = "none";
    document.getElementById("executive").style.display = "none";
    setDept(newDept);
  };

  const memberFiltered = () => {
    return members
      .filter((member) => member.department.includes(dept))
      .map((member, index) => (
        <MemberCard
          key={index}
          memberImage={member.image}
          designation={member.position}
          memberName={member.name}
          linkedIn={member.linkedIn}
          instagram={member.instagram}
          x={member.x}
        />
      ));
  };

  return (
    <>
      <section className="teamMembers">
        {/* <div>hii</div> */}
        <div className="container">
          <div className="team">
            <ul>
              <button onClick={() => handleDeptChange("core")}>
                <li>Core Team</li>
              </button>
              <button onClick={() => handleDeptChange("technical")}>
                <li>Tech Team</li>
              </button>
              <button onClick={() => handleDeptChange("design")}>
                <li>Design Team</li>
              </button>
              <button onClick={() => handleDeptChange("content")}>
                <li>Content Team</li>
              </button>
              <button onClick={() => handleDeptChange("outreach")}>
                <li>Outreach Team</li>
              </button>
              <button onClick={() => handleDeptChange("operations")}>
                <li>Operation Team</li>
              </button>
              <button onClick={() => handleDeptChange("marketing")}>
                <li>Marketing Team</li>
              </button>
            </ul>
          </div>
          <hr style={{ border: "1px solid grey" }} />
          <div id="filterdiv">{memberFiltered()}</div>
          <div id="core_team">
            {members
              .filter((member) => member.year === "4th")
              .map((member, index) => {
                return (
                  <MemberCard
                    key={index}
                    memberImage={member.image}
                    designation={member.position}
                    memberName={member.name}
                    linkedIn={member.linkedIn}
                    instagram={member.instagram}
                    x={member.x}
                  ></MemberCard>
                );
              })}
          </div>
          <hr style={{ border: "1px solid grey" }} />
          <div id="leads">
            {members
              .filter((member) => member.year === "3rd")
              .map((member, index) => {
                return (
                  <MemberCard
                    key={index}
                    memberImage={member.image}
                    designation={member.position}
                    memberName={member.name}
                    linkedIn={member.linkedIn}
                    instagram={member.instagram}
                    x={member.x}
                  ></MemberCard>
                );
              })}
          </div>
          <hr style={{ border: "1px solid grey" }} />
          <div id="executive">
            {members
              .filter((member) => member.year === "2nd" || member.year === "2")
              .map((member, index) => {
                return (
                  <MemberCard
                    key={index}
                    memberImage={member.image}
                    designation={member.position}
                    memberName={member.name}
                    linkedIn={member.linkedIn}
                    instagram={member.instagram}
                    x={member.x}
                  ></MemberCard>
                );
              })}
          </div>
        </div>
        <hr style={{ border: "1px solid grey" }} />
      </section>
    </>
  );
};
