import React from "react";
import UserCard from "../components/Userlist";
function Chatlist() {
  return (
    <div className="w-100">
      <div
        className=" h-100"
        style={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", width: "400px" }}>
        <UserCard/>
      </div>
    </div>
  );
}

export default Chatlist;
