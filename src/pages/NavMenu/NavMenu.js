import React from 'react';
import './NavMenu.css';

const NavMenu = () => (
    <header className="App-header">
        <nav className="Nav-menu">
            <h1>ROBO.SCHOOL</h1>
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="mobile-menu-button">
                &#9776;
            </label>
            <div className="navLink">
                <span><a href="#InfoSchool">О школе</a></span>
                <span><a href="#Trener">Тренеры</a></span>
                <span><a href="#Price">Стоимость</a></span>
            </div>
            <h1>+777 589 58 50</h1>
        </nav>
    </header>
);

export default NavMenu;

