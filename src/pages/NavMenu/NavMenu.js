import React from 'react';
import './NavMenu.css';

const NavMenu = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="App-header">
            <nav className="Nav-menu">
                <h1>ROBO.SCHOOL</h1>
                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="mobile-menu-button">
                    &#9776;
                </label>
                <div className="navLink">
                    <span onClick={() => scrollToSection('InfoSchool')}>
                        О школе
                    </span>
                    <span onClick={() => scrollToSection('Trener')}>
                        Тренеры
                    </span>
                    <span onClick={() => scrollToSection('Price')}>
                        Стоимость
                    </span>
                </div>
                <h1>+777 589 58 50</h1>
            </nav>
        </header>
    );
};

export default NavMenu;



