import * as React from "react"
import * as classNames from "classnames"
const CSS = require("./PublishVacancyFieldset.styl")

export interface PublishVacancyFieldsetProps {
    isVisible: boolean
    isValid: boolean
    titleText?: string
    value?: string
}

export class PublishVacancyFieldset extends React.PureComponent<PublishVacancyFieldsetProps> {

    render() {
        if (!this.props.isVisible) {
            return null
        }

        return (
            <fieldset className={classNames(CSS.fieldset, { [CSS.invalid]: !this.props.isValid })}>
                <h2 className={CSS.smallTitle}>{this.props.titleText}</h2>
                {this.props.children}
            </fieldset>
        )
    }
}
