import React from "react";
import "./Modal.css"

export const Modal = (props) => {

    const headings = props.tableHeadings;
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal">
      <div className="modal-container">
        <button
          onClick={props.onClick}
        >
          &times;
        </button>
        {headings.map((heading) => {
            return(
                <>
                <input type="text" placeholder={heading} />
                </>
            )
        })}
        {/* <input type="text" placeholder="MemberName" />
        <input type="text" placeholder="Year" />
        <label htmlFor="position">Position:</label>
        <input type="text" placeholder="Image URL" />
        <label htmlFor="position">Department</label>
        <input type="text" placeholder="LinkedIn URL" />
        <input type="text" placeholder="Instagram URL" />
        <input type="text" placeholder="X URL" /> */}
      </div>
      </div>
    </>
  );
};
