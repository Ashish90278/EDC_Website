import "./BlogCard.css";
import React from "react";
import { NavLink } from "react-router-dom";

export const BlogCard = (props) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />
      <div className="blogCard">
        <div className="blogImg">
          <NavLink to={`${props.blogLink}`} target="_blank"><img src={`https://ik.imagekit.io/lbqkuzbjo/blogs/${props.blogImage}`} alt="" /></NavLink>
        </div>
        <div className="blogInfo">
          <div className="blogHead">
            <p>{props.blogTopic}</p>
          </div>
          <div className="cellTag">
            <div className="logoTag">
              <img src="../imgs/EDC_logo.png" alt="" />
            </div>
            <div className="cellText">
              <NavLink to="https://jssaten.ac.in" target="_blank"><h6>EDC JSSATEN</h6></NavLink>
              <p>Creating Job Creators</p>
            </div>
            <div className="cellButton">
              <i className="fa-regular fa-heart"></i>
            </div>
          </div>
        </div>
        {/* <hr /> */}
      </div>
    </>
  );
};
