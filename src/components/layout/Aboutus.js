import React from 'react';

// Shared
import Button from '../shared/Button';
import SectionHead from '../shared/SectionHead';

// Image
import avatar from '../../assets/images/about-us-man.jpg'

const Aboutus = () => {
    return (
        <section className='aboutus'>
            <div className='container'>
                <SectionHead title='About US' caption='Why Choose Me?' />
                <div className='about__wrapper'>
                    <div className='about__cover'>
                        <img src={avatar} alt='avatar' className='about__img' />
                    </div>

                    <div className='about__content'>
                        <h4 className='about__title'>Why Choose me ?</h4>
                        <p className='about__description'>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text 
                            used in laying out print, graphic or web designs. The passage is 
                            attributed to an unknown typesetter in the 15th century who is 
                            thought to have scrambled parts of Cicero's De Finibus Bonorum 
                            et Malorum for use in a type specimen book.
                        </p>

                        <h5 className='about__list-title'>Here is Few Features: </h5>
                        <ul className='about-list'>
                            <li className='about-list_item'>User Interface Design</li>
                            <li className='about-list_item'>User Experience Design</li>
                            <li className='about-list_item'>Visual  Commination Design</li>
                            <li className='about-list_item'>Interaction Design</li>
                            <li className='about-list_item'>Supper Support</li>
                        </ul>

                        <div className='about__link-wrapper'>
                            <Button className='app-btn' text='Hire Me' />
                            <Button className='app-btn app-btn--orange' text='Get Resume' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutus;