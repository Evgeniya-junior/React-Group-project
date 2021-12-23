import {NavLink} from "react-router-dom";
import s from './AdviseProducts.module.scss';
import React from 'react';








function AdviseProducts(props) {
    return (
            <div className={s.adviseProducts}>
                <span className={s.label}>{props.span}</span>
                <img className={s.image} src={props.image} alt="" />
                <h2 className={s.title}>{props.title}</h2>
                <div className={s.wrapper}>
                    <span className={s.price}>{props.price} </span>
                    <button className={s.basketBtn}>
                        <img src="" alt="" className={s.basketIcon} />
                    </button>
                </div>
                <NavLink className={s.link} to={"/"}>Сообщить о поступлении</NavLink>
            </div>
    );
}

export default AdviseProducts;