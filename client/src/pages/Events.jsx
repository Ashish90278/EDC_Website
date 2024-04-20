import { NavLink } from "react-router-dom";
import "./Events.css";
import { EventCard } from "../components/EventCard";

export const Events = () => {
  return (
    <>
      <div className="container">
        <section className="events">
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
        </section>
      </div>
      <hr />
      
    </>
  );
};
