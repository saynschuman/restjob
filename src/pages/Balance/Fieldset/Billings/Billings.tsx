import * as React from "react"
import {Bill} from "../../../../types"
import {GreenButton} from "../../../../components/common/Buttons/GreenButton/GreenButton"
import {BlueButton} from "../../../../components/common/Buttons/BlueButton/BlueButton"
import { Link } from "react-router-dom"
const CSS = require("./Billings.styl")

interface BillingsProps {
    bonuses?: any
    bills?: Bill[]
}

export const Billings: React.SFC<BillingsProps> = (props) => {
    return (
        <div className={CSS.billsWrapper}>
            <h2 className={CSS.title}>{__t("balance.bills")}</h2>
            <table className={CSS.table}>
                <thead>
                <tr>
                    <th>{__t("balance.bilNum")}</th>
                    <th>{__t("balance.date")}</th>
                    <th>{__t("balance.entity")}</th>
                    <th>{__t("balance.sum")}</th>
                    <th>{__t("balance.status")}</th>
                    <th>{__t("balance.billAct")}</th>
                </tr>
                </thead>
                <tbody>
                {props.bills.length > 0 &&
                props.bills.map((bill, index) => {
                    return (
                        <tr key={index}>
                            <td>{bill.bilNum}</td>
                            <td>{bill.date}</td>
                            <td>{bill.entity}</td>
                            <td>{bill.sum}</td>
                            <td>{bill.status}</td>
                            <td>
                                {bill.billLink && (
                                    <Link to={bill.billLink}>
                                        <BlueButton>{__t("balance.bill")}</BlueButton>
                                    </Link>
                                )}
                                {bill.actLink && (
                                    <Link to={bill.actLink}>
                                        <GreenButton>{__t("balance.act")}</GreenButton>
                                    </Link>
                                )}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
