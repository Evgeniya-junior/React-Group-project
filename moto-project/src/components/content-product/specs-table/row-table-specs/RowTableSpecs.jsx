import s from "./RowTableSpecs.module.scss";


function RowTableSpecs(props) {
    return (
            <tr className={s.rowTableSpecs}>
                <td>{props.characteristic}</td>
                <td>{props.value}</td>
            </tr>
    );
}

export default RowTableSpecs;