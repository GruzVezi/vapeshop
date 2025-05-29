import React, { useState, useEffect } from 'react';
import "./styles/styles-header.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setDarkMode(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark-theme', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark-theme', newMode);
  };

  return (
    <header className='header'>
      <div className='logo'>
        <a href='#'>VapeShop</a>
      </div>
      <div className='header-controls'>
        <div className='list'>
          <a className='link' href='#'>Новинки</a>
          <a className='link' href='#'>Каталог</a>
          <a href='/profile' className='profile-link'>
            <img src='/profile.png' className='pngLink' alt='Profile' />
          </a>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <div className="theme-icons">
                <img 
                    src="/sun.png" 
                    className={`theme-icon ${!darkMode ? 'active' : 'inactive'}`} 
                    alt="Light mode" 
                />
                <img 
                src="/moon.png" 
                className={`theme-icon ${darkMode ? 'active' : 'inactive'}`} 
                alt="Dark mode" 
                />
            </div>
        </button>
      </div>
    </header>
  );
};

export default Header;