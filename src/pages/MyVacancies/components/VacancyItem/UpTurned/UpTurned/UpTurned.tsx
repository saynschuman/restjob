import * as React from "react"
import { Vacancy } from "../../../../../../types"
import { NotUpturned } from "../NotUpturned/NotUpturned"

const CSS = require("./UpTurned.styl")

export interface UpTurnedProps {
    vacancy: Vacancy
}

export const UpTurned: React.SFC<UpTurnedProps> = (props) => {
  const renderContent = (plan) => {
    switch (plan) {
      case "InActiveSearch":
        return (
            <div className={CSS.upTurnBlock}>
                <div className={CSS.title}>{__t("myVacancies.inActiveSearch.title")}</div>
                <div className={CSS.iconStar} />
                <div className={CSS.info}>
                    {__t("myVacancies.inActiveSearch.lightText")}
                    <span className={CSS.boldText}>
                        {__t("myVacancies.inActiveSearch.boldText")}
                        {props.vacancy.expiryDate}
                        </span>
                </div>
            </div>
        )
        case "Fixed":
            return (
                <div>
                    <div className={CSS.title}>{__t("myVacancies.fixed.title")}</div>
                    <div className={CSS.lightning} />
                    <div className={CSS.info}>
                            {__t("myVacancies.fixed.lightText")}
                        <span className={CSS.boldText}>
                            {__t("myVacancies.fixed.boldText")}
                            {props.vacancy.expiryDate}
                        </span>
                    </div>
                </div>
            )
      default:
        return (
            <NotUpturned
                lastUpturnDate={props.vacancy.lastUpTurnDate}
                prices={prices}
            />
        )
    }
  }
  return(
      <div className={CSS.itemBlock} >
          {renderContent(props.vacancy.upTurnPlan)}
      </div>
  )
}

const prices = [
    {
        label: "Интернет-максимум",
        value: "1400 ₽",
    },
    {
        label: "Выделить и закрепить",
        value: "1100 ₽",
    },
    {
        label: "В активном поиске",
        value: "750 ₽",
    },
]
