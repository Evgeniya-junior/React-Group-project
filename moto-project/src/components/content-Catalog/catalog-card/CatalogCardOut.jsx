import s from "./CatalogCard.module.scss";
import * as React from 'react';
import CheckboxFavorite from '../../content-product/components/checkbox-favorite/CheckboxFavorite';


function CatalogCardOut(props) {
    return (
        <div className={s.catalogCard}>
            <span className={s.saleNone}>SALE</span>
            <div className={s.favorite}>
                <CheckboxFavorite/>
            </div>
            <a href="" className={s.linkImage}>
                <img src={props.image} alt="Картинка" />
                <div className={s.linkImageShow}>
                    <span>посмотреть товар</span>
                </div>
            </a>
            <h2 className={s.title}>
                <a className={s.titleLink} href="">
                    {props.title}
                </a>
            </h2>
            <div className={s.catalogCardBody}>
                <div className={s.noPrice}>
                    <p className={s.noPriceText}>нет в наличии</p>
                    <a href="" className={s.message}>Сообщить о поступлении</a>
                </div>
            </div>
        </div>
    );
}
export default CatalogCardOut;

