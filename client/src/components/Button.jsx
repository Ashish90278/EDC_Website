import React from 'react';
import "./Button.css";

export const Button = (props) => {
  return (
    <>
    <button type="submit" className = {`${props.class}` } onClick = {props.onClick} >{props.text}</button>
    </>
  )
}
