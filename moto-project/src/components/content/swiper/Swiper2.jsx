// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// Core modules imports are same as usual
import { Navigation } from 'swiper';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module

import s from './Swiper2.module.scss';
import AdviseProducts from './../advise-products/AdviseProducts';

import img1 from './../../../assets/images/content-product/swiper/audio-portativnaya-sistema.png';
import img2 from './../../../assets/images/content-product/swiper/garmin-echomap.png';
import img3 from './../../../assets/images/content-product/swiper/jetski-key.png';
import img4 from './../../../assets/images/content-product/swiper/diving-suit.png';


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
                <SwiperSlide className={s.slide}><AdviseProducts span='SALE' image={img1} title='BRP Audio-портативная система' price='нет в наличии'/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts span='' image={img2} title='Garmin Echomap Plus 62cv' price='45 800 ₽'/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts span='SALE' image={img3} title='RF D.E.S.S.TM Key' price='нет в наличии'/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts span='' image={img4} title='Мужской костюм 3мм' price='7 000 ₽'/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts span='SALE' image={img1} title='BRP Audio-портативная система' price='нет в наличии'/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts span='' image={img2} title='Garmin Echomap Plus 62cv' price='45 800 ₽'/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts span='SALE' image={img3} title='RF D.E.S.S.TM Key' price='нет в наличии'/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts span='' image={img4} title='Мужской костюм 3мм' price='7 000 ₽'/></SwiperSlide>
            </Swiper>
            <div className={`button-prev2 ${s.prev}`} ></div>
            <div className={`button-next2 ${s.next}`} ></div>
        </div>
    );
};
