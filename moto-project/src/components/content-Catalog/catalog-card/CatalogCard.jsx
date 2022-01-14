import s from "./CatalogCard.module.scss";
import * as React from 'react';
import CheckboxFavorite from '../../content-product/components/checkbox-favorite/CheckboxFavorite';


import cartIcon from './../../../assets/images/catalog-card/cart.svg';

function CatalogCard(props) {
    return (
        <div className={s.catalogCard}>
            <span className={s.sale}>SALE</span>
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
                <div className={s.price}>{props.price}</div>
                <div className={s.cart}>
                    <img src={cartIcon} alt="Корзина" />
                </div>
            </div>
        </div>
    );
}
export default CatalogCard;

