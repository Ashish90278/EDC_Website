import { NavLink, Outlet } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar.jsx";
import { useEffect, useState } from "react";
import { Button } from "../Button.jsx";
import "./AdminStudentsRegister.css";
import { Modal } from "../Modal.jsx";

export const AdminStudentsRegister = () => {
  const [registrations, setRegistrations] = useState([]);
  const [userEdit, setUserEdit] = useState({});
  const [buttonClick, setButtonClick] = useState("");
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const getAllRegistrationData = async () => {
    try {
      const response = await fetch(
        "https://edc-website-server-api.onrender.com/api/admin/registrations",
        {
          mode: 'cors',
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      setRegistrations(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRegistration = async (id) => {
    try {
      const response = await fetch(
        `https://edc-website-server-api.onrender.com/api/admin/registrations/delete/${id}`,
        {
          mode: 'cors',
          method: "DELETE",
        }
      );
      console.log("hii");
      if (response.ok) {
        getAllRegistrationData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllRegistrationData();
  }, []);

  const studentRegisterTableHeadings = [
    "username",
    "email",
    "branch",
    "year",
    "admissionNo",
  ];

  return (
    <>
      <section className="admin-registrations-section">
        <AdminSidebar />
        <div className="admin-registrations">
          <div>
            <h4>Registered Students</h4>
            <span
              onClick={() => {
                setShowModal(true);
              }}
            >
              {/* <Button text="Add" class="add button" /> */}
            </span>
          </div>

          <table>
            <tr>
              <th>S No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Branch</th>
              <th>Year</th>
              <th>Addmission No.</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            <hr />
            {!registrations[0] ? (
              <article className="message">No Register Students Found</article>
            ) : (
              registrations.map((curUser, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}.</td>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.branch}</td>
                    <td>{curUser.year}</td>
                    <td>{curUser.admissionNo}</td>
                    <td
                      onClick={() => {
                        setShowModal(true);
                        setUserEdit(curUser);
                        setButtonClick("edit");
                      }}
                    >
                      <Button text="Edit" class="edit button" />
                    </td>
                    <td onClick={() => deleteRegistration(curUser._id)}>
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
            tableHeadings={studentRegisterTableHeadings}
            page="registrations"
            data={userEdit}
            button={buttonClick}
          />
        )}
      </section>
      {/* <Outlet/> */}
      <hr style={{ border: "1px solid grey" }} />
    </>
  );
};
