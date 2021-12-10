import s from "./ContentProduct.module.scss";
import AddressTable from "./address-table/AddressTable";
import SearchShop from "./search-shop/SearchShop";
import Advise from "../content/advise/Advise";



function ContentProduct(props) {
    return (
        <div className={s.contentProduct}>
            <h2>3-я страница</h2>
            <main>
                <div>Крошки "(сделать)"</div>
                <div>Карточка товара "(сделать)"</div>
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