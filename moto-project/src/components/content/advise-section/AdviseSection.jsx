import s from "./AdviseSection.module.scss";
import AdviseProducts from "./../advise-products/AdviseProducts";





function AdviseSection(props) {


    return (
        <div className={s.adviseSection}>
            <AdviseProducts  image={props.data.image} image2={props.data.image2} headline={props.data.headline} text={props.data.text} link2={props.data.link2}/>
            <AdviseProducts  image={props.data2.image}  headline={props.data2.headline} text={props.data2.text} btn2={props.data2.btn2}/>
            <AdviseProducts  image={props.data3.image} image2={props.data3.image2} headline={props.data3.headline} text={props.data3.text} link2={props.data3.link2}/>
            <AdviseProducts  image={props.data4.image} headline={props.data4.headline} text={props.data4.text}/>
    </div>
    );

}

export default AdviseSection;