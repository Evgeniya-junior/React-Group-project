// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// Core modules imports are same as usual
import { Navigation } from 'swiper';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module

import s from './Swiper.module.scss';
import AdviseProducts from './../advise-products/AdviseProducts';

import img1 from './../../../assets/images/content-product/swiper/backpack.png';
import img2 from './../../../assets/images/content-product/swiper/life-jacket.png';
import img3 from './../../../assets/images/content-product/swiper/audio-system.png';
import img4 from './../../../assets/images/content-product/swiper/rescue-equipment.png';


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
                prevEl: '.button-prev',
                nextEl: '.button-next',
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className={s.slide}><AdviseProducts span='' image={img1} title='Водонепроницаемый Рюкзак' price='9 800 ₽'/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts span='SALE' image={img2} title="Спасательный жилет BRP Men's Airflow PFD" price='6 900 ₽'/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts span='' image={img3} title='BRP Audio-Premium System' price='68 000 ₽'/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts span='SALE' image={img4} title='Спасательное снаряжение' price='нет в наличии'/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts span='' image={img1} title='Водонепроницаемый Рюкзак' price='9 800 ₽'/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts span='SALE' image={img2} title="Спасательный жилет BRP Men's Airflow PFD" price='6 900 ₽'/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts span='' image={img3} title='BRP Audio-Premium System' price='68 000 ₽'/></SwiperSlide>
                <SwiperSlide className={s.slide}><AdviseProducts span='SALE' image={img4} title='Спасательное снаряжение' price='нет в наличии'/></SwiperSlide>
            </Swiper>
            <div className={`button-prev ${s.prev}`} ></div>
            <div className={`button-next ${s.next}`} ></div>
        </div>
    );
};
