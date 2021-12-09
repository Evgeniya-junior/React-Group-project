import s from './Recommended.module.scss'
import React from "react";
import { NavLink } from 'react-router-dom';
import RecommendedLink from './RecommendedLink';







function Recommended(props) {
    return (
        <div className={s.recomend}>
        <h2 className={s.recomendTitle}>С этим товаром покупают</h2>
        <ul className={s.recomendList}>
            <li className={s.recomendItem}>
            <RecommendedLink href="#" text="запчасти" />
            </li>
            <li className={s.recomendItem}>
            <RecommendedLink href="#" text="моторы" />
            </li>
            <li className={s.recomendItem}>
            <RecommendedLink href="#" text="шины " />
            </li>
            <li className={s.recomendItem}>
            <RecommendedLink href="#" text="электроника " />
            </li>
            <li className={s.recomendItem}>
            <RecommendedLink href="#" text="инструменты" />
            </li>
            <li className={s.recomendItem}>
            <RecommendedLink href="#" text="аксессуары " />
            </li>
            
         
  </ul>
        </div>
        
    );
}

export default Recommended;