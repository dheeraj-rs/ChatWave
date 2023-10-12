import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import UserCard from "./UserCard";

function Userlist() {
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <>
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
        <SearchSharpIcon
          className="position-absolute"
          style={{ top: 25, right: 20 }}
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
      <UserCard/> 
      </div>
    </>
  );
}

export default Userlist;
