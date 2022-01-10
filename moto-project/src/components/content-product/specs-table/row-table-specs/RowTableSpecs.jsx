import s from "./RowTableSpecs.module.scss";

function RowTableSpecs(props) {
    return (
            <tr className={s.rowTableSpecs}>
                <td>{props.td1}</td>
                <td>{props.td2}</td>
            </tr>
    );
}

export default RowTableSpecs;