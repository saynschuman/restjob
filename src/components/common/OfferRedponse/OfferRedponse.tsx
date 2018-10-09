import * as React from "react"
import {avatarMock} from "../../../mocks"
import {Vacancy} from "../../../types"
const CSS = require("./index.styl")
import * as classNames from "classnames"

export interface OfferRedponseProps {
  vacancy: Vacancy
  isAccepted?: boolean
}

export const OfferRedponse: React.SFC<OfferRedponseProps> = (props) => {
  const isAccepted = props.isAccepted
  const rejectedOfferText = props.vacancy.rejectedOfferText
  const acceptanceText = props.vacancy.acceptanceText
  const acceptanceDate = props.vacancy.acceptanceDate
  const rejectedOfferDate = props.vacancy.rejectedOfferDate
  return (
    <div className={CSS.flRow}>
      <div className={CSS.iconContainer}>
        <span className={CSS.avatar}>
          <img src={avatarMock} alt="" />
        </span>
      </div>
      <div className={CSS.textContainer}>
        <div
          className={classNames(
            {[CSS.feedBackTextRejected]: !isAccepted},
            {[CSS.titleGreen]: isAccepted},
          )}>
          {isAccepted
            ? __t("employeePage.youAcceptedOffer") + " "
            : __t("employeePage.youRejectedOffer") + " "}
          {isAccepted ? acceptanceDate : rejectedOfferDate}
        </div>
        {!isAccepted ? (
          rejectedOfferText ? (
            <div className={CSS.feedBackText}>{rejectedOfferText}</div>
          ) : (
            <div className={CSS.feedBackText}>
              {__t("employeePage.noComments")}
            </div>
          )
        ) : acceptanceText ? (
          <div className={CSS.feedBackText}>{acceptanceText}</div>
        ) : (
          <div className={CSS.feedBackText}>
            {__t("employeePage.noComments")}
          </div>
        )}
      </div>
    </div>
  )
}
