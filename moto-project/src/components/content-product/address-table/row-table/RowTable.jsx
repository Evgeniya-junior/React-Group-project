import Button from "../../components/button/Button";
import s from "./RowTable.module.scss";


function RowTable(props) {
    return (
            <tr className={s.rowTable}>
                <td>{props.address}</td>
                <td className={s.workingHours}>
                    <div>
                        <span>пн-сб:</span>
                        <span>{props.weekday}</span>
                    </div>
                    <div>
                        <span>вс:</span>
                        <span>{props.weekends}</span>
                    </div>
                </td>
                <td>{props.availability}</td>
                <td>{props.number}</td>
                <td><Button title="Купить"/></td>
            </tr>
    );
}

export default RowTable;