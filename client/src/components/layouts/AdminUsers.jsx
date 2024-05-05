import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { AdminSidebar } from "./AdminSidebar.jsx";
import { Button } from "../Button.jsx";
import "./AdminUsers.css";
import { Modal } from "../Modal.jsx";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [userEdit, setUserEdit] = useState({});
  const [buttonClick, setButtonClick] = useState("");
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
  //     const response = await fetch("https://edc-website-server-api.onrender.com/api/admin/users", {
  //       mode: 'no-cors',
  //       method: "DELETE",
  //     });
  //     console.log(id);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const getAllUsersData = async () => {
    try {
      const response = await fetch("https://edc-website-server-api.onrender.com/api/admin/users", {
        mode: 'no-cors',
        method: "GET",
      });
      const data = await response;
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `https://edc-website-server-api.onrender.com/api/admin/users/delete/${id}`,
        {
          mode: 'no-cors',
          method: "DELETE",
        }
      );
      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUsersData();
  }, []);

  const usersTableHeadings = ["username", "email", "phone", "isAdmin"];

  return (
    <>
      <section className="admin-users-section">
        <AdminSidebar />
        <div className="admin-users">
          <div>
            <h4>All Users</h4>
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

            {!users[0] ? (
              <article className="message">No User Found</article>
            ) : (
              users.map((curUser, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.phone}</td>
                    <td>{curUser.isAdmin ? "Admin" : "--"}</td>

                    <td
                      onClick={() => {
                        setUserEdit(curUser);
                        setButtonClick("edit");
                        setShowModal(true);
                      }}
                    >
                      <Button text="Edit" class="edit button" />
                    </td>
                    <td onClick={() => deleteUser(curUser._id)}>
                      <Button text="Delete" class="delete button" />
                    </td>
                  </tr>
                  // <hr />
                );
              })
            )}
          </table>
        </div>
        {showModal && (
          <Modal
            onClick={closeModal}
            tableHeadings={usersTableHeadings}
            page="users"
            data={userEdit}
            button={buttonClick}
          />
        )}
      </section>
      <hr style={{ border: "1px solid grey" }} />
    </>
  );
};
