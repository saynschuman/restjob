import * as React from "react"
import { RelatedResume } from "../../../../../components/common/RelatedResume/RelatedResume"
import {RelatedResumes} from "../../../../../types"

const CSS = require("./RelatedResumeList.styl")

export interface RelatedResumeListProps {
    resumeList: RelatedResumes[]
}

export const RelatedResumeList: React.SFC<RelatedResumeListProps> = (props) => {
    const renerList = props.resumeList.map((resume, index) => {
        return(
                <RelatedResume
                    key={index}
                    avatar={resume.avatar}
                    name={resume.name}
                    company={resume.company}
                    position={resume.position}
                />
        )
    })
    return (
        <div className={CSS.itemBlock}>
            <div className={CSS.title}>{__t("myVacancies.relatedResume")}</div>
            {renerList}
        </div>
    )
}
