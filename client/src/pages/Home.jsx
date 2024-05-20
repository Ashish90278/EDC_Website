import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";
import { MemberCard } from "../components/MemberCard.jsx";
import { EventCard } from "../components/EventCard.jsx";
import "./Home.css";
import "./Loader.css";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [counterOn, setCounterOn] = useState(false);

  const getAllEventsData = async () => {
    try {
      const response = await fetch(
        "https://edc-website-server-api.onrender.com/api/admin/events",
        {
          mode: "cors",
          method: "GET",
        }
      );

      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Change the time duration as per your requirement

    getAllEventsData();
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="loader-container">
        {isLoading ? (
          <div id="spinner">
            <img
              src="../imgs/loader.png"
              style={{ width: "100px", height: "100px" }}
              alt=""
            />
          </div>
        ) : (
          <div className="content">
            <div className="sticky">
              <div className="stick_icons">
                <NavLink
                  to="https://chat.whatsapp.com/Io5MxXmunWaCpUnoW3S0Gs"
                  target="_blank"
                >
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
            {/* <!-- Code for Hero section --> */}
            <section className="hero_section">
              <div className="container">
                <div className="main_hero_section">
                  <div className="left_hero_section">
                    <div>
                      <div>We</div>
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
                      The Entrepreneurship Development Cell (EDC) at JSSATE
                      Noida is a dynamic hub of support and empowerment for
                      budding entrepreneurs and ambitious professionals. We are
                      committed to fostering a culture of innovation through
                      impactful workshops, thought-provoking speaker sessions,
                      exciting business plan competitions, and a range of
                      transformative initiatives. Our team of experienced
                      mentors provides personalized guidance, access to funding
                      opportunities, and a robust network to help propel
                      aspiring entrepreneurs towards success. Join us at EDC
                      JSSATE Noida and embark on a journey that has the
                      potential to redefine your future!
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
                  <p>
                    We are team EDC (Entrepreneurship Development Cell) of JSS
                    Academy of Technical Education, Noida.
                  </p>
                </div>
                <div className="wwr_main">
                  <div className="flowchart">
                    {/* <img id="image" src="../imgs/wwr_main.png" alt="" media="(max-width:540px)"/> */}
                    <picture>
                      <source
                        media="(max-width:580px)"
                        srcset="../imgs/wwr_flowchart.png"
                      />
                      <img src="../imgs/wwr_main.png" alt="Flowers" />
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
                    {events.map((event, index) => {
                      return (
                        <EventCard
                          description={event.description}
                          imageLink={event.imageLink}
                          redirectLink={event.redirectLink}
                          redirectButtonName={event.redirectButtonName}
                          date={event.date}
                          time={event.time}
                          venue={event.venue}
                        ></EventCard>
                      );
                    })}
                    {/* <EventCard
                      eventImage="../imgs/EDC_GFG.png"
                      eventName="Speaker session with Mr. Sandeep Jain ( Founder of Geeks for Geeks )"
                      eventDate="Friday, 10 Nov 2023"
                      eventTime="03:45 PM - 04:45 PM "
                      eventVenue="MPH"
                      eventPageLink="/events/mr.sandeepjain"
                    ></EventCard>
                    <EventCard
                      eventImage="../imgs/EDC_Lakshya.png"
                      eventName="Speaker session with Mr. Sandeep Jain ( Founder of Geeks for Geeks )"
                      eventDate="Friday, 10 Nov 2023"
                      eventTime="03:45 PM - 04:45 PM "
                      eventVenue="MPH"
                      eventPageLink="/events/lakshya"
                    ></EventCard>
                    <EventCard
                      eventImage="../imgs/EDC_Stockgrow.png"
                      eventName="Speaker session with Mr. Sandeep Jain ( Founder of Geeks for Geeks )"
                      eventDate="Friday, 10 Nov 2023"
                      eventTime="03:45 PM - 04:45 PM "
                      eventVenue="MPH"
                      eventPageLink="/events/stockgrow"
                    ></EventCard>
                    <EventCard
                      eventImage="../imgs/EDC_GFG.png"
                      eventName="Speaker session with Mr. Sandeep Jain ( Founder of Geeks for Geeks )"
                      eventDate="Friday, 10 Nov 2023"
                      eventTime="03:45 PM - 04:45 PM "
                      eventVenue="MPH"
                      eventPageLink="/events/mr.sandeepjain"
                    ></EventCard>
                    <EventCard
                      eventImage="../imgs/EDC_Lakshya.png"
                      eventName="Speaker session with Mr. Sandeep Jain ( Founder of Geeks for Geeks )"
                      eventDate="Friday, 10 Nov 2023"
                      eventTime="03:45 PM - 04:45 PM "
                      eventVenue="MPH"
                      eventPageLink="/events/lakshya"
                    ></EventCard>
                    <EventCard
                      eventImage="../imgs/EDC_Stockgrow.png"
                      eventName="Speaker session with Mr. Sandeep Jain ( Founder of Geeks for Geeks )"
                      eventDate="Friday, 10 Nov 2023"
                      eventTime="03:45 PM - 04:45 PM "
                      eventVenue="MPH"
                      eventPageLink="/events/stockgrow"
                    ></EventCard> */}
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
                {/* <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}> */}
                <div className="props">
                  <div className="prop">
                    <img src="../imgs/prop3.svg" alt="Members" />
                    <h4 id="value1">
                      <CountUp
                        className="prop-count"
                        start={0}
                        end={100}
                        duration={10}
                        delay={0}
                      />
                    </h4>
                    <p>Members</p>
                  </div>

                  <div className="prop">
                    <img src="../imgs/prop4.svg" alt="Members" />
                    <h4 id="value2">
                      <CountUp
                        className="prop-count"
                        start={0}
                        end={100}
                        duration={10}
                        delay={0}
                      />
                    </h4>
                    <p>Startups</p>
                  </div>

                  <div className="prop">
                    <img src="../imgs/prop1.svg" alt="Members" />
                    <h4 id="value3">
                      <CountUp
                        className="prop-count"
                        start={0}
                        end={100}
                        duration={10}
                        delay={0}
                      />
                    </h4>
                    <p>Alumni</p>
                  </div>

                  <div className="prop">
                    <img src="../imgs/prop2.svg" alt="Members" />
                    <h4 id="value4">
                      <CountUp
                        className="prop-count"
                        start={0}
                        end={100}
                        duration={10}
                        delay={0}
                      />
                    </h4>
                    <p>Events</p>
                  </div>
                </div>
                {/* </ScrollTrigger> */}
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
                    <img src="../imgs/cloths/hanger.svg" alt="" />
                  </div>
                </div>
                <div className="clothes">
                  <div className="cloth_empty_divv"></div>
                  <div className="cloth_container">
                    <div className="cloth">
                      <img src="../imgs/cloths/Group 230.png" alt="" />
                    </div>
                    <div className="cloth"></div>
                    <div className="cloth">
                      <img src="../imgs/cloths/Group 231.png" alt="" />
                    </div>
                  </div>
                  <div className="cloth_empty_divv brand">
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
                  <div className="sponsor sponsor-left">
                    <img src="../imgs/OurCollaborations/19 1.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 2.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 3.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 4.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 5.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 6.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 7.png" alt="" />
                    {/* <img src="../imgs/OurCollaborations/19 8.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 9.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 10.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 11.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 12.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 13.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 14.png" alt="" /> */}
                  </div>
                  <div className="sponsor sponsor-right">
                    {/* <img src="../imgs/OurCollaborations/19 1.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 2.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 3.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 4.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 5.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 6.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 7.png" alt="" /> */}
                    <img src="../imgs/OurCollaborations/19 14.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 13.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 12.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 11.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 10.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 9.png" alt="" />
                    <img src="../imgs/OurCollaborations/19 8.png" alt="" />
                  </div>
                </div>
              </div>
            </section>
            <hr style={{ border: "1px solid grey" }} />
          </div>
        )}
      </div>
    </>
  );
};
