import s from "./ContentProduct.module.scss";
import ProductCard from "./product-card/ProductCard";
import BuyWithProduct from "./../content/buy-with-product/BuyWithProduct";

import { Breadcrumbs } from "@mui/material";
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ProductTabs from "./product-tabs/ProductTabs";

import ImageGidro from './../../assets/images/content-product/product-card/gidrotsikl-brp-seedoo-gti-155hp-se.png';

const productData = {
    title:"Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
    image: ImageGidro,
    code: '366666-2',
    oldPrice: '1 200 475 ₽',
    newPrice: '1 100 475 ₽',
}
const characteristicData = [
    ["Производитель","Канада"],
    ["Количество мест, шт:", "3"],
    ["Мощность, л.с.", "155"],
    ["Тип двигателя", "Бензиновый"],
    ["Год выпуска", "2018"],
    ["Еще характеристика 1", "Еще значение 1"],
    ["Еще характеристика 2", "Еще значение 2"],
    ["Еще характеристика 3", "Еще значение 3"],
    ["Еще характеристика 4", "Еще значение 4"],
    ["Еще характеристика 5", "Еще значение 5"],
]


function ContentProduct(props) {
    return (
        <main className={s.contentProduct}>
            <h2>3-я страница</h2>
                <div className={s.contentBreadcrumb}>
                    <Breadcrumbs 
                        aria-label="breadcrumb" 
                        separator={<NavigateNextIcon fontSize="small" />} 
                        aria-label="breadcrumb"
                    >
                        <Link underline="hover" color="inherit" href="/">
                            Главная
                        </Link>
                        <Link underline="hover" color="inherit" href="/jetskis/">
                            Гидроциклы
                        </Link>
                        <span>{productData.title}</span>
                    </Breadcrumbs>
                </div>
                <ProductCard productData={productData} characteristicData={characteristicData}/>
                <ProductTabs/>
            <BuyWithProduct className={s.buyWithProduct} title='С этим товаром покупают' 
                text1='запчасти' text2='моторы' text3='шины' text4='электроника' 
                text5='инструменты' text6='аксессуары'
            />
        </main>
    );
}

export default ContentProduct;