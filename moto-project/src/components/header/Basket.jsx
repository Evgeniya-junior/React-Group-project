import React from 'react';

import basket from './../../assets/img/basket-icon.svg'

import s from './Basket.module.scss';




function Basket() {
   return (

      <button className={s.basket}>
         <img className={s.img} src={basket} alt="Basket" />
      </button>

   );
}

export default Basket;