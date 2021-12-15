import React from 'react';
import Button from "../components/button/Button";
import s from "./ProductCard.module.scss";
import ImageGidro from './../../../assets/images/content-product/product-card/gidrotsikl-brp-seedoo-gti-155hp-se-long-beach-blue-metallic-50297506898641_small6.png'
import ChartIcon from './../../../assets/images/content-product/product-card/chart.svg';

import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import CheckboxFavorite from './../components/checkbox-favorite/CheckboxFavorite';
import SpecsTable from '../specs-table/SpecsTable';


const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#1C62CD',
    },
    '& .MuiRating-iconEmpty': {
        color: '#C4C4C4',
    },
});


function ProductCard(props) {
    return (
        <div className={s.productCard}>
            <div className={s.imageBox}>
                <div className={s.sale}>Sale</div>
                <img className={s.image} src={ImageGidro} alt="Гидроцикл" /> 
                <del class={s.oldPrice}>1 200 475 ₽</del>
                <p class={s.price}>1 100 475 ₽</p>
                <a class={s.link} href="#">Нашли дешевле? Снизим цену!</a>
            </div>

            <div className={s.header}>
                <h1 className={s.title}>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h1>
                <p className={s.code}>Код товара: 	366666-2 </p>
                <div className={s.rating}>
                    <div>
                        <CheckboxFavorite/>
                    </div>
                    <div>
                        <button className={s.buttonChart}>
                            <img src={ChartIcon} alt="График цен" /> 
                        </button>
                    </div>
                    <div>
                        <StyledRating 
                            name="read-only" 
                            defaultValue={4} 
                            readOnly
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                    </div>
                </div>
            </div>
            <div className={s.specs}>
            Характеристики            Наличие в магазине
            <SpecsTable/>
            </div>
            <div className={s.cardButton}>
                <Button title="Купить"/>
            </div>

        </div>
    );
}

export default ProductCard;