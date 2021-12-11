import s from "./ContentProduct.module.scss";
import AddressTable from "./address-table/AddressTable";
import SearchShop from "./search-shop/SearchShop";
import Advise from "../content/advise/Advise";
import ProductCard from "./product-card/ProductCard";



function ContentProduct(props) {
    return (
        <div className={s.contentProduct}>
            <h2>3-я страница</h2>
            <main>
                <div>Крошки "(сделать)"</div>
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