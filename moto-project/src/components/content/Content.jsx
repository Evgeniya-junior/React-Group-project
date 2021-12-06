import moto from "./../../assets/images/moto.png";
import jetSki from "./../../assets/images/jet-ski.png";
import boat from "./../../assets/images/boat.png";
import snowMoto from "./../../assets/images/snow-moto.png";
import allMoto from "./../../assets/images/all-moto.png";
import engines from "./../../assets/images/engines.png";
import Products from "./products/Products";
import s from "./Content.module.scss";
import SliderBaner from "./slider-baner/SliderBaner";

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
      <section className={s.sliderBaner}>
        <SliderBaner/>
      </section>
      
      <section className={s.products}>
            <Products data={sectionData} data2={sectionData2} data3={sectionData3} data4={sectionData4} data5={sectionData5} data6={sectionData6}/>
      </section>
    </div>
        
        
  );
}

export default Content;