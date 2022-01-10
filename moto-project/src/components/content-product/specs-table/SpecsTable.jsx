import s from "./SpecsTable.module.scss";
import RowTableSpecs from "./row-table-specs/RowTableSpecs";

function SpecsTable(props) {
    return (
        <div>
        <table className={s.specsTable}>
            <tbody>
                <RowTableSpecs 
                    td1={props.characteristicData[0][0]}
                    td2={props.characteristicData[0][1]}
                />
                <RowTableSpecs 
                    td1={props.characteristicData[1][0]}
                    td2={props.characteristicData[1][1]}
                />
                <RowTableSpecs 
                    td1={props.characteristicData[2][0]}
                    td2={props.characteristicData[2][1]}
                />
                <RowTableSpecs 
                    td1={props.characteristicData[3][0]}
                    td2={props.characteristicData[3][1]}
                />
                <RowTableSpecs 
                    td1={props.characteristicData[4][0]}
                    td2={props.characteristicData[4][1]}
                />
            </tbody>
        </table>

        <details>
                <summary>Показать еще</summary>
                <table className={s.specsTable}>
                    <tbody>
                        <RowTableSpecs 
                            td1={props.characteristicData[5][0]}
                            td2={props.characteristicData[5][1]}
                        />
                        <RowTableSpecs 
                            td1={props.characteristicData[6][0]}
                            td2={props.characteristicData[6][1]}
                        />
                        <RowTableSpecs 
                            td1={props.characteristicData[7][0]}
                            td2={props.characteristicData[7][1]}
                        />
                        <RowTableSpecs 
                            td1={props.characteristicData[8][0]}
                            td2={props.characteristicData[8][1]}
                        />
                        <RowTableSpecs 
                            td1={props.characteristicData[9][0]}
                            td2={props.characteristicData[9][1]}
                        />
                    </tbody>
                </table>
            </details>
        </div>
    );
}

export default SpecsTable;