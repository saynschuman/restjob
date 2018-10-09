import * as React from "react"
import { EmployeeOffersItem } from "./EmployeeOffersItem"
import { Vacancy } from "../../../types"

export interface EmployeeOffersListProps {
  vacancyList: Vacancy[]
}

export const EmployeeOffersList: React.SFC<EmployeeOffersListProps> = (props) => {
  return (
    <div>
      {props.vacancyList.map((vacancy) => (
        <EmployeeOffersItem vacancy={vacancy} key={vacancy.id} />
      ))}
    </div>
  )
}
