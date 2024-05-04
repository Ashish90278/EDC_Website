import { NavLink, Outlet } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar.jsx";
import { useEffect, useState } from "react";
import { Button } from "../Button.jsx";
import "./AdminStudentsRegister.css";
import { Modal } from "../Modal.jsx";

export const AdminStudentsRegister = () => {
  const [registrations, setRegistrations] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const getAllRegistrationData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/admin/registrations",
        {
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

  useEffect(() => {
    getAllRegistrationData();
  }, []);

  
  const studentRegisterTableHeadings = ["Name", "Email", "Branch", "Year", "Addmission No."];

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
              <Button text="Add" class="add button" />
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
            {registrations.map((curUser, index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{curUser.username}</td>
                  <td>{curUser.email}</td>
                  <td>{curUser.branch}</td>
                  <td>{curUser.year}</td>
                  <td>{curUser.admissionNo}</td>
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
              );
            })}
          </table>
        </div>

        {showModal && <Modal onClick={closeModal} tableHeadings={studentRegisterTableHeadings} />}

      </section>
      {/* <Outlet/> */}
      <hr style={{border:"1px solid grey" }}/>
    </>
  );
};
