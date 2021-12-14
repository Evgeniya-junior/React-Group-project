// Core modules imports are same as usual
import { Navigation } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import s from './Swiper.module.scss';

export default () => {
    return (
        <Swiper className={s.swiper}
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={4}
        navigation={true}
        loop={true}
        loopFillGroupWithBlank={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide className={s.slide}>Slide 1</SwiperSlide>
        <SwiperSlide className={s.slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={s.slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={s.slide}>Slide 4</SwiperSlide>
        <SwiperSlide className={s.slide}>Slide 5</SwiperSlide>
        <SwiperSlide className={s.slide}>Slide 6</SwiperSlide>
        <SwiperSlide className={s.slide}>Slide 7</SwiperSlide>
        <SwiperSlide className={s.slide}>Slide 8</SwiperSlide>
        </Swiper>
    );
};