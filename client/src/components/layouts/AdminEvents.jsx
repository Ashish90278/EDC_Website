import React, { useEffect, useState } from "react";
import { AdminSidebar } from "./AdminSidebar.jsx";
import { Button } from "../Button.jsx";
import { NavLink, Outlet } from "react-router-dom";
import "./AdminEvents.css";
import { Modal } from "../Modal.jsx";

export const AdminEvents = () => {
  const [events, setEvents] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const getAllEventsData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/admin/events", {
        method: "GET",
      });

      const data = await response.json();
      setEvents(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEventsData();
  }, []);


  const eventsTableHeadings = ["Event Name", "Description", "Date", "Time", "Venue"];

  return (
    <>
      <section className="admin-events-section">
        <AdminSidebar />
        <div className="admin-events">
          <div>
            <h4>Events</h4>
            <span
              onClick={() => {
                setShowModal(true);
              }}
            >
              <Button text="Add" class="add button" />
            </span>
          </div>
          {/* <hr /> */}
          {/* <Button text="Update" color="black" backgroundColor="red" padding="10px 20px" /> */}
          <table>
            <tr>
              <th>S No.</th>
              <th>Event Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Time</th>
              <th>Venue</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            <hr />

            {/* {events.map((curEvent, index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{curEvent.eventName}</td>
                  <td>{curEvent.description}</td>
                  <td>{curEvent.date}</td>
                  <td>{curEvent.time}</td>
                  <td>{curEvent.venue}</td>

                  <td
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    <Button text="Edit" class="edit button" />
                  </td>
                  <td>
                    <Button text="Delete" class="delete button" />
                  </td>
                </tr>
              );
            })} */}
          </table>
        </div>
        {showModal && <Modal onClick={closeModal} tableHeadings={eventsTableHeadings} />}
      </section>
      <hr style={{border:"1px solid grey" }}/>
    </>
  );
};
