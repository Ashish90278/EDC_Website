import React, { useEffect, useState } from "react";
import { AdminSidebar } from "./AdminSidebar.jsx";
import { Button } from "../Button.jsx";
import { NavLink, Outlet } from "react-router-dom";
import "./AdminContacts.css";
import { Modal } from "../Modal.jsx";

export const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [userEdit, setUserEdit] = useState({});
  const [buttonClick, setButtonClick] = useState("");
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    getAllContactsData();
  };

  const getAllContactsData = async () => {
    try {
      const response = await fetch("https://edc-website-server-api.onrender.com/api/admin/contacts", {
        mode: 'cors',
        method: "GET",
      });

      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEvent = async (id) => {
    try {
      const response = await fetch(
        `https://edc-website-server-api.onrender.com/api/admin/contacts/delete/${id}`,
        {
          mode: 'cors',
          method: "DELETE",
        }
      );
      if (response.ok) {
        getAllContactsData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContactsData();
  }, []);

  const contactsTableHeadings = [
    "username",
    "email",
    "subject",
    "message"
  ];

  return (
    <>
      <section className="admin-contacts-section">
        <AdminSidebar />
        <div className="admin-contacts">
          <div>
            <h4>Contacts</h4>
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
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            <hr />
            {!contacts[0] ? (
              <article className="message">No Contact Found</article>
            ) : (
              contacts.map((curUser, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.subject}</td>
                    <td>{curUser.message}</td>
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
            tableHeadings={contactsTableHeadings}
            page="contacts"
            data={userEdit}
            button={buttonClick}
          />
        )}
      </section>
      <hr style={{ border: "1px solid grey" }} />
    </>
  );
};
