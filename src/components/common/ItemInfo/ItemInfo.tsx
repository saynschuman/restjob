import * as React from "react"
const CSS = require("./index.styl")
import { Vacancy } from "../../../types"

export interface ItemInfoProps {
    vacancy: Vacancy
}

export const ItemInfo: React.SFC<ItemInfoProps> = (props) => {
    return (
        <div className={CSS.flRow}>
            <div className={CSS.iconContainer}>
                <div className={CSS.invitedIcon} />
            </div>
            <div className={CSS.textContainer}>
                <div className={CSS.titleGreen}>
                    {__t("employeePage.offeredVacancy")}{" "}
                    {props.vacancy.offerDate}
                </div>
                <div className={CSS.feedBackText}>
                    {props.vacancy.offerText ? props.vacancy.offerText : props.vacancy.invitationText}
                </div>
            </div>
        </div>
    )
}
