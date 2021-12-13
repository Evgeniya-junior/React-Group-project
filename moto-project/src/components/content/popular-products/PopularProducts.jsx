import s from './PopularProducts.module.scss';
import Swiper from './../swiper/Swiper';

function PopularProducts(props) {
    return (
        <>
            <h2 className={s.title}>Популярные товары</h2>

            <ul className={s.list}>
                <li className={s.item}>запчасти</li>
                <li className={s.item}>моторы</li>
                <li className={s.item}>шины </li>
                <li className={s.item}>электроника</li>
                <li className={s.item}>инструменты</li>
                <li className={s.item}>аксессуары </li>
            </ul>

            <Swiper className="swiper" />

            <button className={s.button}>Показать еще</button>
        </>

    );
}

export default PopularProducts;