import * as React from "react"

const CSS = require("./AsideRightContainer.styl")

export const AsideRightContainer: React.SFC = (props) => {
    return (
        <aside className={CSS.asideRight}>
            {props.children}
        </aside>
    )
}
