import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../Button.jsx";
import { Modal } from "../Modal.jsx";
import { useAuth } from "../../store/Auth.jsx";
import "./AdminStudentsRegister.css";

export const AdminStudentsRegister = () => {
  const [registrations, setRegistrations] = useState([]);
  const [userEdit, setUserEdit] = useState({});
  const [buttonClick, setButtonClick] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { token } = useAuth();

  const studentRegisterTableHeadings = [
    "username",
    "email",
    "branch",
    "year",
    "admissionNo",
  ];

  const getAllRegistrationData = async () => {
    try {
      const response = await fetch(
        "https://edc-website-server-api.onrender.com/api/admin/registrations",
        {
          mode: "cors",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
          mode: "cors",
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        getAllRegistrationData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    getAllRegistrationData();
  };

  useEffect(() => {
    getAllRegistrationData();
  }, []);

  return (
    <>
      <div className="admin-registrations">
        <div>
          <h4>Registered Students</h4>
          <span
            onClick={() => {
              setShowModal(true);
            }}
          ></span>
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
    </>
  );
};
