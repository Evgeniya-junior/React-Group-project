import s from "./ContentProduct.module.scss";
import AddressTable from "./address-table/AddressTable";
import SearchShop from "./search-shop/SearchShop";
import Advise from "../content/advise/Advise";
import ProductCard from "./product-card/ProductCard";

//Breadcrumbs
import { Breadcrumbs } from "@mui/material";
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
                <div>Таб "(сделать)"</div>
                <SearchShop/>
                <AddressTable/>
            </main>
            <h2>С этим товаром покупают "(компонента??)"</h2> 
            таб "(сделать)"
            <Advise/>
        </div>
    );
}

export default ContentProduct;