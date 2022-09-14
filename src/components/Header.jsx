import React from "react";

const Header = (darkMode, setDarkMode) =>
{
    const handleClick = () =>
    {
        console.log("click " + darkMode);
        setDarkMode(!darkMode);
        console.log("clicked " + darkMode);
    }

    return (
        <div className="Header">
            <h1>React Hooks</h1>
            <button type="button" onClick={handleClick}>{darkMode ? "Dark Mode" : "Light Mode" }</button>
        </div>
    );
}

export default Header;