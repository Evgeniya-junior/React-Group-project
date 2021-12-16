import s from './PopularProducts.module.scss';
import Swiper from './../swiper/Swiper';

function PopularProducts(props) {
    return (
        <>
            <h2 className={s.title}>{props.title}</h2>

            <ul className={s.list}>
                <li className={s.item}>{props.text1}</li>
                <li className={s.item}>{props.text2}</li>
                <li className={s.item}>{props.text3}</li>
                <li className={s.item}>{props.text4}</li>
                <li className={s.item}>{props.text5}</li>
                <li className={s.item}>{props.text6}</li>
            </ul>

            <Swiper/>

            <button className={s.button} type='button'>{props.buttonText}</button>
        </>
    );
}

export default PopularProducts;