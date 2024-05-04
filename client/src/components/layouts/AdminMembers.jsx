import React, { useEffect, useState } from "react";
import { AdminSidebar } from "./AdminSidebar.jsx";
import { Button } from "../Button.jsx";
import { NavLink, Outlet } from "react-router-dom";
import "./AdminMembers.css";
import members from "../../pages/Json/Members.json";
import { Modal } from "../Modal.jsx";

export const AdminMembers = () => {
  // const [members, setMembers] = useState([]);

  // const getAllMembersData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8000/api/admin/members", {
  //       method: "GET",
  //     });

  //     const data = await response.json();
  //     setMembers(data);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllMembersData();
  // }, []);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const memberTableHeadings = ["Member Name", "Year", "Position", "Image URL", "Department", "LinkedIn", "Instagram","X"];

  return (
    <>
      <section className="admin-members-section">
        <AdminSidebar />
        <div className="admin-members">
          <div>
            <h4>EDC Members</h4>
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
              <th>Name</th>
              <th>Post</th>
              <th>Department</th>
              <th>Image</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            <hr />

            {members.map((curUser, index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{curUser.name}</td>
                  <td>{curUser.position}</td>
                  <td>{curUser.department.map((ele) => ele + ", ")}</td>
                  <td>{curUser.image}</td>

                  <td
                    onClick={() => {
                      setShowModal(true);
                      console.log(index);
                    }}
                  >
                    <Button text="Edit" class="edit button" />
                  </td>
                  <td>
                    <Button text="Delete" class="delete button" />
                  </td>
                </tr>
              );
            })}
          </table>
        </div>

        {showModal && <Modal onClick={closeModal} tableHeadings={memberTableHeadings} />}
      </section>
      <hr style={{border:"1px solid grey" }}/>
    </>
  );
};
