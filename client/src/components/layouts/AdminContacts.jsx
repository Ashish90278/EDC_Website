import React, { useEffect, useState } from "react";
import { Button } from "../Button.jsx";
import { NavLink } from "react-router-dom";
import { Modal } from "../Modal.jsx";
import { useAuth } from "../../store/Auth.jsx";
import "./AdminContacts.css";

export const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [userEdit, setUserEdit] = useState({});
  const [buttonClick, setButtonClick] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { token } = useAuth();

  const contactsTableHeadings = ["username", "email", "subject", "message"];

  const getAllContactsData = async () => {
    try {
      const response = await fetch(
        "https://edc-website-server-api.onrender.com/api/admin/contacts",
        {
          mode: "cors",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
          mode: "cors",
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        getAllContactsData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    getAllContactsData();
  };

  useEffect(() => {
    getAllContactsData();
  }, []);

  return (
    <>
      <div className="admin-contacts">
        <div>
          <h4>Contacts</h4>
          <span
            onClick={() => {
              setShowModal(true);
              setButtonClick("add");
            }}
          ></span>
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
                  <td>{index + 1}.</td>
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
    </>
  );
};
