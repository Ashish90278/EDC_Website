import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { AdminSidebar } from "./AdminSidebar.jsx";
import { Button } from "../Button.jsx";
import "./AdminUsers.css";
import { Modal } from "../Modal.jsx";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

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

  

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/admin/users", {
        method: "GET",
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  const usersTableHeadings = ["Username", "Email", "Phone", "isAdmin"]

  return (
    <>
      <section className="admin-users-section">
        <AdminSidebar />
        <div className="admin-users">
          <div>
            <h4>All Users</h4>
            {/* <span
              onClick={() => {
                setShowModal(true);
              }}
            >
              <Button text="Add" class="add button" />
            </span> */}
          </div>
          {/* <hr /> */}
          {/* <Button text="Update" color="black" backgroundColor="red" padding="10px 20px" /> */}
          <table>
            <tr>
              <th>S No.</th>
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
                  <td>{index+1}</td>
                  <td>{curUser.username}</td>
                  <td>{curUser.email}</td>
                  <td>{curUser.phone}</td>
                  <td>{curUser.isAdmin}</td>

                  <td
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    <Button text="Edit" class="edit button" />
                  </td>
                  <td>
                    <Button text="Delete" class="delete button" />
                  </td>
                </tr>
                // <hr />
              );
            })}
          </table>
        </div>
        {showModal && <Modal onClick={closeModal} tableHeadings={usersTableHeadings} />}
      </section>
      <hr style={{border:"1px solid grey" }}/>
    </>
  );
};
