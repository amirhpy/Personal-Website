import React, { useState } from 'react';

// Shared
import NavMenuLi from './NavMenuLi';

const Navigation = ({menuOpen}) => {
    const [menuOption, setMenuOption] = useState([
        {id: 1, classLI: 'menu__item menu__item-active', dataSection: 'home', classLink: 'menu__link', innerLink: 'Home'},
        {id: 2, classLI: 'menu__item', dataSection: 'aboutus', classLink: 'menu__link', innerLink: 'About us'},
        {id: 3, classLI: 'menu__item', dataSection: 'resume', classLink: 'menu__link', innerLink: 'Resume'},
        {id: 4, classLI: 'menu__item', dataSection: 'services', classLink: 'menu__link', innerLink: 'Services'},
        {id: 5, classLI: 'menu__item', dataSection: 'portfolio', classLink: 'menu__link', innerLink: 'Portfolio'},
        {id: 6, classLI: 'menu__item', dataSection: 'pricing', classLink: 'menu__link', innerLink: 'Pricing'},
        {id: 7, classLI: 'menu__item', dataSection: 'contactus', classLink: 'menu__link', innerLink: 'Contact'}
    ])
    return (
        <>
            <ul className={menuOpen}>
                {menuOption.map(item => <NavMenuLi key={item.id} classLI={item.classLI} dataSection={item.dataSection} classLink={item.classLink} innerLink={item.innerLink} />)}
            </ul>
        </>
    );
};

export default Navigation;