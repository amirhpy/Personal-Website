import React from 'react';

const ServicesContent = ({icon, shapecolor, bgColor, title, caption}) => {
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div className='services__wrapper' style={{backgroundColor: bgColor}}>
                <img className='services__icon' src={icon} alt='icon' />
                <h4 className='services__title'>{title}</h4>
                <p className='services__caption'>{caption}</p>
                <svg className='services__wave' viewBox="0 0 369.92 223.59">
                    <path id="shape" d="M1249.08,2700.557s15.007-66.794,51.8-54.34,43.02,57.737,121.7,13.585,95.662-58.3,124.531-23.774S1619,2601.5,1619,2601.5v223.59H1249.08Z" transform="translate(-1249.08 -2601.498)" fill={shapecolor}/>
                </svg>
            </div>
        </div>
    );
};

export default ServicesContent;