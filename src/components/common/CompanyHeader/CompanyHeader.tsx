import * as React from "react"
const CSS = require("./CompanyHeader.styl")
import Recommended from "../Recommended/Recommended"
import classNames from "classnames"

interface CompanyHeaderProps {
  city: string
  orgname: string
  isRecommended?: boolean
}

export const CompanyHeader: React.SFC<CompanyHeaderProps> = (props) => {
    return (
        <header className={classNames({[CSS.recHeader]: props.isRecommended})}>
        <h1>{props.orgname}</h1>
        <h4>{props.city}</h4>
        {props.isRecommended && <Recommended />}
      </header>
    )
}
