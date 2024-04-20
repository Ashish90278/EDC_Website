import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { AdminSidebar } from "./AdminSidebar.jsx";
import { Button } from "../Button.jsx";
import "./AdminUsers.css";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  // const edit = async() => {
  //   try {

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const delete = async(id) => {
  //   try {
  //     const response = await fetch("http://localhost:8000/api/admin/users", {
  //       method: "DELETE",
  //     });
  //     console.log(id);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const openModal = () => {
  //   const modal = document.getElementById("myModal");
  //   console.log(modal);
  //   modal.style.display = "block";
  // };
  // const closeModal = () => {
  //   const modal = document.querySelector(".modal");

  //   modal.style.display = "none";
  // };
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/admin/users", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <AdminSidebar />
        <div className="admin-users">
          <div>
            <h4>All Users</h4>
            <Button text="Add" class="add button" />
          </div>
          {/* <hr /> */}
          {/* <Button text="Update" color="black" backgroundColor="red" padding="10px 20px" /> */}
          <table>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Admin</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            <hr />

            {users.map((curUser, index) => {
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
                    onClick={delete curUser._id}
                  />
                </tr>
                // <hr />
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
