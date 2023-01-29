import React, { useRef } from 'react';

const NavMenuLi = ({classLI, dataSection, classLink, innerLink}) => {

    const liRef = useRef(null)

    const clickHandler = (event) => {
        event.preventDefault()

        document.querySelector('.menu__item-active').classList.remove('menu__item-active')
        liRef.current.classList.add('menu__item-active')

        let sectionClass = liRef.current.getAttribute('data-section')

        let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop

        window.scrollTo({
            top: sectionOffsetTop - 120,
            behavior: 'smooth'
        })

    }

    return (
        <li onClick={clickHandler} className={classLI} ref={liRef} data-section={dataSection}>
            <a href='www.google.com' className={classLink}>{innerLink}</a>
        </li>
    );
};

export default NavMenuLi;