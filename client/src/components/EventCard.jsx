import "./EventCard.css";
import { NavLink } from "react-router-dom";

import React from "react";

export const EventCard = (props) => {
  return (
    <>
      {/* <!-- cards start --> */}
      <div className="card">
        <div className="card-body">
          <NavLink to={`${props.eventPageLink}`}>
            <img src={`${props.eventImage}`} alt="" />
          </NavLink>
          <h4>
            {props.eventName}
          </h4>
          <div className="card-info">
            <ul>
              <li>
                <div>
                  <img src="../imgs/calender.png" alt="" />
                  <p>{props.eventDate}</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="../imgs/clock.png" alt="" />
                  <p>{props.eventTime}</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="../imgs/location.png" alt="" />
                  <p>{props.eventVenue}</p>
                </div>
                <button id="event_register">
                  <NavLink to={`${props.eventPageLink}`}>Read More</NavLink>
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
