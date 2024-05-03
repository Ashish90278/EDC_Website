import "./MemberCard.css";
import { NavLink } from "react-router-dom";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IconContext } from "react-icons";

export const MemberCard = (props) => {
  return (
    <>
      <div className="memberContainer">
        <div className="memberCard">
          <div
            className="front"
            style={{
              backgroundImage: `url('https://ik.imagekit.io/lbqkuzbjo/memberImages/${props.memberImage}')`,
            }}
          >
            <div className="designation">
              <h3>{props.designation}</h3>
              <p>{props.memberName}</p>
            </div>
          </div>
          <div
            className="back"
            style={{
              backgroundImage: `url('https://ik.imagekit.io/lbqkuzbjo/memberImages/${props.memberImage}')`,
            }}
          >
            <div className="overlay">
              <NavLink to={props.linkedIn} target="_blank">
                <FaLinkedin />
              </NavLink>
              <NavLink to={props.instagram} target="_blank">
                <FaInstagram />
              </NavLink>
              <NavLink to={props.x} target="_blank">
                <RiTwitterXFill />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="senior">
        <div class="div1">
          <div class="memberContainer">
            <div class="memberCard">
              <div class="front">
              </div>
              <div class="back">
                <div class="overlay">
                  <h1>Culture</h1>
                  <p>
                    The important characteristics of Indian Culture are
                    civilized communication, beliefs, values, etiquette, and
                    rituals. India is well known for its 'Unity in Diversity'
                    across the world. That means India is a diverse nation where
                    many religious people live together peacefully having their
                    own different cultures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="memberContainer">
            <div class="memberCard">
              <div
                class="front"
                style=" background-image: url(adv.jpg);background-size:100%;"
              ></div>
              <div
                class="back"
                style=" background-image: url(adv.jpg);background-size:100%;"
              >
                <div class="overlay">
                  <h1>Adventure</h1>
                  <p>
                    Adventure tourism in India involves air-based, water-based,
                    and land-based adventurous activities . for example - bungee
                    jumping
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="memberContainer">
            <div class="memberCard">
              <div
                class="front"
                style=" background-image: url(nature.jpg);background-size:100%;"
              ></div>
              <div
                class="back"
                style=" background-image: url(nature.jpg);background-size:100%;"
              >
                <div class="overlay">
                  <h1>Nature</h1>
                  <p>
                    There are many rivers like Ganga, Jamuna, Narmada, Godavari,
                    Brahmaputra etc. to enhance the natural beauty in the
                    country of India, which add to the natural beauty. The
                    country also has many waterfalls, snowy places which add to
                    the natural beauty even more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
