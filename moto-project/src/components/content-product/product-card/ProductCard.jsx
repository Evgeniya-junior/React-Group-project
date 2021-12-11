import React from 'react';
import Button from "../components/button/Button";
import s from "./ProductCard.module.scss";
import ImageGidro from './../../../assets/images/content-product/product-card/gidrotsikl-brp-seedoo-gti-155hp-se-long-beach-blue-metallic-50297506898641_small6.png'
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

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
                <img src={ImageGidro} alt="Гидроцикл" /> 
                <p class={s.oldPrice}>1 200 475 ₽</p>
                <p class={s.price}>1 100 475 ₽</p>

            </div>
            <div className={s.productCardHeader}>
                <h1>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h1>
                <span>Код товара: 	366666-2 </span>
                <div className={s.productCardRating}>
                    <div>Сердечко</div>
                    <div>Кнопка</div>
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
            <div className={s.productCardSpecs}>
            Характеристики            Наличие в магазине
            <table>
                <tbody>
                    <tr>
                        <td>Производитель</td>
                        <td>Канада</td>
                    </tr>
                    <tr>
                        <td>Количество мест, шт: </td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Мощность, л.с.</td>
                        <td>155</td>
                    </tr>
                    <tr>
                        <td>Тип двигателя</td>
                        <td>Бензиновый</td>
                    </tr>
                    <tr>
                        <td>Год выпуска</td>
                        <td>2018</td>
                    </tr>
                </tbody>
                <a href="#">Показать еще</a>
            </table>
            </div>
            <div className={s.productCardButton}>
                <Button title="Купить"/>
            </div>
        </div>
    );
}

export default ProductCard;