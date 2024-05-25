import { NavLink } from "react-router-dom";
import { MemberCard } from "../components/MemberCard.jsx";
import { useState, useEffect } from "react";
import "./Team.css";

export const Team = () => {
  const [dept, setDept] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);

  const getAllTeamMembers = async() => {
    try {
      const response = await fetch(
        "https://edc-website-server-api.onrender.com/api/auth/member",
        {
          mode: "cors",
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTeamMembers(data.response);
      }
    } catch (error) {
      console.log(`Services frontend error: ${error}`);
    }
  };

  const buttonActive = (department) => {
    if (department === "core")
      return { backgroundColor: "rgb(0, 195, 255", color: "white" };
    else if (department === "technical")
      return { backgroundColor: "rgb(0, 195, 255", color: "white" };
  };

  // useEffect(() => {}, [dept]);

  const removeButtonBackground = (prevDept) => {
    if (prevDept === "") {
    } else {
      document.getElementById(prevDept).style.backgroundColor = "transparent";
    }
  };
  const handleDeptChange = (newDept) => {
    console.log(newDept);
    document.getElementById("core_team").style.display = "none";
    document.getElementById("leads").style.display = "none";
    document.getElementById("executive").style.display = "none";
    document.getElementById("core_team_hr").style.display = "none";
    document.getElementById("leads_hr").style.display = "none";
    document.getElementById("executive_hr").style.display = "none";
    document.getElementById(newDept).style.backgroundColor = "rgb(0, 195, 255)";
    setDept(newDept);
  };

  // const department = (dept) => {
  //   if(dept === ""){
  //     setDept("none");
  //   }
  // }

  const memberFiltered = () => {
    // department(dept);
    return teamMembers
      .filter((member) => member.department.map((dept)=> dept.value).includes(dept))
      .map((member, index) => (
        <MemberCard
          key={index}
          memberImage={member.image}
          designation={member.post}
          memberName={member.name}
          linkedIn={member.linkedIn}
          instagram={member.instagram}
          x={member.x}
        />
      ));                
  };

  useEffect(() => {
    // department(dept);
    getAllTeamMembers();
  }, [])
  

  return (
    <>
      <section className="teamMembers">
        <div className="container">
          <div className="team">
            <ul>
              <button
                id="core"
                onClick={() => {
                  removeButtonBackground(dept);
                  handleDeptChange("core");
                }}
              >
                <li>Core Team</li>
              </button>
              <button
                id="technical"
                onClick={() => {
                  removeButtonBackground(dept);
                  handleDeptChange("technical");
                }}
              >
                <li>Tech Team</li>
              </button>
              <button
                id="design"
                onClick={() => {
                  removeButtonBackground(dept);
                  handleDeptChange("design");
                }}
              >
                <li>Design Team</li>
              </button>
              <button
                id="content"
                onClick={() => {
                  removeButtonBackground(dept);
                  handleDeptChange("content");
                }}
              >
                <li>Content Team</li>
              </button>
              <button
                id="outreach"
                onClick={() => {
                  removeButtonBackground(dept);
                  handleDeptChange("outreach");
                }}
              >
                <li>Outreach Team</li>
              </button>
              <button
                id="operations"
                onClick={() => {
                  removeButtonBackground(dept);
                  handleDeptChange("operations");
                }}
              >
                <li>Operation Team</li>
              </button>
              <button
                id="marketing"
                onClick={() => {
                  removeButtonBackground(dept);
                  handleDeptChange("marketing");
                }}
              >
                <li>Marketing Team</li>
              </button>
            </ul>
          </div>
          <hr style={{ border: "1px solid grey" }} />
          <div id="filterdiv">{memberFiltered()}</div>
          <h2 id="core_team_hr">Core Team</h2>
          <div id="core_team">
            {teamMembers
              .filter((member) => member.year === "4th")
              .map((member, index) => {
                console.log(member)
                return (
                  <MemberCard
                    key={index}
                    memberImage={member.image}
                    designation={member.post}
                    memberName={member.name}
                    linkedIn={member.linkedIn}
                    instagram={member.instagram}
                    x={member.x}
                  ></MemberCard>
                );
              })}
          </div>
          <h2 id="leads_hr">Team Leads</h2>
          <div id="leads">
            {teamMembers
              .filter((member) => member.year === "3rd")
              .map((member, index) => {
                return (
                  <MemberCard
                    key={index}
                    memberImage={member.image}
                    designation={member.post}
                    memberName={member.name}
                    linkedIn={member.linkedIn}
                    instagram={member.instagram}
                    x={member.x}
                  ></MemberCard>
                );
              })}
          </div>
          <h2 id="executive_hr">Executive Members</h2>
          <div id="executive">
            {teamMembers
              .filter((member) => member.year === "2nd")
              .map((member, index) => {
                return (
                  <MemberCard
                    key={index}
                    memberImage={member.image}
                    designation={member.post}
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
