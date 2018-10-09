import * as React from "react"
import { Link } from "react-router-dom"

const CSS = require("./NotUpturned.styl")

interface Price {
  label: string
  value: string
}

export interface NotUpturned {
  prices: Price[]
  lastUpturnDate: string
}

export const NotUpturned: React.SFC<NotUpturned> = (props) => {
  const renderPrices = props.prices.map((price, index) => {
    return (
      <div className={CSS.prices} key={index}>
        <Link to={"#"}>
          <span>{price.label}</span> - {price.value}
        </Link>
      </div>
    )
  })
  return (
    <div className={CSS.NotUpturnedContainer}>
      <div className={CSS.lastUpturnDate}>
        <div>{__t("myVacancies.lastUpTurnDate")}</div>
        <div>{props.lastUpturnDate}</div>
      </div>
      <div className={CSS.prices}>
        <div className={CSS.offerUpturn}>
          <Link to={"#"}>
            <span>{__t("myVacancies.upTurnVacancy")}</span> -{" "}
            {__t("myVacancies.upTurnPrice")}
          </Link>
        </div>
      </div>
      <div className={CSS.title}>{__t("myVacancies.vacancyUpturn")}</div>
      {renderPrices}
    </div>
  )
}
