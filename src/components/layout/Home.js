import React from 'react';

import Button from '../shared/Button';

const Home = () => {
    return (
        <section className='home'>
            <div className='container'>
                <div className='row items-center'>
                    <div className='col-12 col-lg-6'>
                        <div className='home__content'>
                            <h3 className='home__username'>Hello, IM <span>White Alexa</span></h3>
                            <h2 className='home__title'>Creative Designer</h2>
                            <p className='home__caption'>Freelancer Web/ Mobile UI/UX Designer with Motion Graphics</p>
                            <div className='home__link-wrapper'>
                                <Button className='app-btn' text='Hire Me' />
                                <Button className='app-btn app-btn--orange' text='Get Resume' />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 display-f items-center justify-center'>
                        <div className='home__photo'></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;