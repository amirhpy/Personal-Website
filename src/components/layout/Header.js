import React from 'react';

// Components
import HamburgerMenu from '../shared/HamburgerMenu';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <nav className='nav'>
                    <h1 className='nav__logo'>WA.</h1>
                    <HamburgerMenu />
                </nav>
            </div>
        </header>
    );
};

export default Header;