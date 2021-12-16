import s from "./SpecsTable.module.scss";
import RowTableSpecs from "./row-table-specs/RowTableSpecs";

const row1 = {
    characteristic: "Производитель",
    value: "Канада",
}

const row2 = {
    characteristic: "Количество мест, шт:",
    value: "3",
}

const row3 = {
    characteristic: "Мощность, л.с.",
    value: "155",
}

const row4 = {
    characteristic: "Тип двигателя",
    value: "Бензиновый",
}

const row5 = {
    characteristic: "Год выпуска",
    value: "2018",
}


function SpecsTable() {
    return (
        <div>
        <table className={s.specsTable}>
            <tbody>
                <RowTableSpecs 
                characteristic={row1.characteristic}
                value={row1.value}
                />
                <RowTableSpecs 
                characteristic={row2.characteristic}
                value={row2.value}
                />
                <RowTableSpecs 
                characteristic={row3.characteristic}
                value={row3.value}
                />
                <RowTableSpecs 
                characteristic={row4.characteristic}
                value={row4.value}
                />
                <RowTableSpecs 
                characteristic={row5.characteristic}
                value={row5.value}
                />
            </tbody>
        </table>

        <details>
                <summary>Показать еще</summary>
                <table className={s.specsTable}>
                    <tbody>
                        <RowTableSpecs 
                            characteristic={row1.characteristic}
                            value={row1.value}
                        />
                        <RowTableSpecs 
                            characteristic={row2.characteristic}
                            value={row2.value}
                        />
                        <RowTableSpecs 
                            characteristic={row3.characteristic}
                            value={row3.value}
                        />
                    </tbody>
                </table>
            </details>
        </div>
    );
}

export default SpecsTable;