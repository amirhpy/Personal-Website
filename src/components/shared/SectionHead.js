import React from 'react';

const SectionHead = ({title, caption}) => {
    return (
        <div className='section-head'>
            <h3 className='section-title'>{title}</h3>
            <p  className='section-caption'>{caption}</p>
            <span className='section-line'></span>
        </div>
    );
};

export default SectionHead;