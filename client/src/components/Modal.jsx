import React from "react";
import { useState, useEffect } from "react";
import "./Modal.css";
import { Button } from "./Button.jsx";
import Select from "react-select";

export const Modal = (props) => {
  const [userData, setUserData] = useState({});

  const headings = props.tableHeadings;
  const button = props.button;
  const page = props.page;
  const data = props.data;

  const options = [
    { value: 'core', label: 'Core' },
    { value: 'technical', label: 'Technical' },
    { value: 'outreach', label: 'Outreach' },
    { value: 'operations', label: 'Operations' },
    { value: 'content', label: 'Content' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'design', label: 'Design' }
  ]

  const recentPage = (page) => {
    if (page === "members") {
      return true;
    } else {
      return false;
    }
  };

  const buttonClick = (button) => {
    if (button === "edit") {
      return true;
    } else {
      return false;
    }
  };

  const isEmail = (email) => {
    if (email === "email") {
      return true;
    } else {
      return false;
    }
  };


  const handleModalData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSelectData = (change) => {
    setUserData({
      ...userData,
      department: change,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://edc-website-server-api.onrender.com/api/admin/${page}/add`,
        {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      // setUserData();
      if (response.ok) {
        setUserData({});
        alert(`${page} Added Successfully`);
      }
    } catch (error) {
      console.log({ page }, error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://edc-website-server-api.onrender.com/api/admin/${page}/update/${data._id}`,
        {
          mode: "cors",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        setUserData({});
        alert(`${page} Updated Successfully`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal">
        <form
          onSubmit={buttonClick(button) ? handleUpdate : handleSubmit}
          className="modal-container"
        >
          <button onClick={props.onClick}>&times;</button>
          {headings.map((heading) => {
            // console.log(data)
            return (
              <>
                <div className="modal-input">
                  <label htmlFor={heading}>{heading} :</label>
                  {heading === "department" ? (
                    <Select
                      // defaultValue={data[heading]}
                      defaultValue={
                        buttonClick(button)
                          ? data[heading]
                          : userData.heading
                      }
                      isMulti
                      name="department"
                      options={options}
                      className="sel"
                      classNamePrefix="select"
                      onChange={(change) => handleSelectData(change)}
                    />
                  ) : (
                    <input
                      key={heading}
                      name={heading}
                      type="text"
                      placeholder={heading}
                      defaultValue={
                        buttonClick(button)
                          ? data[heading]
                          : userData.heading
                      }
                      onChange={handleModalData}
                    />
                  )}
                </div>
              </>
            );
          })}
          <div>
            <Button
              text={buttonClick(button) ? "Update" : "Add"}
              class="submit button"
            />
          </div>
        </form>
      </div>
    </>
  );
};
