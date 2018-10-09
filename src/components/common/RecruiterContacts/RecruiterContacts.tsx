import * as React from "react"
import {Vacancy} from "../../../types"
const CSS = require("./index.styl")

export interface RecruiterContactsProps {
    vacancy: Vacancy
}

export const RecruiterContacts: React.SFC<RecruiterContactsProps> = (props) => {
    return (
        <ul className={CSS.recruiterContacts}>
            <li>{props.vacancy.recruiterName}</li>
            <li>{props.vacancy.recruiterContacts}</li>
        </ul>
    )
}
