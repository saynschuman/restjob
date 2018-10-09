import * as React from "react"
import { Vacancy } from "../../../../types"
import {VacancyItem} from "../VacancyItem/VacancyItem"

export interface VacancyListProps {
  vacancies: Vacancy[]
}

export const VacancyList: React.SFC<VacancyListProps> = (props) => {
  const renderList = props.vacancies.map((vacancy, index) => {
      return(
          <VacancyItem key={index} vacancy={vacancy}/>
      )
  })
  return (
      <div>
          {renderList}
      </div>
  )
}
