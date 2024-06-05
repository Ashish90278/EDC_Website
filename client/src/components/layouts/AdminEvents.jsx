import React, { useEffect, useState } from "react";
import { Button } from "../Button.jsx";
import { NavLink } from "react-router-dom";
import { Modal } from "../Modal.jsx";
import { useAuth } from "../../store/Auth.jsx";
import "./AdminEvents.css";

export const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [userEdit, setUserEdit] = useState({});
  const [buttonClick, setButtonClick] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { token } = useAuth();

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
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
    </>
  );
};
