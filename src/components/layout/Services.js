import React, { useState } from 'react';

// Shared
import SectionHead from '../shared/SectionHead';
import ServicesContent from '../shared/ServicesContent';

// Icon
import motion from '../../assets/svg/motion-svg.svg'
import seo from '../../assets/svg/seo-svg.svg'
import interFace from '../../assets/svg/interface-svg.svg'
import development from '../../assets/svg/development-svg.svg'
import uxDesign from '../../assets/svg/uxdesign-svg.svg'
import webDesign from '../../assets/svg/webdesign-svg.svg'

const Services = () => {
    const [content, setContent] = useState([
        {id: 1, icon: webDesign, shapeColor: '#803AFB', bgColor: '#8540FF', title:'Web Design', caption: 'Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.'},
        {id: 2, icon: interFace, shapeColor: '#FFBB01', bgColor: '#FFC50C', title:'Interface Design', caption: 'Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.'},
        {id: 3, icon: development, shapeColor: '#F5276C', bgColor: '#EC407A', title:'Web Development', caption: 'Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.'},
        {id: 4, icon: uxDesign, shapeColor: '#FF5823', bgColor: '#FF6331', title:'UX Design', caption: 'Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.'},
        {id: 5, icon: motion, shapeColor: '#03ACF8', bgColor: '#13B6FF', title:'Motion Graphic', caption: 'Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.'},
        {id: 6, icon: seo, shapeColor: '#49B846', bgColor: '#49AF46', title:'SEO Optimize', caption: 'Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.'},
    ])

    return (
        <section className='services'>
            <div className='container'>
                <SectionHead title='Services' caption='What We Provide You ?' />
                <div className='row'>
                    {content.map(item => <ServicesContent key={item.id} icon={item.icon} shapecolor={item.shapeColor} bgColor={item.bgColor} title={item.title} caption={item.caption} />)}
                </div>
            </div>
        </section>
    );
};

export default Services;