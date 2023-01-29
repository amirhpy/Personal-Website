import React from 'react';

const ResumeItem = ({title, date, subtitle, description}) => {
    return (
        <div className='resume__content-item'>
            <div className='resume__content-head'>
                <h5 className='resume__content-title'>{title}</h5>
                <span className='resume__content-date'>{date}</span>
            </div>
            <h6 className='resume__content-subtitle'>{subtitle}</h6>
            <p className='resume__content-description'>{description}</p>
        </div>
    );
};

export default ResumeItem;