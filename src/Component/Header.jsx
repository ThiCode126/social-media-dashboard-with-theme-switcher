import React, { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    if (document.body.className.includes("dark")) {
      document.body.className = "light switch";
      setIsDarkMode(false);
    } else {
      document.body.className = "dark switch";
      setIsDarkMode(true);
    }
  };

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
            onClick={() => toggleTheme()}
          >
            <div className="round"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
