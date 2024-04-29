import { NavLink, useNavigate } from "react-router-dom";
import "./Home.css";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { MemberCard } from "../components/MemberCard.jsx";
import { EventCard } from "../components/EventCard.jsx";
export const Home = () => {
  // const navigate = useNavigate();
  // const redirect = () => {
  //   let path = "/register";
  //   navigate(path);
  // }

  // new Typewriter("#typewriter", {
  //   strings: ["Hello", "World"],
  //   autoStart: true,
  //   loop: true,
  // });

  // useEffect(() => {
  //   Typewriter();
  // }, [])

  return (
    <>
      <div className="sticky">
        <div className="stick_icons">
          <NavLink to="#" target="_blank">
            <img src="../imgs/sticky_icons/whatsapp.png" alt="" />
          </NavLink>
        </div>
        <div className="stick_icons">
          <NavLink
            to="https://www.instagram.com/ecelljss/?hl=en"
            target="_blank"
          >
            <img src="../imgs/sticky_icons/insta.png" alt="" />
          </NavLink>
        </div>
        <div className="stick_icons">
          <NavLink to="https://twitter.com/cell_edc" target="_blank">
            <img src="../imgs/sticky_icons/twitter.png" alt="" />
          </NavLink>
        </div>
        <div className="stick_icons">
          <NavLink
            to="https://in.linkedin.com/company/edc-jssate"
            target="_blank"
          >
            <img src="../imgs/sticky_icons/linkedin.png" alt="" />
          </NavLink>
        </div>
      </div>

      <section className="hero_section">
        <div className="container">
          <div className="main_hero_section">
            <div className="left_hero_section">
              <div>
                We
                <h3>
                  <Typewriter
                    options={{
                      strings: ["Ideate", "Innovate", "Incubate"],
                      autoStart: true,
                      loop: true,
                      pauseFor: 1000,
                    }}
                  />
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis aspernatur veniam blanditiis aut eius distinctio
                recusandae dolorum aliquid nesciunt cumque. Corrupti nesciunt
                mollitia quaerat doloremque est ab sequi placeat maiores.
                Placeat, tempora adipisci praesentium, sunt, beatae ipsa
                officiis sit accusamus minus ipsum a corporis voluptatem.
              </p>
            </div>
            <div className="right_hero_section">
              <img src="../imgs/y.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <hr /> */}
      {/* <!-- Code for Who we are section --> */}
      <section className="who_we_are">
        <div className="container">
          <div className="wwr">
            <div className="wwr_head">
              <hr />
              <h2>Who we are?</h2>
              <hr />
            </div>
            <h4>
              We are team EDC (Entrepreneurship Development Cell) of JSS Academy
              of Technical Education, Noida.
            </h4>
          </div>
          <div className="wwr_main">
            <div className="flowchart">
              {/* <img id="image" src="../imgs/wwr_main.png" alt="" media="(max-width:540px)"/> */}
              <picture>
                <source
                  media="(max-width:580px)"
                  srcset="../imgs/wwr_flowchart.png"
                />
                <img
                  src="../imgs/wwr_main.png"
                  alt="Flowers"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Code for E_Summit Section --> */}
      <section>
        <div className=" e_summit container">
          <div className="e_summit_top">
            <h4>COMING SOON...</h4>
            <img src="../imgs/EDC_logo.png" alt="" />
          </div>
          <div className="e_summit_mid">
            <img src="../imgs/E_summit.png" alt="E_Summit" />
          </div>
          <div className="e_summit_bottom">
            <button>
              <NavLink to="/register">Register</NavLink>
            </button>
          </div>
        </div>
      </section>

      {/* <!-- Code for Our Events Section --> */}
      <section className="our_events">
        <div className="container">
          <div className="wwr_head" id="our_events">
            <hr />
            <h2>Our Events</h2>
            <hr />
          </div>

          {/* <!-- Carousel --> */}
          <div className="carousel-container">
            <div className="carousel">
              <EventCard
                eventImage="../imgs/EDC_GFG.png"
                eventName="Speaker session with Mr. Sandeep Jain ( Founder of Geeks for Geeks )"
                eventDate="Friday, 10 Nov 2023"
                eventTime="03:45 PM - 04:45 PM "
                eventVenue="Multi-Purpose Hall"
                eventPageLink="/events/mr.sandeepjain"
              ></EventCard>
              <EventCard
                eventImage="../imgs/EDC_Lakshya.png"
                eventName="Speaker session with Mr. Sandeep Jain ( Founder of Geeks for Geeks )"
                eventDate="Friday, 10 Nov 2023"
                eventTime="03:45 PM - 04:45 PM "
                eventVenue="Multi-Purpose Hall"
                eventPageLink="/events/lakshya"
              ></EventCard>
              <EventCard
                eventImage="../imgs/EDC_Stockgrow.png"
                eventName="Speaker session with Mr. Sandeep Jain ( Founder of Geeks for Geeks )"
                eventDate="Friday, 10 Nov 2023"
                eventTime="03:45 PM - 04:45 PM "
                eventVenue="Multi-Purpose Hall"
                eventPageLink="/events/stockgrow"
              ></EventCard>
              <EventCard
                eventImage="../imgs/EDC_GFG.png"
                eventName="Speaker session with Mr. Sandeep Jain ( Founder of Geeks for Geeks )"
                eventDate="Friday, 10 Nov 2023"
                eventTime="03:45 PM - 04:45 PM "
                eventVenue="Multi-Purpose Hall"
                eventPageLink="/events/mr.sandeepjain"
              ></EventCard>
              <EventCard
                eventImage="../imgs/EDC_Lakshya.png"
                eventName="Speaker session with Mr. Sandeep Jain ( Founder of Geeks for Geeks )"
                eventDate="Friday, 10 Nov 2023"
                eventTime="03:45 PM - 04:45 PM "
                eventVenue="Multi-Purpose Hall"
                eventPageLink="/events/lakshya"
              ></EventCard>
              <EventCard
                eventImage="../imgs/EDC_Stockgrow.png"
                eventName="Speaker session with Mr. Sandeep Jain ( Founder of Geeks for Geeks )"
                eventDate="Friday, 10 Nov 2023"
                eventTime="03:45 PM - 04:45 PM "
                eventVenue="Multi-Purpose Hall"
                eventPageLink="/events/stockgrow"
              ></EventCard>
            </div>
            {/* <button
              className="arrow-button left-arrow"
              onClick="myFunction(-310)"
            >
              <span>&#8249;</span>
            </button>
            <button
              className="arrow-button right-arrow"
              onclick="myFunction(310)"
            >
              <span>&#8250;</span>
            </button> */}
          </div>

          {/* <!-- Society Info --> */}
          <div className="props">
            <div className="prop">
              <img src="../imgs/prop3.svg" alt="Members" />
              <h4 id="value1">100</h4>
              <p>Members</p>
            </div>

            <div className="prop">
              <img src="../imgs/prop4.svg" alt="Members" />
              <h4 id="value2">100</h4>
              <p>Startups</p>
            </div>

            <div className="prop">
              <img src="../imgs/prop1.svg" alt="Members" />
              <h4 id="value3">100</h4>
              <p>Alumni</p>
            </div>

            <div className="prop">
              <img src="../imgs/prop2.svg" alt="Members" />
              <h4 id="value4">100</h4>
              <p>Events</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Code for Our Prestigious Speakers --> */}
      <section className="our_prestigious_speakers">
        <div className="container">
          <div className="wwr_head" id="our_speakers">
            <hr />
            <h2>Our Prestigious Speakers</h2>
            <hr />
          </div>

          <div className="speakers">
            <div className="recent_speaker">
              <img src="../imgs/recent_speaker.png" alt="" />
              <button>Read more</button>
            </div>
            <div className="past_speakers">
              <div className="past_speaker">
                <img src="../imgs/past_speaker.png" alt="" />
                <button>Read more</button>
              </div>
              <div className="past_speaker">
                <img src="../imgs/past_speaker.png" alt="" />
                <button>Read more</button>
              </div>
              <div className="past_speaker">
                <img src="../imgs/past_speaker.png" alt="" />
                <button>Read more</button>
              </div>
              <div className="past_speaker">
                <img src="../imgs/past_speaker.png" alt="" />
                <button>Read more</button>
              </div>
              <div className="past_speaker">
                <img src="../imgs/past_speaker.png" alt="" />
                <button>Read more</button>
              </div>
              <div className="past_speaker">
                <img src="../imgs/past_speaker.png" alt="" />
                <button>Read more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Code for Our Clothing Partner --> */}
      <section className="our_clothing_partner">
        <div className="container">
          <div className="wwr_head" id="our_partners">
            <hr />
            <h2>Our Clothing Partner</h2>
            <hr />
            <div className="hanger">
              <img src="../imgs/cloths/hanger.png" alt="" />
            </div>
          </div>
          <div className="clothes">
            <div className="cloth"></div>
            <div className="cloth_container">
              <div className="cloth">
                <img src="../imgs/cloths/Group 230.png" alt="" />
              </div>
              <div className="cloth"></div>
              <div className="cloth">
                <img src="../imgs/cloths/Group 231.png" alt="" />
              </div>
            </div>
            <div className="cloth brand">
              <img src="../imgs/cloths/brand.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Code for Our Collaborations --> */}
      <section className="our_collaborations">
        <div className="container">
          <div className="wwr_head" id="our_collaborations">
            <hr />
            <h2>Our Collaborations</h2>
            <hr />
          </div>
          <div className="sponsors">
            <div className="sponsor">
              <img src="../imgs/OurCollaborations/19 1.png" alt="" />
              <img src="../imgs/OurCollaborations/19 2.png" alt="" />
              <img src="../imgs/OurCollaborations/19 3.png" alt="" />
              <img src="../imgs/OurCollaborations/19 4.png" alt="" />
              <img src="../imgs/OurCollaborations/19 5.png" alt="" />
              <img src="../imgs/OurCollaborations/19 6.png" alt="" />
              <img src="../imgs/OurCollaborations/19 7.png" alt="" />
              <img src="../imgs/OurCollaborations/19 8.png" alt="" />
              <img src="../imgs/OurCollaborations/19 9.png" alt="" />
              <img src="../imgs/OurCollaborations/19 10.png" alt="" />
              <img src="../imgs/OurCollaborations/19 11.png" alt="" />
              <img src="../imgs/OurCollaborations/19 12.png" alt="" />
              <img src="../imgs/OurCollaborations/19 13.png" alt="" />
              <img src="../imgs/OurCollaborations/19 14.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Code for Our Team Members --> */}
      {/* <section className="our_core_team_members">
        <div className="container">
          <div className="wwr_head" id="our_members">
            <hr />
            <h2>Our Core Team Members</h2>
            <hr />
          </div>
          <div className="members">
            <MemberCard
              memberImage="../imgs/SohailSir.png"
              designation="President"
              memberName="Sohail Ansari"
            ></MemberCard>
            <MemberCard
              memberImage="../imgs/SohailSir.png"
              designation="President"
              memberName="Sohail Ansari"
            ></MemberCard>
            <MemberCard
              memberImage="../imgs/SohailSir.png"
              designation="President"
              memberName="Sohail Ansari"
            ></MemberCard>
            <MemberCard
              memberImage="../imgs/SohailSir.png"
              designation="President"
              memberName="Sohail Ansari"
            ></MemberCard>
            <MemberCard
              memberImage="../imgs/SohailSir.png"
              designation="President"
              memberName="Sohail Ansari"
            ></MemberCard>
            <MemberCard
              memberImage="../imgs/SohailSir.png"
              designation="President"
              memberName="Sohail Ansari"
            ></MemberCard>
            <MemberCard
              memberImage="../imgs/SohailSir.png"
              designation="President"
              memberName="Sohail Ansari"
            ></MemberCard>
            <MemberCard
              memberImage="../imgs/SohailSir.png"
              designation="President"
              memberName="Sohail Ansari"
            ></MemberCard>
            <MemberCard
              memberImage="../imgs/SohailSir.png"
              designation="President"
              memberName="Sohail Ansari"
            ></MemberCard>
            <MemberCard
              memberImage="../imgs/SohailSir.png"
              designation="President"
              memberName="Sohail Ansari"
            ></MemberCard>
            <MemberCard
              memberImage="../imgs/SohailSir.png"
              designation="President"
              memberName="Sohail Ansari"
            ></MemberCard>
            <MemberCard
              memberImage="../imgs/SohailSir.png"
              designation="President"
              memberName="Sohail Ansari"
            ></MemberCard>
          </div>
        </div>
      </section> */}
      <hr style={{border:"1px solid grey" }}/>
    </>
  );
};
