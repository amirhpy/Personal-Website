import React from 'react';

// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper Core And Required Modules
import { Pagination } from 'swiper'

// Import Swiper Style
import 'swiper/css'
import 'swiper/css/pagination'

// Import Pictures
import portFolioOne from '../../assets/images/portfolio-1.jpg'
import portFolioTwo from '../../assets/images/portfolio-2.jpg'
import portFolioThree from '../../assets/images/portfolio-3.jpg'

const PortfolioSlider = () => {
    return (
        <div className='portfolio__content'>
            <Swiper
                // Install Swiper Modules
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                    992: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    }
                }}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>

                <SwiperSlide><img className='portfolio__content-img' src={portFolioOne} alt='banner' /></SwiperSlide>
                <SwiperSlide><img className='portfolio__content-img' src={portFolioTwo} alt='banner' /></SwiperSlide>
                <SwiperSlide><img className='portfolio__content-img' src={portFolioThree} alt='banner' /></SwiperSlide>
                <SwiperSlide><img className='portfolio__content-img' src={portFolioThree} alt='banner' /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PortfolioSlider;