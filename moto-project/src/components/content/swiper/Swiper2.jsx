// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// Core modules imports are same as usual
import { Navigation } from 'swiper';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module

import s from './Swiper2.module.scss';
import AdviseProducts from './../advise-products/AdviseProducts';


// eslint-disable-next-line
export default () => {

    return (
        <div className={s.wrapper}>
            <Swiper
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
                navigation={{
                prevEl: '.button-prev2',
                nextEl: '.button-next2',
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className={s.slide}><AdviseProducts/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts/></SwiperSlide>
            </Swiper>
            <div className={`button-prev2 ${s.prev}`} ></div>
            <div className={`button-next2 ${s.next}`} ></div>
        </div>
    );
};
