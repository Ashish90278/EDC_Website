import { NavLink } from "react-router-dom";
import react from "react";
import "./Aboutus.css";
import { Button } from "../components/Button.jsx";

export const Aboutus = () => {
  return (
    <>
      <section className="aboutus">
        <div className="container">
          {/* Group img section Start */}

          <div className="aboutus-groupimg">
            <div className="aboutus-groupimgleft">
              <img src="../../public/imgs/aboutus-groupimg1.png" alt="" />
            </div>
            <div className="aboutus-groupimgright">
              <img src="../../public/imgs/aboutus-groupimg.jpeg" alt="" />
            </div>
          </div>

          {/* Group img section End */}

          {/* Our Vision section Start */}

          <div className="our-vision">
            <div className="ourvision">
              <h2>Our Vision</h2>
              <p>
                The Entrepreneurship Cell, at JSS Noida was founded in 2004 with
                the motto of ‘Creating Job Creators’. Currently, we are a team
                of 21 managers, 2 overall Coordinators, and many enthusiastic
                students studying at JSS Noida, sharing a common mission. The
                team meets up in an 18x18x14 room, popularly known as the
                ‘E-Cell office’ inside the Students Activity Centre (SAC), where
                the strategy to uplift the flame of startups across the globe
                originates.
              </p>
            </div>
          </div>

          {/* Our Vision section End */}

          {/* President Note section Start */}

          <div className="president-note">
            <h2>President's Note</h2>
            <div className="president-photo">
              <img src="../../public/imgs/SohailSir.png" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              nesciunt? Repudiandae autem, maiores architecto eius dolores
              pariatur officiis blanditiis, neque laborum explicabo corporis
              possimus iusto iure incidunt odio repellendus doloribus delectus
              ea dolorem praesentium debitis? Id explicabo hic quia beatae saepe
              ea ipsa unde corrupti maiores, repudiandae a, tenetur eius fugiat
              enim dolore natus doloremque nobis blanditiis itaque! Fugit
              placeat mollitia praesentium quaerat, necessitatibus quas quidem
              sunt cumque ipsam quo vel obcaecati vitae doloribus, consectetur
              rem, error ab
            </p>
          </div>

          {/* President Note section End */}
        </div>
      </section>
      <hr />
    </>
  );
};
