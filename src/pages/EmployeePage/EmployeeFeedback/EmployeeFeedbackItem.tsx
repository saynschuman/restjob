import * as React from "react"
import * as classNames from "classnames"
import { Vacancy } from "../../../types"
const CSS = require("./EmployeeFeedbackPage.styl")
import { CatalogItemVacancy } from "../../../components/common/CatalogItemVacancy/CatalogItemVacancy"
import { ItemInfo } from "../../../components/common/ItemInfo/ItemInfo"
import { RecruiterContacts } from "../../../components/common/RecruiterContacts/RecruiterContacts"
import {ShowFeedback} from "./ShowFeedback"

interface EmployeeFeedbackItemProps {
  vacancy: Vacancy
  className?: string
  withoutBottomInfo?: boolean
}

export class EmployeeFeedbackItem extends React.PureComponent<
  EmployeeFeedbackItemProps
> {

  render() {
    const { vacancy } = this.props
    const isRejected = this.props.vacancy.isRejection
    const isNoAnswer = this.props.vacancy.isNoAnswer
    const isInvited = this.props.vacancy.isInvitation
    return (
      <div className={classNames(CSS.item, this.props.className, CSS.flColumn)}>
        <div className={CSS.flRow}>
            <CatalogItemVacancy vacancy={vacancy}/>
        </div>
        {isRejected && (
          <div className={CSS.flRow}>
            <div className={CSS.iconContainer}>
              <div className={CSS.rejectionIcon} />
            </div>
            <div className={CSS.textContainer}>
              <div className={CSS.notReadyText}>
                {__t("employeePage.rejectedTitle")}
                {" "}
                {this.props.vacancy.rejectionDate}
              </div>
              <div className={CSS.feedBackText}>
                {this.props.vacancy.rejectionText}
              </div>
            </div>
          </div>
        )}
        {isNoAnswer && (
          <div className={CSS.flRow}>
            <div className={CSS.iconContainer}>
              <div className={CSS.notAnsweredIcon} />
            </div>
            <div className={CSS.textContainer}>
              <div className={CSS.titleGray}>
                {__t("employeePage.notAnswered")}
              </div>
              <div className={CSS.feedBackText}>
                {this.props.vacancy.notAnsweredText}
              </div>
            </div>
          </div>
        )}
        {isInvited && (
          <div className={CSS.column}>
              <ItemInfo vacancy={vacancy}/>
              <RecruiterContacts vacancy={vacancy}/>
          </div>
        )}
          <ShowFeedback vacancy={vacancy}/>
      </div>
    )
  }
}
