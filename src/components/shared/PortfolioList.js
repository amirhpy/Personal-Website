import React, { useRef } from 'react';

const PortfolioList = ({ name, className, dataContentId }) => {

    const liRef = useRef(null)

    const classHandler = () => {
        document.querySelector('.portfolio__list-item--active').classList.remove('portfolio__list-item--active')
        document.querySelector('.portfolio__content--show').classList.remove('portfolio__content--show')

        liRef.current.classList.add('portfolio__list-item--active')
        let contentId = liRef.current.getAttribute('data-content-id')

        document.querySelector(contentId).classList.add('portfolio__content--show')
    }

    return (
        <li className={className} ref={liRef} data-content-id={dataContentId} onClick={classHandler}>{name}</li>
    );
};

export default PortfolioList;