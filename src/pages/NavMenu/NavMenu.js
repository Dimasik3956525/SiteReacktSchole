import React from 'react';
import './NavMenu.css';
const NavMenu = () => (
    <header className="App-header">
        <nav className="Nav-menu">
            <h1>ROBO.SCHOLL</h1>
            <div className="navLink">
                <p><a href="#InfoSchool">О школе</a></p>
                <p><a href="#Trener">Тренеры</a></p>
                <p><a href="#Price">Стоимость</a></p>
            </div>

            <h1>+ 777 589 58 50</h1>
        </nav>
    </header>
);

export default NavMenu;
