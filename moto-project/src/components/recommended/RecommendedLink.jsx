import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './RecommendedLink.module.scss';



function RecommendedLink(props) {
   return (

      <NavLink to="/" className={s.link} style={props.style}>{props.text}</NavLink>
   );
}

export default RecommendedLink;