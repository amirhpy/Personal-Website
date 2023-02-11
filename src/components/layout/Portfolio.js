import React, { useState } from 'react';

// Shared
import SectionHead from '../shared/SectionHead';
import PortfolioList from '../shared/PortfolioList';
import PortfolioSlider from '../shared/PortfolioSlider';

// Img
import portFolio1 from '../../assets/images/portfolio-1.jpg'
import portFolio2 from '../../assets/images/portfolio-2.jpg'
import portFolio3 from '../../assets/images/portfolio-3.jpg'
import city1 from '../../assets/images/city1.jpg'
import city2 from '../../assets/images/city2.jpg'
import city3 from '../../assets/images/city3.jpg'

const Portfolio = () => {
    const [listItem] = useState([
        { id: 1, name: 'All Work', className: 'portfolio__list-item portfolio__list-item--active', dataContentId: '#all-work' },
        { id: 2, name: 'Illustration', className: 'portfolio__list-item', dataContentId: '#illustration' },
        { id: 3, name: 'Animation', className: 'portfolio__list-item', dataContentId: '#animation' },
        { id: 4, name: 'App UI', className: 'portfolio__list-item', dataContentId: '#app-ui' },
        { id: 5, name: 'Web UI', className: 'portfolio__list-item', dataContentId: '#web-ui' },
        { id: 6, name: 'Social Media', className: 'portfolio__list-item', dataContentId: '#social-media' },
        { id: 7, name: 'Print Design', className: 'portfolio__list-item', dataContentId: '#print-design' }
    ])

    const [portFolioImage] = useState([
        { id: 1, className: 'portfolio__content portfolio__content--show', customId: 'all-work', img: [portFolio1, portFolio2, portFolio3, city1] },
        { id: 2, className: 'portfolio__content', customId: 'illustration', img: [city1, city2, city3, portFolio3] },
        { id: 3, className: 'portfolio__content', customId: 'animation', img: [portFolio3, city1, city2, portFolio1] },
        { id: 4, className: 'portfolio__content', customId: 'app-ui', img: [portFolio2, city3, city2, portFolio1] },
        { id: 5, className: 'portfolio__content', customId: 'web-ui', img: [portFolio1, city1, city2, portFolio2] },
        { id: 6, className: 'portfolio__content', customId: 'social-media', img: [portFolio2, city1, city2, portFolio3] },
        { id: 7, className: 'portfolio__content', customId: 'print-design', img: [portFolio3, city2, city3, portFolio2] },
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