import React, { useRef } from 'react';

const PortfolioList = ({ name, className }) => {

    const liRef = useRef(null)

    const classHandler = () => {
        document.querySelector('.portfolio__list-item--active').classList.remove('portfolio__list-item--active')
        liRef.current.classList.add('portfolio__list-item--active')
    }

    return (
        <li className={className} ref={liRef} onClick={classHandler}>{name}</li>
    );
};

export default PortfolioList;