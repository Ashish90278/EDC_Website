import React, { useEffect, useState } from "react";
import { AdminSidebar } from "./AdminSidebar.jsx";
import { Button } from "../Button.jsx";
import { NavLink, Outlet } from "react-router-dom";
import "./AdminMembers.css";

export const AdminMembers = () => {
  const [members, setMembers] = useState([]);

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

  return (
    <>
      <section className="admin-members-section">
        <AdminSidebar />
        <div className="admin-members">
          <div>
            <h4>EDC Members</h4>
            <Button text="Add" class="add button" />
          </div>
          {/* <hr /> */}
          {/* <Button text="Update" color="black" backgroundColor="red" padding="10px 20px" /> */}
          <table>
            <tr>
              <th>Name</th>
              <th>Post</th>
              <th>LinkedIn</th>
              <th>Twitter</th>
              <th>Instagram</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            <hr />

            {members.map((curUser, index) => {
              return (
                <tr key={index}>
                  <td>{curUser.username}</td>
                  <td>{curUser.email}</td>
                  <td>{curUser.phone}</td>
                  <td>{curUser.isAdmin}</td>

                  <Button text="Edit" class="edit button" onClick="edit()" />
                  <Button
                    text="Delete"
                    class="delete button"
                    // onClick={delete curUser._id}
                  />
                </tr>
              );
            })}
          </table>
        </div>
        {/* <div className="admin-users-heading">
        </div>
        <div className="admin-users">
          
        </div> */}
      </section>
    </>
  );
};
