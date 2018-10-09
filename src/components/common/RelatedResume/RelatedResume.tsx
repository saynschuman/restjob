import * as React from "react"
import { Link } from "react-router-dom"

const CSS = require("./RelatedResume.styl")

export interface RelatedResumeProps {
    avatar: string
    name: string
    company: string
    position: string
}

export const RelatedResume: React.SFC<RelatedResumeProps> = (props) => {
    return (
        <div className={CSS.resumeContainer}>
            <div className={CSS.avatar}>
                <img src={props.avatar} alt={props.name}/>
            </div>
            <div className={CSS.resumeInfo}>
                <Link to={"#"}>
                    <div className={CSS.name}>{props.name}</div>
                </Link>
                <div className={CSS.company}>{props.company}</div>
                <div className={CSS.position}>{props.position}</div>
            </div>
        </div>
    )
}
