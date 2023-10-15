import React from "react";
import Image from "react-bootstrap/Image";
import logo from "../assets/images/profile.png";
import search from "../assets/icons/search.png";
import user from "../assets/icons/user.png";
import more from "../assets/icons/more.png";
import send from "../assets/icons/send.png";
import attach from "../assets/icons/attach.png";
function Chatpage() {
  return (
    <div className="w-100 d-flex flex-column maindiv">
      <div
        className=" d-flex align-items-center px-3 py-2"
        style={{ height: "80px", boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.10)" }}
      >
        <Image
          src={logo}
          alt="Logo"
          fluid
          roundedCircle
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "darkslateblue",
          }}
        />
        <span className="px-3">
          <h1 className="fs-5 lh-sm">Ariel Martinez</h1>
          <p className="fs-6 lh-sm text-success">Available</p>
        </span>
        <span className="flex-grow-1"></span>
        <div className="d-flex gap-5">
          <img src={search} alt="" style={{ width: "20px", height: "20px" }} />
          <img src={user} alt="" style={{ width: "20px", height: "20px" }} />
          <img src={more} alt="" style={{ width: "25px", height: "25px" }} />
        </div>
      </div>

      <div
        className=" d-flex flex-column p-4 gap-1 overflow-x-scroll"
        style={{ height: "calc(100vh - 160px)" }}
      >
        <p className="align-self-start bg-body-secondary p-3 rounded-3">
          Hai 
        </p>
        <p
          className="align-self-end p-3 rounded-3"
          style={{ backgroundColor: "#038FFF", color: "white" }}
        >
          Hello
        </p>
        <p className="align-self-start bg-body-secondary p-3 rounded-3">
          How are you
        </p>
      </div>

      <div
        className=" px-4 py-3"
        style={{
          height: "80px",
          boxShadow: "0px -2px 1px rgba(0, 0, 0, 0.10)",
        }}
      >
        <div className="w-100 h-100 d-flex gap-2 position-relative">
          <input
            type="text"
            className="rounded-3 px-5"
            style={{
              border: "2px solid rgba(0, 0, 0, 0.10)",
              width: "100%",
              height: "100%",
            }}
          />
          <div
            className=" rounded-circle d-flex justify-content-center align-items-lg-center"
            style={{ width: "50px", height: "50px" }}
          >
            <img
              src={send}
              alt=""
              className="rounded-circle "
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <img
            src={attach}
            alt=""
            className="position-absolute"
            style={{ width: "20px", height: "20px", left: "20px", top: "13px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Chatpage;
