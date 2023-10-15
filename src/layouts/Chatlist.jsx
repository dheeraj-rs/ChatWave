import React from "react";
import Userlist from "../components/Userlist";
function Chatlist() {
  return (
    <div
      className=""
      style={{
        borderRight: "2px solid rgba(0, 0, 0, 0.10)",
        width: "500px",
        height: "100vh",
      }}
    >
      <Userlist />
    </div>
  );
}

export default Chatlist;
