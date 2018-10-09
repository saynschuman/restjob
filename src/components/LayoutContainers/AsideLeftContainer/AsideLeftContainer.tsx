import * as React from "react"

const CSS = require("./AsideLeftContainer.styl")

export const AsideLeftContainer: React.SFC = (props) => {
    return (
        <aside className={CSS.asideLeft}>
            {props.children}
        </aside>
    )
}
