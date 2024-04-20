import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Team.css";
import { MemberCard } from "../components/MemberCard.jsx";

export const Team = () => {
  return (
    <>
      <section className="teamMembers">
        <div className="container">
          <div className="team">
            <ul>
              <NavLink to="#core_team">
                <li>Core Team</li>
              </NavLink>
              <NavLink to="#tech_team">
                <li>Tech Team</li>
              </NavLink>
              <NavLink to="#design_team">
                <li>Design Team</li>
              </NavLink>
              <NavLink to="#content_team">
                <li>Content Team</li>
              </NavLink>
              <NavLink to="#outreach_team">
                <li>Outreach Team</li> 
              </NavLink>
              <NavLink to="#operation_team">
                <li>Operation Team</li>
              </NavLink>
              <NavLink to="#marketing_team">
                <li>Marketing Team</li>
              </NavLink>
            </ul>
          </div>
          <hr />
          <div id="core_team">
            <MemberCard memberImage="../../public/imgs/Sohailsir.png" designation="President" memberName="Sohail Ansari"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Sohailsir.png" designation="President" memberName="Sohail Ansari"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Sohailsir.png" designation="President" memberName="Sohail Ansari"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Sohailsir.png" designation="President" memberName="Sohail Ansari"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Sohailsir.png" designation="President" memberName="Sohail Ansari"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Sohailsir.png" designation="President" memberName="Sohail Ansari"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Sohailsir.png" designation="President" memberName="Sohail Ansari"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Sohailsir.png" designation="President" memberName="Sohail Ansari"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Sohailsir.png" designation="President" memberName="Sohail Ansari"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Sohailsir.png" designation="President" memberName="Sohail Ansari"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Sohailsir.png" designation="President" memberName="Sohail Ansari"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Sohailsir.png" designation="President" memberName="Sohail Ansari"></MemberCard>
          </div>
          <hr />
          <div id="leads">
            <MemberCard memberImage="../../public/imgs/PuneetSir.jpg" designation="Outreach Lead" memberName="Puneet Palial"></MemberCard>
            <MemberCard memberImage="../../public/imgs/PuneetSir.jpg" designation="Outreach Lead" memberName="Puneet Palial"></MemberCard>
            <MemberCard memberImage="../../public/imgs/PuneetSir.jpg" designation="Outreach Lead" memberName="Puneet Palial"></MemberCard>
            <MemberCard memberImage="../../public/imgs/PuneetSir.jpg" designation="Outreach Lead" memberName="Puneet Palial"></MemberCard>
            <MemberCard memberImage="../../public/imgs/PuneetSir.jpg" designation="Outreach Lead" memberName="Puneet Palial"></MemberCard>
            <MemberCard memberImage="../../public/imgs/PuneetSir.jpg" designation="Outreach Lead" memberName="Puneet Palial"></MemberCard>
            <MemberCard memberImage="../../public/imgs/PuneetSir.jpg" designation="Outreach Lead" memberName="Puneet Palial"></MemberCard>
            <MemberCard memberImage="../../public/imgs/PuneetSir.jpg" designation="Outreach Lead" memberName="Puneet Palial"></MemberCard>
            <MemberCard memberImage="../../public/imgs/PuneetSir.jpg" designation="Outreach Lead" memberName="Puneet Palial"></MemberCard>
            <MemberCard memberImage="../../public/imgs/PuneetSir.jpg" designation="Outreach Lead" memberName="Puneet Palial"></MemberCard>
            <MemberCard memberImage="../../public/imgs/PuneetSir.jpg" designation="Outreach Lead" memberName="Puneet Palial"></MemberCard>
            <MemberCard memberImage="../../public/imgs/PuneetSir.jpg" designation="Outreach Lead" memberName="Puneet Palial"></MemberCard>
          </div>
          <hr />
          <div id="executive">
            <MemberCard memberImage="../../public/imgs/Presidents.jpg" designation="Executive Member" memberName="Ashish Gupta"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Presidents.jpg" designation="Executive Member" memberName="Ashish Gupta"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Presidents.jpg" designation="Executive Member" memberName="Ashish Gupta"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Presidents.jpg" designation="Executive Member" memberName="Ashish Gupta"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Presidents.jpg" designation="Executive Member" memberName="Ashish Gupta"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Presidents.jpg" designation="Executive Member" memberName="Ashish Gupta"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Presidents.jpg" designation="Executive Member" memberName="Ashish Gupta"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Presidents.jpg" designation="Executive Member" memberName="Ashish Gupta"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Presidents.jpg" designation="Executive Member" memberName="Ashish Gupta"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Presidents.jpg" designation="Executive Member" memberName="Ashish Gupta"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Presidents.jpg" designation="Executive Member" memberName="Ashish Gupta"></MemberCard>
            <MemberCard memberImage="../../public/imgs/Presidents.jpg" designation="Executive Member" memberName="Ashish Gupta"></MemberCard>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};
