import * as React from "react"
import * as classNames from "classnames"
const CSS = require("./StatusSelect.styl")

export interface StatusTypeProps {
  icon: string
  title: string
  description: string
  isChecked?: boolean
  onClick?(): any
}

export class StatusSelect extends React.PureComponent<StatusTypeProps> {
  render() {
    return (
      <li
        className={classNames(CSS.container, {
          [CSS.notAvailable]: false,
          [CSS.isChecked]: this.props.isChecked,
        })}
        onClick={this.props.onClick}>
        <div
          className={CSS.titleContainer}
          style={{backgroundImage: `url(${this.props.icon}`}}>
          <h2 className={CSS.title}>{this.props.title}</h2>
        </div>
        <div
          className={CSS.description}
          dangerouslySetInnerHTML={{__html: this.props.description}}
        />
      </li>
    )
  }
}
