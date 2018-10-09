import * as React from "react"
import {FormFieldset, FormFieldsetProps} from "../FormFieldset"
import {TextInputField} from "../../../../components/common/forms/TextInputField"

const CSS = require("./DesiredSalaryInput.styl")

export interface DesiredSalaryInputProps extends FormFieldsetProps {
    initialValue: number
}

export const DesiredSalaryInput: React.SFC<DesiredSalaryInputProps> = (props) => {
    return (
        <FormFieldset
            {...props}
            titleText={__t("desiredSalary.desiredSalary")}
        >
            <TextInputField className={CSS.salary} name={`salary`} type={"number"}/>
            <div className={CSS.currency}>{__t("desiredSalary.currency")}</div>
        </FormFieldset>
    )
}
