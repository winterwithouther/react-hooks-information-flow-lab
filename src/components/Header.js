import React from "react"

function Header({ onDarkModeClick, isDarkMode }) {

    function handleClick() {
        onDarkModeClick();
    }

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={handleClick}>{isDarkMode ? "Dark Mode" : "Light Mode"}</button>
        </header>

    // <header>
    //     <h2>Shopster</h2>
    //     <button onClick={onDarkModeClick}>
    //       {isDarkMode ? "Dark" : "Light"} Mode
    //     </button>
    //   </header>
    )
}

export default Header