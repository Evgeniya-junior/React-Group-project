import s from "./ContentProduct.module.scss";
import AddressTable from "./address-table/AddressTable";
import SearchShop from "./search-shop/SearchShop";
import Advise from "../content/advise/Advise";
import ProductCard from "./product-card/ProductCard";
import BuyWithProduct from "./../content/buy-with-product/BuyWithProduct";
//Breadcrumbs
import { Breadcrumbs } from "@mui/material";
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BasicTabs from "./components/basicTabs/BasicTabs";

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
                
                <BasicTabs/>
                
                
            </main>
            <BuyWithProduct className={s.buyWithProduct} title='С этим товаром покупают' 
                text1='запчасти' text2='моторы' text3='шины' text4='электроника' 
                text5='инструменты' text6='аксессуары'
            />
        </div>
    );
}

export default ContentProduct;