import * as React from "react"
import { Vacancy } from "../../../../../types"
import { CatalogItemVacancy } from "../../../../../components/common/CatalogItemVacancy/CatalogItemVacancy"
import classNames from "classnames"
import { RecruiterContacts } from "../../../../../components/common/RecruiterContacts/RecruiterContacts"
import { ReviewList } from "./reviews/ReviewList/ReviewList"

const CSS = require("./VacancyInfo.styl")

export interface VacancyInfoProps {
  vacancy: Vacancy
}

export const VacancyInfo: React.SFC<VacancyInfoProps> = (props) => {
  return (
    <div className={classNames({ [CSS.itemBlock]: true, [CSS.mainElement]: true })} >
      <div className={CSS.itemHeader}>
        <CatalogItemVacancy vacancy={props.vacancy} shortInfo />
        <div className={CSS.contactsName}>
          {__t("myVacancies.contactsName")}
        </div>
        <RecruiterContacts vacancy={props.vacancy} />
      </div>
      <ReviewList vacancy={props.vacancy} />
    </div>
  )
}
