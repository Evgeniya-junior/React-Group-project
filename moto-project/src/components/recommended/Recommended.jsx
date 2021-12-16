import s from './Recommended.module.scss'
import React from "react";
import { NavLink } from 'react-router-dom';
import RecommendedLink from './RecommendedLink';







function Recommended(props) {
    return (
        <div className={s.recommend}>
        <h2 className={s.recommendTitle}>С этим товаром покупают</h2>
        <ul className={s.recommendList}>
            <li className={s.recommendItem}>
            <RecommendedLink href="#" text="запчасти" />
            </li>
            <li className={s.recommendItem}>
            <RecommendedLink href="#" text="моторы" />
            </li>
            <li className={s.recommendItem}>
            <RecommendedLink href="#" text="шины " />
            </li>
            <li className={s.recommendItem}>
            <RecommendedLink href="#" text="электроника " />
            </li>
            <li className={s.recommendItem}>
            <RecommendedLink href="#" text="инструменты" />
            </li>
            <li className={s.recommendItem}>
            <RecommendedLink href="#" text="аксессуары " />
            </li>
            
         
  </ul>
        </div>
        
    );
}

export default Recommended;