import * as React from "react"
import * as classNames from "classnames"
import { BlueButton } from "../../../components/common/Buttons/BlueButton/BlueButton"
import { Vacancy } from "../../../types"
const CSS = require("./EmployeeOffersPage.styl")
import { CatalogItemVacancy } from "../../../components/common/CatalogItemVacancy/CatalogItemVacancy"
import { ItemInfo } from "../../../components/common/ItemInfo/ItemInfo"
import { RecruiterContacts } from "../../../components/common/RecruiterContacts/RecruiterContacts"
import { OfferRedponse } from "../../../components/common/OfferRedponse/OfferRedponse"
import { RequestForm } from "./RequestForm"

interface EmployeeOffersItemProps {
  vacancy: Vacancy
  className?: string
  withoutBottomInfo?: boolean
}

export class EmployeeOffersItem extends React.PureComponent<
  EmployeeOffersItemProps
> {
  state = {
      isOpenForm: false,
  }

  render() {
    const { vacancy } = this.props
    const offerIsNew = this.props.vacancy.offerIsNew
    const isAcceptedOffer = this.props.vacancy.isAccepted
    const isRejectedOffer = this.props.vacancy.isRejectedOffer
    const offerIsNoAnswer = this.props.vacancy.offerIsNoAnswer
    return (
      <div className={classNames(CSS.item, this.props.className, CSS.flColumn)}>
        <div className={CSS.flRow}>
            <CatalogItemVacancy vacancy={vacancy}/>
        </div>
        {isRejectedOffer && (
          <div className={CSS.column}>
              <ItemInfo vacancy={vacancy}/>
              <RecruiterContacts vacancy={vacancy}/>
              <OfferRedponse vacancy={vacancy} />
          </div>
        )}
        {offerIsNoAnswer && (
            <div className={CSS.column}>
                <ItemInfo vacancy={vacancy}/>
                <RecruiterContacts vacancy={vacancy}/>
                {!this.state.isOpenForm ? (
                    <div className={CSS.flRow}>
                        <div className={CSS.iconContainer} />
                        <div className={CSS.textContainer}>
                            <div className={CSS.requestForm}>
                                <BlueButton onClick={this.openForm} className={CSS.applyButton}>
                                    {__t("employeePage.answer")}
                                </BlueButton>
                                <div className={CSS.noAnswerLink}>{__t("employeePage.noAnswerOffer")}</div>
                                <div className={CSS.rejectLink}>{__t("employeePage.rejectOffer")}</div>
                                <div className={CSS.applyLink}>{__t("employeePage.applyOffer")}</div>
                            </div>
                        </div>
                    </div>
                ) : <RequestForm /> }
            </div>
        )}
          {isAcceptedOffer && (
              <div className={CSS.column}>
                  <ItemInfo vacancy={vacancy}/>
                  <RecruiterContacts vacancy={vacancy}/>
                  <OfferRedponse vacancy={vacancy} isAccepted/>
              </div>
          )}
          {offerIsNew && (
              <div className={CSS.column}>
                  <ItemInfo vacancy={vacancy}/>
                  <RecruiterContacts vacancy={vacancy}/>
                  {!this.state.isOpenForm ? (
                      <div className={CSS.flRow}>
                          <div className={CSS.iconContainer} />
                          <div className={CSS.textContainer}>
                              <div className={CSS.requestForm}>
                                  <BlueButton onClick={this.openForm} className={CSS.applyButton}>
                                      {__t("employeePage.answer")}
                                  </BlueButton>
                                  <div className={CSS.noAnswerLink}>{__t("employeePage.noAnswerOffer")}</div>
                                  <div className={CSS.rejectLink}>{__t("employeePage.rejectOffer")}</div>
                                  <div className={CSS.applyLink}>{__t("employeePage.applyOffer")}</div>
                              </div>
                          </div>
                      </div>
                  ) : <RequestForm /> }
              </div>
          )}
      </div>
    )
  }
  openForm = () => {
    this.setState({
      isOpenForm: !this.state.isOpenForm,
    })
  }
}
