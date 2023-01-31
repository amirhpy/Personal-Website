import React, { useState } from 'react';

// Shared
import SectionHead from '../shared/SectionHead';
import PortfolioList from '../shared/PortfolioList';
import PortfolioSlider from '../shared/PortfolioSlider';

// Img
import portFolio1 from '../../assets/images/portfolio-1.jpg'
import portFolio2 from '../../assets/images/portfolio-2.jpg'
import portFolio3 from '../../assets/images/portfolio-3.jpg'

const Portfolio = () => {
    const [listItem, setListItem] = useState([
        { id: 1, name: 'All Work', className: 'portfolio__list-item portfolio__list-item--active', dataContentId: '#all-work' },
        { id: 2, name: 'Illustration', className: 'portfolio__list-item', dataContentId: '#illustration' },
        { id: 3, name: 'Animation', className: 'portfolio__list-item', dataContentId: '#animation' },
        { id: 4, name: 'App UI', className: 'portfolio__list-item', dataContentId: '#all-work' },
        { id: 5, name: 'Web UI', className: 'portfolio__list-item', dataContentId: '#all-work' },
        { id: 6, name: 'Social Media', className: 'portfolio__list-item', dataContentId: '#all-work' },
        { id: 7, name: 'Print Design', className: 'portfolio__list-item', dataContentId: '#all-work' }
    ])

    const [portFolioImage, setPortFolioImage] = useState([
        { id: 1, className: 'portfolio__content portfolio__content--show', customId: 'all-work', img: [portFolio1, portFolio2, portFolio3, portFolio3] },
        { id: 2, className: 'portfolio__content', customId: 'illustration', img: [portFolio1, portFolio2, portFolio3, portFolio3] },
        { id: 3, className: 'portfolio__content', customId: 'animation', img: [portFolio1, portFolio2, portFolio3, portFolio3] },
    ])

    return (
        <section className='portfolio'>
            <div className='container'>
                <SectionHead title='Portfolio' caption='Check in Our Latest Works' />
                <ul className='portfolio__list'>
                    {listItem.map(item => <PortfolioList key={item.id} name={item.name} className={item.className} dataContentId={item.dataContentId} />)}
                </ul>
                {portFolioImage.map(item => <PortfolioSlider key={item.id} className={item.className} customId={item.customId} img={item.img} />)}
            </div>
        </section>
    );
};

export default Portfolio;