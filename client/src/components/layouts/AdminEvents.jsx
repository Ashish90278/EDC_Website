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
  
  const eventsTableHeadings = [
    "description",
    "imageLink",
    "redirectLink",
    "redirectButtonName",
    "date",
    "time",
    "venue",
  ];


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

  const deleteEvent = async (id) => {
    try {
      const response = await fetch(
        `https://edc-website-server-api.onrender.com/api/admin/events/delete/${id}`,
        {
          mode: "cors",
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

  const closeModal = () => {
    setShowModal(false);
    getAllEventsData();
  };
  
  useEffect(() => {
    getAllEventsData();
  }, []);
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
          <table>
            <tr>
              <th>S No.</th>
              <th>Description</th>
              <th>ImageLink</th>
              <th>RedirectLink</th>
              <th>RedirectButtonName</th>
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
                    <td>{index + 1}.</td>
                    <td>{curUser.description}</td>
                    <td>{curUser.imageLink}</td>
                    <td>{curUser.redirectLink}</td>
                    <td>{curUser.redirectButtonName}</td>
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
