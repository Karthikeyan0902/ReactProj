import React, { useState, useEffect } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import ThemeLabel from "../Components/ThemeLabel";
import Sidebar from "../Components/SideBar";
import FindingBar from '../Components/FindingBar'

function ThemePage() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty('--background-color', '#fff');
      document.documentElement.style.setProperty('--text-color', '#000');
    } else {
      document.documentElement.style.setProperty('--background-color', '#333');
      document.documentElement.style.setProperty('--text-color', '#fff');
    }
  }, [theme]);
  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <FindingBar/>
      <div style={{ padding: 20 }}>
        <h1>Context API Theme Switcher</h1>
        <button onClick={toggleTheme}>Switch Theme</button>
        <ThemeLabel />
      </div>
      
      <Sidebar />
    </ThemeContext.Provider>
  );
}

export default ThemePage;
