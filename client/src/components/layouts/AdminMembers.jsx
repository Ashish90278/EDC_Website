import React, { useEffect, useState } from "react";
import { Button } from "../Button.jsx";
import { NavLink } from "react-router-dom";
import "./AdminMembers.css";
import { useAuth } from "../../store/Auth.jsx";
import { Modal } from "../Modal.jsx";

export const AdminMembers = () => {
  const [members, setMembers] = useState([]);
  const [userEdit, setUserEdit] = useState({});
  const [buttonClick, setButtonClick] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { token } = useAuth();

  const memberTableHeadings = [
    "name",
    "year",
    "post",
    "department",
    "image",
    "linkedIn",
    "instagram",
    "x",
  ];

  const getAllMembersData = async () => {
    try {
      const response = await fetch(
        "https://edc-website-server-api.onrender.com/api/admin/members",
        {
          mode: "cors",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMember = async (id) => {
    try {
      const response = await fetch(
        `https://edc-website-server-api.onrender.com/api/admin/members/delete/${id}`,
        {
          mode: "cors",
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        getAllMembersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    getAllMembersData();
  };

  useEffect(() => {
    getAllMembersData();
  }, []);

  return (
    <>
      <div className="admin-members">
        <div>
          <h4>EDC Members</h4>
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
            <th>Post</th>
            <th>Department</th>
            <th>Image</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          <hr />

          {!members[0] ? (
            <article className="message">No Member Found</article>
          ) : (
            members.map((curUser, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{curUser.name}</td>
                  <td>{curUser.post}</td>
                  <td>{curUser.department.map((e) => e.label + " ")}</td>
                  <td>{curUser.image}</td>

                  <td
                    onClick={() => {
                      setShowModal(true);
                      setButtonClick("edit");
                      setUserEdit(curUser);
                    }}
                  >
                    <Button text="Edit" class="edit button" />
                  </td>
                  <td onClick={() => deleteMember(curUser._id)}>
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
          tableHeadings={memberTableHeadings}
          page="members"
          data={userEdit}
          button={buttonClick}
        />
      )}
    </>
  );
};
