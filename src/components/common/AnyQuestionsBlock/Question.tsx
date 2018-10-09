import * as React from "react"
import {QuestionProps} from "../../../types"
import {Link} from "react-router-dom"
const CSS = require("./AnyQuestionsBlock.styl")

export const Question: React.SFC<QuestionProps> = (props) => {
    return (
        <div>
            <div className={CSS.title}>{props.title}</div>
            { props.phone && (<div className={CSS.phone}>{props.phone}</div>)}
            <div className={CSS.description}>{props.description}</div>
            <Link to={"#"} className={CSS.linkName}>{props.linkName}</Link>
        </div>
    )
}
