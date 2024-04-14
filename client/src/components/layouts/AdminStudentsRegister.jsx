import { NavLink, Outlet } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar.jsx";
import { useEffect, useState } from "react";
import { Button } from "../Button.jsx";
import "./AdminStudentsRegister.css";

export const AdminStudentsRegister = () => {
  const [registrations, setRegistrations] = useState([]);

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

  return (
    <>
      <section className="admin-registrations-section">
        <AdminSidebar />
        <div className="admin-registrations">
          <div>
            <h4>Registered Students</h4>
            <Button text="Add" class="add button" />
          </div>

          <table>
            <tr>
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
                  <td>{curUser.username}</td>
                  <td>{curUser.email}</td>
                  <td>{curUser.branch}</td>
                  <td>{curUser.year}</td>
                  <td>{curUser.admissionNo}</td>
                  <Button text="Edit" class="edit button" />

                  <Button text="Delete" class="delete button" />
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
      {/* <Outlet/> */}
    </>
  );
};
