import React, { useEffect, useState } from "react";
import { AdminSidebar } from "./AdminSidebar.jsx";
import { Button } from "../Button.jsx";
import { NavLink, Outlet } from "react-router-dom";
import "./AdminEvents.css";
import { Modal } from "../Modal.jsx";

export const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [userEdit, setUserEdit] = useState({});
  const [buttonClick, setButtonClick] = useState("");
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    getAllEventsData();
  };

  const getAllEventsData = async () => {
    try {
      const response = await fetch("https://edc-website-server-api.onrender.com/api/admin/events", {
        mode: 'no-cors',
        method: "GET",
      });

      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEvent = async (id) => {
    try {
      const response = await fetch(
        `https://edc-website-server-api.onrender.com/api/admin/events/delete/${id}`,
        {
          mode: 'no-cors',
          method: "DELETE",
        }
      );
      if (response.ok) {
        getAllEventsData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEventsData();
  }, []);

  const eventsTableHeadings = [
    "eventName",
    "description",
    "date",
    "time",
    "venue",
  ];

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
                setButtonClick("add");
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
            {!events[0] ? (
              <article className="message">No Event Found</article>
            ) : (
              events.map((curUser, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{curUser.eventName}</td>
                    <td>{curUser.description}</td>
                    <td>{curUser.date}</td>
                    <td>{curUser.time}</td>
                    <td>{curUser.venue}</td>

                    <td
                      onClick={() => {
                        setShowModal(true);
                        setUserEdit(curUser);
                        setButtonClick("edit");
                      }}
                    >
                      <Button text="Edit" class="edit button" />
                    </td>
                    <td onClick={() => deleteEvent(curUser._id)}>
                      <Button text="Delete" class="delete button" />
                    </td>
                  </tr>
                );
              })
            )}
          </table>
        </div>
        {showModal && (
          <Modal
            onClick={closeModal}
            tableHeadings={eventsTableHeadings}
            page="events"
            data={userEdit}
            button={buttonClick}
          />
        )}
      </section>
      <hr style={{ border: "1px solid grey" }} />
    </>
  );
};
