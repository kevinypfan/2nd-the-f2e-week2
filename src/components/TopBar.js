import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as Clock } from "../assets/Time.svg";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="bar-logo">
        <Logo />
      </div>
      <div className="bar-menu">
        <div className="menu-time">
          <Clock />
          <div className="dummy-space" />
          <span className="timer">00:00</span>
        </div>
        <div className="menu-move">
          0<div className="dummy-space" />
          Moves
        </div>
      </div>
    </div>
  );
};

export default TopBar;
