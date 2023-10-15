import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import search from "../assets/icons/search.png";
import Image from "react-bootstrap/Image";
import profile from "../assets/images/profile.png";
import more from "../assets/icons/more.png";
function Userlist() {
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div style={{ height: "100dvh" }}>
      <Container
        className="w-100 d-flex flex-column justify-content-center px-4"
        style={{
          height: "80px",
          boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.10)",
        }}
      >
        <h1 className="fs-4 ">Chats</h1>
      </Container>
      <div className="position-relative p-3">
        <Form.Control type="text" className="form-control rounded-3" />
        <img
          src={search}
          alt=""
          className="position-absolute"
          style={{ width: "20px", height: "20px", top: 25, right: 20 }}
        />
        <div className="w-100 d-flex justify-content-center my-3 bg-bg-white">
          <div className="d-flex justify-content-between rounded-5 bg-body-secondary px-1 py-1">
            <Button
              style={{
                color: `${activeButton === 1 ? "black" : "gray"}`,
                border: "none",
              }}
              className={`${
                activeButton === 1 ? "bg-white" : "bg-body-secondary"
              } rounded-5 px-4`}
              onClick={() => handleButtonClick(1)}
            >
              Direct
            </Button>
            <Button
              onClick={() => handleButtonClick(2)}
              style={{
                color: `${activeButton === 2 ? "black" : "gray"}`,
                border: "none",
              }}
              className={`${
                activeButton === 2 ? "bg-white" : "bg-body-secondary"
              } rounded-5 px-4`}
            >
              Groups
            </Button>
          </div>
        </div>
        <div
          className="rounded-3 w-100  my-3 px-3 py-2  d-flex align-items-center"
          style={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}
        >
          <Image
            src={profile}
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
          <img src={more} alt="" style={{ width: "25px", height: "25px" }} />
        </div>
      </div>
    </div>
  );
}

export default Userlist;
