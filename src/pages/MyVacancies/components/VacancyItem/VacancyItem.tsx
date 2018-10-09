import * as React from "react"
import { Vacancy } from "../../../../types"
import { RelatedResumeList } from "./RelatedResumeList/RelatedResumeList"
import { UpTurned } from "./UpTurned/UpTurned/UpTurned"
import { VacancyInfo } from "./VacancyInfo/VacancyInfo"
import { VacancyArchived } from "./VacancyArchived/VacancyArchived"
import { Links } from "./LinksBlock/Links"

const CSS = require("./VacancyItem.styl")

export interface VacancyItemProps {
  vacancy: Vacancy
}

export const VacancyItem: React.SFC<VacancyItemProps> = (props) => {
  return (
    <div className={CSS.itemWrapper}>
      {props.vacancy.isArchived ? (
        <div className={CSS.itemContainer}>
          <VacancyInfo vacancy={props.vacancy} />
          <VacancyArchived archDate={props.vacancy.archDate}/>
        </div>
      ) : (
        <div className={CSS.itemContainer}>
          <VacancyInfo vacancy={props.vacancy} />
          <UpTurned vacancy={props.vacancy} />
          <RelatedResumeList resumeList={props.vacancy.RelatedResume} />
        </div>
      )}
      <Links id={props.vacancy.id}/>
    </div>
  )
}
