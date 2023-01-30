import React, { useState } from 'react';

import Navigation from './Navigation';

const HamburgerMenu = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState('nav__toggle-icon unclicked')
    const [menuOpen, setMenuOpen] = useState('menu')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenuHandler = () => {
        if(!isMenuOpen) {
            setHamburgerMenu('nav__toggle-icon clicked')
            setMenuOpen('menu menu--open')
            setIsMenuOpen(true)
        } else {
            setHamburgerMenu('nav__toggle-icon unclicked')
            setMenuOpen('menu')
            setIsMenuOpen(false)
        }
    }

    return (
        <>
            <Navigation menuOpen={menuOpen} />
            <div className={hamburgerMenu} onClick={openMenuHandler}>
                <div className='nav_toggle-line'></div>
            </div>
        </>
    );
};

export default HamburgerMenu;