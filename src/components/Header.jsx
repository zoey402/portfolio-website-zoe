import React, { useState } from 'react';
import './Header.css';
import './Theme.css';

import SunIcon from '../assets/images/icons8-sun-24.png';
import MoonIcon from '../assets/images/icons8-moon-24.png';


function Header({ setPage }){

    const [isNavVisible, setIsNavVisible] = useState(false);

    function toggleNav() {
        setIsNavVisible(!isNavVisible);
    }

    const [theme, setTheme] = useState('light'); // Default theme

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme; 
    };
    
    function go(event, page) {
        event.preventDefault();
        setPage(page);
        setIsNavVisible(false);
    }

    return (
        <header className="header">

            <div className="header__name">
                <h1 className='header__title'>Zoe Zhu Portfolio</h1>
            </div>

            <button className="nav__toggle" aria-label="toggle navigation" onClick={toggleNav}>
                <span className="hamburger"></span>
            </button>
            
            <nav>
                <ul className={`navbar ${isNavVisible ? 'nav__visible' : ''}`}>
                    <li className='nav__item'><a href="" onClick={ (e) => go(e, "Home") }>
                        Home
                    </a></li>
                    <li className='nav__item'><a href="" onClick={ (e) => go(e, "Projects") }>
                        Projects
                    </a></li>  
                    <li className='nav__item'><a href="" onClick={ (e) => go(e, "Experiences") }>
                        Experiences
                    </a></li>  
                    <li className='nav__item'><a href="" onClick={ (e) => go(e, "Contact") }>
                        Contact
                    </a></li>
                    <li className='nav__item'>
                        <a className='theme__item'><span className="theme__text">Mode</span>
                            <label className="switch">
                                <input type="checkbox" onClick={toggleTheme} />
                                <span className="slider round"><span className="emoji">
                                    <img alt="A sun icon for light theme or a moon icon for dark theme" src={theme === 'light' ? SunIcon : MoonIcon} />
                                </span></span>
                            </label>
                            
                        </a>
                    </li>


                </ul>
            </nav>


            
        </header>
    );
}

export default Header;