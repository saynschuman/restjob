import * as React from "react"
import * as classNames from "classnames"
import { InputCheckboxProps } from "../../../../../../components/common/forms/InputCheckbox/InputCheckbox"
const CSS = require("./SalaryCheckboxes.styl")

class SalaryCheckbox extends React.PureComponent<InputCheckboxProps> {
    render() {
        return (
            <>
                <input
                    className={CSS.input}
                    type={"checkbox"}
                    name={this.props.name}
                    value={this.props.name}
                    id={this.props.name}
                    onChange={this.props.onChange}
                    checked={this.props.isChecked}
                />
                <label
                    htmlFor={this.props.name}
                    className={classNames(
                        CSS.container,
                        this.props.className,
                        { [CSS.isActive]: this.props.isChecked },
                    )}
                >
                    {this.props.children}
                </label>
            </>
        )
    }
}

export const TipsCheckbox: React.SFC<InputCheckboxProps> = (props) => {
    return (
        <SalaryCheckbox
            onChange={props.onChange}
            className={CSS.tipsCheckbox}
            name={props.name}
            isChecked={props.isChecked}
        >
            {__t("publishVacancyPage.tips")}
        </SalaryCheckbox>
    )
}

export const PercentCheckbox: React.SFC<InputCheckboxProps> = (props) => {
    return (
        <SalaryCheckbox
            onChange={props.onChange}
            className={CSS.percentCheckbox}
            name={props.name}
            isChecked={props.isChecked}
        >
            {__t("publishVacancyPage.percent")}
        </SalaryCheckbox>
    )
}
