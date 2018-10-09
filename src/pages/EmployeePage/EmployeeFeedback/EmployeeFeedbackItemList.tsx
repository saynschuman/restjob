import * as React from "react"
import { EmployeeFeedbackItem } from "./EmployeeFeedbackItem"
const CSS = require("./EmployeeFeedbackPage.styl")
import { Vacancy } from "../../../types"

export interface EmployeeFeedbackItemListProps {
    vacancies: Vacancy[]
    title: string
}

export const EmployeeFeedbackItemList: React.SFC<EmployeeFeedbackItemListProps> = (props) => {
    return (
        <section className={CSS.catalogSection}>
            <div className={CSS.catalogSectionTitle}>
                <div className={CSS.name}>{props.title}</div>
            </div>
            {props.vacancies
                .map((vacancy) => (
                    <EmployeeFeedbackItem vacancy={vacancy} key={vacancy.id} />
                ))}
        </section>
    )
}
