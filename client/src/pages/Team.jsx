import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Team.css";

export const Team = () => {
  const [img, setImg] = useState("")


  const uploadImage = (e) => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "images_preset");
    data.append("cloud_name", "ashish0518");
    console.log(data)

    fetch("https://api.cloudinary.com/v1_1/ashish0518/image/upload", {
      method : "post",
      body : data
    })
    .then((res) => {res.json()})
    .then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.files[0];
    // name= String(name)
    console.log(name.name);

    setImg(name);
    // console.log(img);
  }
  return (
    <>
      <div className="team">
        <form encType="multipart/form-data">
        <input type="file" onChange={handleInput}/>
        <button onClick={uploadImage}>Upload</button>
        </form>
      </div>
    </>
  );
};
