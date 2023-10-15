import React from "react";
import { Image, Nav } from "react-bootstrap";
import logo from "../assets/icons/logo.png";
import profile from "../assets/images/profile.png";
import LayersIcon from "@mui/icons-material/Layers";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PolylineIcon from "@mui/icons-material/Polyline";

function Dashboard() {
  const iconStyle = {
    fontSize: "30px",
    color: "#505050",
  };

  return (
    <Nav
      className="flex-column justify-content-between align-items-center d-none d-lg-flex"
      style={{
        width: "100px",
        height: "100vh",
        borderRight: "2px solid rgba(0, 0, 0, 0.10)",
      }}
    >
      <Nav.Item>
        <Nav.Link href="/home">
          <Image
            src={logo}
            alt="Logo"
            fluid
            roundedCircle
            className="w-100 h-75"
          />
        </Nav.Link>
      </Nav.Item>
      <div className="d-flex flex-column gap-4">
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <PolylineIcon style={iconStyle} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <PeopleAltIcon style={iconStyle} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            <ChatBubbleOutlineIcon style={iconStyle} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">
            <NotificationsNoneIcon style={iconStyle} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5">
            <SettingsIcon style={iconStyle} />
          </Nav.Link>
        </Nav.Item>
      </div>
      <div className="d-flex flex-column gap-4 align-items-center justify-content-center">
        <Nav.Item>
          <Nav.Link eventKey="link-6">
            <LayersIcon style={iconStyle} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="logo">
            <Image
              src={profile}
              alt="User"
              fluid
              roundedCircle
              className="w-100 h-75 bg-body-secondary"
            />
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
}

export default Dashboard;
