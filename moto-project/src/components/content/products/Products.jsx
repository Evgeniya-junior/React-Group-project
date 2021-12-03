import s from "./Products.module.scss";
import ProductSection from './../../product-section/ProductSection';


function Products(props) {
    return (
        <div className={s.products}>
                <ProductSection title={props.sectionData.title} img={props.sectionData.img} link={props.sectionData.link}/>
                <ProductSection title={props.sectionData2.title} img={props.sectionData2.img} link={props.sectionData2.link}/>
                <ProductSection title={props.sectionData3.title} img={props.sectionData3.img} link={props.sectionData3.link}/>
                <ProductSection title={props.sectionData4.title} img={props.sectionData4.img} link={props.sectionData4.link}/>
                <ProductSection title={props.sectionData5.title} img={props.sectionData5.img} link={props.sectionData5.link}/>
                <ProductSection title={props.sectionData6.title} img={props.sectionData6.img} link={props.sectionData6.link}/>
        </div>
);
}

export default Products;