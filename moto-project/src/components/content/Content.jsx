import s from "./Content.module.scss";
import ProductSection from './../../components/product-section/ProductSection';
import moto from "./../../assets/images/moto.png";
import jetSki from "./../../assets/images/jet-ski.png";
import boat from "./../../assets/images/boat.png";
import snowMoto from "./../../assets/images/snow-moto.png";
import allMoto from "./../../assets/images/all-moto.png";
import engines from "./../../assets/images/engines.png";
import Products from "./products/Products";



function Content(props) {
  const sectionData={
    title:"Квадроциклы",
    img: moto,
    link:"moto"
  }
  const sectionData2={
    title:"Гидроциклы",
    img: jetSki,
    link:"jetSki"
  }
  const sectionData3={
    title:"Катера",
    img: boat,
    link:"boat"
  }
  const sectionData4={
    title:"Снегоходы",
    img: snowMoto,
    link:"snowMoto"
  }
  const sectionData5={
    title:"Вездеходы",
    img: allMoto,
    link:"allMoto"
  }
  const sectionData6={
    title:"Двигатели",
    img: engines,
    link:"engines"
  }
  return (
        <div className={s.content}>
            <Products data={data} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6}/>
        </div>
  );
}

export default Content;