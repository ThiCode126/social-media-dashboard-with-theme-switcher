import React from "react";

const Header = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <header id="header-app">
      <div className="cw">
        <div className="header__1">
          <h1>Social Media Dashboard</h1>
          <span>Total Followers: 23,004</span>
        </div>
        <div className="header__2">
          <span>Dark Mode</span>
          <div
            className={`toggle ${isDarkMode ? "dark" : "light"}`}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <div className="round"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
