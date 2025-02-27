import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    // Define state to control font size and theme
    const [fontSize, setFontSize] = useState(16);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    const officerLogin = () => {
        navigate('/loginuser')
    }
    const ngoLogin = () => {
        navigate('/loginNgo')
    }

    // Increase font size
    const increaseFontSize = () => {
        setFontSize(prevSize => Math.min(prevSize + 2, 24)); // Limit to a max size
    };

    // Decrease font size
    const decreaseFontSize = () => {
        setFontSize(prevSize => Math.max(prevSize - 2, 12)); // Limit to a min size
    };

    // Toggle dark/light theme
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header
            className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-900 text-white'} py-1 shadow-md`}
        >
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-xl font-semibold">
                    Grievance Redressal Portal
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={ngoLogin}
                        className="px-2 py-0.3 bg-gray-200 text-blue-900 rounded hover:bg-gray-300"
                    >
                        NGO Login
                    </button>
                    <button
                        onClick={officerLogin}
                        className="px-2 py-0.3 bg-gray-200 text-blue-900 rounded hover:bg-gray-300"
                    >
                        Officer Login
                    </button>
                    <button
                        onClick={decreaseFontSize}
                        className="px-2 py-0.3 bg-gray-200 text-blue-900 rounded hover:bg-gray-300"
                    >
                        A-
                    </button>
                    <button
                        onClick={increaseFontSize}
                        className="px-2 py-0.3 bg-gray-200 text-blue-900 rounded hover:bg-gray-300"
                    >
                        A+
                    </button>
                    {/* <button
                        onClick={toggleTheme}
                        className="px-4 py-0.3 bg-gray-200 text-blue-900 rounded hover:bg-gray-300"
                    >
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button> */}
                </div>
            </div>
            {/* Apply font size and theme to main content */}
            <style>
                {`
                    body {
                        font-size: ${fontSize}px;
                        background-color: ${isDarkMode ? '#1a1a1a' : '#ffffff'};
                        color: ${isDarkMode ? '#ffffff' : '#000000'};
                    },
                     {
                        font-size: ${fontSize}px;
                        background-color: ${isDarkMode ? '#1a1a1a' : '#ffffff'};
                        color: ${isDarkMode ? '#ffffff' : '#000000'};
                    }
                `}
            </style>
        </header>
    );
};

export default Header;
