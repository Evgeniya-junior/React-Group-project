
import React from 'react';
import s from './BasketCounter.module.scss';




function BasketCounter(props) {
   return (

      <span className={s.counter}>{props.text}</span>

   );
}

export default BasketCounter;