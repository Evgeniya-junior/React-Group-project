import s from "./RowTableSpecs.module.scss";

// const specificationsData = [
//     ['Производитель', 'Канада'],
//     ['Количество мест, шт:', 3],
//     ['Мощность, л.с.', 155],
//     ['Тип двигателя', 'Бензиновый'],
//     ['Год выпуска', '2018'],
// ]

function RowTableSpecs(props) {
    return (
            <tr className={s.rowTableSpecs}>
                <td>{props.td1}</td>
                <td>{props.td2}</td>
            </tr>
    );
}

export default RowTableSpecs;