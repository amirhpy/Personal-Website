import React, { useState } from 'react';

// Shared
import SectionHead from '../shared/SectionHead';
import PortfolioList from '../shared/PortfolioList';
import PortfolioSlider from '../shared/PortfolioSlider';

const Portfolio = () => {
    const [listItem, setListItem] = useState([
        {id: 1, name: 'All Work', className: 'portfolio__list-item portfolio__list-item--active'},
        {id: 2, name: 'Illustration', className: 'portfolio__list-item'},
        {id: 3, name: 'Animation', className: 'portfolio__list-item'},
        {id: 4, name: 'App UI', className: 'portfolio__list-item'},
        {id: 5, name: 'Web UI', className: 'portfolio__list-item'},
        {id: 6, name: 'Social Media', className: 'portfolio__list-item'},
        {id: 7, name: 'Print Design', className: 'portfolio__list-item'}
    ])
    return (
        <section className='portfolio'>
            <div className='container'>
                <SectionHead title='Portfolio' caption='Check in Our Latest Works' />
                <ul className='portfolio__list'>
                    {listItem.map(item => <PortfolioList key={item.id} name={item.name} className={item.className} />)}
                </ul>
                <PortfolioSlider />
            </div>
        </section>
    );
};

export default Portfolio;