import "./EventCard.css";
import { NavLink } from "react-router-dom";

import React from "react";

export const EventCard = (props) => {
  return (
    <>
      {/* <!-- cards start --> */}
      <div className="card">
        <div className="card-body">
          <NavLink to={`${props.redirectLink}`}>
            <img src={`${props.imageLink}`} alt="" />
          </NavLink>
          <h4>
            {props.description}
          </h4>
          <div className="card-info">
            <ul>
              <li>
                <div>
                  <img src="../imgs/calender.png" alt="" />
                  <p>{props.date}</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="../imgs/clock.png" alt="" />
                  <p>{props.time}</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="../imgs/location.png" alt="" />
                  <p>{props.venue}</p>
                </div>
                <button id="event_register">
                  <NavLink to={`${props.redirectLink}`}>{props.redirectButtonName}</NavLink>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- card end --> */}
    </>
  );
};
