import * as React from "react"
import * as classNames from "classnames"
const CSS = require("./FormFieldset.styl")

export interface FormFieldsetProps {
  isVisible: boolean
  isValid: boolean
  titleText?: string
}

export class FormFieldset extends React.PureComponent<FormFieldsetProps> {
  render() {
    if (!this.props.isVisible) {
      return null
    }

    return (
      <fieldset
        className={classNames(CSS.fieldset, {
          [CSS.invalid]: !this.props.isValid,
        })}
      >
        <h2 className={CSS.smallTitle}>{this.props.titleText}</h2>
        {this.props.children}
      </fieldset>
    )
  }
}
