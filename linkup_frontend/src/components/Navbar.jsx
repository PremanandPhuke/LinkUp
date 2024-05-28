import React, { useContext, useEffect, useState } from "react";
import "./navbar.scss";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";
import { AuthContext } from "../context/authContext";
import Rightbar from "./Rightbar";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


function Navbar({  rightbar, setRightBar }) {
  const { toggel, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);


  const handleButtonClick = () => {
    setRightBar(!rightbar);
    // setOverlayVisibility(prevState => !prevState);
  };

 


  return (
    <div className="navbar">
      <div className="left">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span>LinkUp</span>
        </NavLink>
        <HomeOutlinedIcon style={{ height: "20px" }} />
        {/* <DarkModeOutlinedIcon  style={{height:"20px"}} onClick={toggel}/> */}

        {darkMode ? (
          <WbSunnyOutlinedIcon style={{ height: "20px" }} onClick={toggel} />
        ) : (
          <DarkModeOutlinedIcon style={{ height: "20px" }} onClick={toggel} />
        )}

        <GridViewOutlinedIcon style={{ height: "20px" }} />
      </div>
      <div className="center">
        <div className="search">
          <SearchOutlinedIcon style={{ height: "20px" }} />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon style={{ height: "20px" }} />
        <EmailOutlinedIcon style={{ height: "20px" }} />
        <NotificationsNoneOutlinedIcon style={{ height: "20px" }} />
        <div className="user">
          <img src={currentUser.profilepic} />
          <span>{currentUser.name}</span>
        </div>
      </div>

      <div className="menu">
        {/* <MenuOutlinedIcon/> */}
        {rightbar ? (
          <CloseOutlinedIcon  onClick={() => {handleButtonClick();}} />
        ) : (
          <MenuOutlinedIcon className="toggel" onClick={() => {handleButtonClick();}} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
