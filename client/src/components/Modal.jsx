import React from "react";
import { useState, useEffect } from "react";
import "./Modal.css";
import { Button } from "./Button.jsx";

export const Modal = (props) => {
  const headings = props.tableHeadings;
  const button = props.button;
  const page = props.page;
  const data = props.data;
  const [userData, setUserData] = useState({});
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

  const handleModalData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  console.log(userData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/api/admin/${page}/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      setUserData();
      if (response.ok) {
        setUserData({});
        alert(`${page} Added Successfully`);
      }
    } catch (error) {
      console.log({page}, error);
    }
  };

  const handleUpdate = async() => {
    try {
      const response = await fetch(`http://localhost:8000/api/admin/${page}/update/${data._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal">
        <form
          onSubmit={ buttonClick(button) ? handleUpdate  : handleSubmit }
          className="modal-container"
        >
          <button onClick={props.onClick}>&times;</button>
          {headings.map((heading) => {
            return (
              <>
                <input
                  key={heading}
                  name={heading}
                  type="text"
                  placeholder={heading}
                  defaultValue={ buttonClick(button) ? data[heading] : userData.heading }
                  onChange={handleModalData}
                />
              </>
            );
          })}
          {/* <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleModalData} /> */}
          <span>
            <Button text="Update" class="submit button" />
          </span>
        </form>
      </div>
    </>
  );
};
