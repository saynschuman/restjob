import * as React from "react"
import { FormFieldset, FormFieldsetProps } from "../FormFieldset"
import {TextInputField} from "../../../../components/common/forms/TextInputField"

const CSS = require("./Contacts.styl")

export const Contacts: React.SFC<FormFieldsetProps> = (props) => {
    return (
        <FormFieldset {...props} titleText={__t("editCompany.contacts")}>
            <div className={CSS.textInputsWrapper}>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>{__t("editCompany.contactName")}</div>
                    <TextInputField width={329} name={`contactName`} />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>{__t("editCompany.phone")}</div>
                    <TextInputField placeholder={"+7 (___) ___ - __ - __"} width={158} name={`phone`} />
                </div>
            </div>
        </FormFieldset>
    )
}
