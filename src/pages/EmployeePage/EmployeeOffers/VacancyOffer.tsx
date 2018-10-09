import * as React from "react"
import { EmployeeOffersList } from "./EmployeeOffersList"
import { Vacancy } from "../../../types"
const CSS = require("./EmployeeOffersPage.styl")

export interface VacancyOfferProps {
    vacancies: Vacancy[]
    title: string
}

export const VacancyOffer: React.SFC<VacancyOfferProps> = (props) => {
    return (
        <section className={CSS.catalogSection}>
            <div className={CSS.catalogSectionTitle}>
                <span className={CSS.name}>{props.title}</span>
            </div>
            <EmployeeOffersList vacancyList={props.vacancies}/>
        </section>
    )
}
