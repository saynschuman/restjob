import * as React from "react"
import * as classNames from "classnames"
const CSS = require("./FormFieldset.styl")

export interface FormFieldsetProps {
  isVisible: boolean
  isValid: boolean
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
        {this.props.children}
      </fieldset>
    )
  }
}
