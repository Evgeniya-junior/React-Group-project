import s from './AdviseProducts.module.scss'







function AdviseProducts(props) {
    return (
            <div className={s.wrapper}>
                <img className={s.image} src={props.image} alt="" />
                <img className={s.image2} src={props.image2} alt="" />
                <h2 className={s.headline}>{props.headline}</h2>
                <text className={s.text}>{props.text}</text>
                <button className={s.btn}>Сообщить о поступлении</button>
            </div>
    );
}

export default AdviseProducts;