import { NavLink } from "react-router-dom";
import "./Events.css";
import { useState, useEffect } from "react";
import { EventCard } from "../components/EventCard";

export const Events = () => {
  const [events, setEvents] = useState([]);

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
    getAllEventsData();
  }, [])

  return (
    <>
      <div className="container">
        <section className="events">
          {events.map((event, index) => {
            // console.log(event);
            return (
              <EventCard
                eventImage="../imgs/EDC_GFG.png"
                eventName="Speaker session with Mr. Sandeep Jain ( Founder of Geeks for Geeks )"
                eventDate="Friday, 10 Nov 2023"
                eventTime="03:45 PM - 04:45 PM "
                eventVenue="MPH"
                eventPageLink="/events/mr.sandeepjain"
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
            eventTime="03:45 PM - 04:45 PM"
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
        </section>
      </div>
      <hr style={{ border: "1px solid grey" }} />
    </>
  );
};
