import * as React from "react"
const CSS = require("./Bonuses.styl")

interface BonusesProps {
    bonuses?: string
}

export const Bonuses: React.SFC<BonusesProps> = (props) => {
    return (
        <div className={CSS.wrapper}>
            <img src={props.bonuses} alt=""/>
        </div>
    )
}
