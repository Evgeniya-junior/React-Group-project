// Core modules imports are same as usual
import { Navigation } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module

import s from './Swiper.module.scss';
import AdviseProducts from '../advise-products/AdviseProducts';


// eslint-disable-next-line
export default () => {

    return (
        <div className={s.wrapper}>
            <Swiper className={s.swiper}
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            navigation={{
                nextEl: '.button-next',
                prevEl: '.button-prev',
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
            <div className={`button-prev ${s.prev}`} ></div>
            <div className={`button-next ${s.next}`} ></div>
        </div>
    );
};