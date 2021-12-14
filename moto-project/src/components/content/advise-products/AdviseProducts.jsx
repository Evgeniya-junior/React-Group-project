import {NavLink} from "react-router-dom";
import s from './AdviseProducts.module.scss';
import React from 'react';
import Checkbox from '@mui/material/Checkbox';








function AdviseProducts(props) {
    return (
            <div className={s.wrapper}>
                
                <img className={s.image} src={props.image} alt="" />
                <img className={s.image2} src={props.image2} alt="" />
                <h2 className={s.headline}>{props.headline}</h2>
                <text className={s.text}>{props.text}</text>
                {/* <NavLink className={s.link2} to={props.link2}>Сообщить о поступлении</NavLink> */}
                <button className={s.btn}>{props.btn}</button>
            </div>
    );
}

export default AdviseProducts;