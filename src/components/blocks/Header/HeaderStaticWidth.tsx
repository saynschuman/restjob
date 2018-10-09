import { Header, HeaderProps } from "./Header"
import * as React from "react"

const CSS = require("./Header.styl")

export const HeaderStaticWidth: React.SFC<HeaderProps> = (props) =>  {
    return <Header city={props.city} className={CSS.headerStatic}/>
}
