import s from "./ContentProduct.module.scss";
import ProductCard from "./product-card/ProductCard";
import BuyWithProduct from "./../content/buy-with-product/BuyWithProduct";

import { Breadcrumbs } from "@mui/material";
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ProductTabs from "./product-tabs/ProductTabs";

function ContentProduct(props) {
    return (
        <div className={s.contentProduct}>
            <h2>3-я страница</h2>
            <main>
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
                        <span>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</span>
                    </Breadcrumbs>
                </div>
                <ProductCard/>
                
                <ProductTabs/>
                
                
            </main>
            <BuyWithProduct className={s.buyWithProduct} title='С этим товаром покупают' 
                text1='запчасти' text2='моторы' text3='шины' text4='электроника' 
                text5='инструменты' text6='аксессуары'
            />
        </div>
    );
}

export default ContentProduct;