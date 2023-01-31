import React from 'react';

// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper Core And Required Modules
import { Pagination } from 'swiper'

// Import Swiper Style
import 'swiper/css'
import 'swiper/css/pagination'

const PortfolioSlider = ({ img, className, customId }) => {
    return (
        <div className={className} id={customId}>
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

                <SwiperSlide><img className='portfolio__content-img' src={img[0]} alt='banner' /></SwiperSlide>
                <SwiperSlide><img className='portfolio__content-img' src={img[1]} alt='banner' /></SwiperSlide>
                <SwiperSlide><img className='portfolio__content-img' src={img[2]} alt='banner' /></SwiperSlide>
                <SwiperSlide><img className='portfolio__content-img' src={img[3]} alt='banner' /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PortfolioSlider;