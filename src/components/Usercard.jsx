import React from 'react'
import Image from "react-bootstrap/Image";
import logo from "../assets/user.png";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";

function UserCard() {
  return (
    <div
    className="rounded-3 w-100 my-3 px-3 py-2  d-flex align-items-center"
    style={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}
  >
    <Image
      src={logo}
      alt="Logo"
      fluid
      roundedCircle
      style={{
        width: "60px",
        height: "60px",
        backgroundColor: "darkslateblue",
      }}
    />
    <span className="px-3">
      <h1 className="fs-5 lh-sm">Ariel Martinez</h1>
      <p className="fs-6 lh-sm">Online</p>
    </span>
    <span className="flex-grow-1"></span>
    <MoreHorizSharpIcon />
  </div>
  )
}

export default UserCard