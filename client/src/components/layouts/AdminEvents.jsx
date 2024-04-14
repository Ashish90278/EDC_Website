import React from "react";
import { AdminSidebar } from "./AdminSidebar.jsx";

export const AdminEvents = () => {
  return (
    <>
      <section className="admin-users-section">
        <AdminSidebar />
        <div className="admin-users">
          <h1>All Users</h1>

          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* {users.map((curUser, index) => {
                return (
                  <tr key={index}>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.phone}</td>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
                );
              })} */}
            </tbody>
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
