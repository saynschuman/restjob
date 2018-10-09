import * as React from "react"
import { FormFieldset, FormFieldsetProps } from "../FormFieldset"
import {TextInputField} from "../../../../components/common/forms/TextInputField"
import { FieldInputRadio } from "../../../../components/common/forms/InputRadio/InputRadio"

const CSS = require("./ContactInfo.styl")

export const ContactInfo: React.SFC<FormFieldsetProps> = (props) => {
    return (
        <FormFieldset {...props} titleText={__t("personalInfoPage.contactInfo")} required>
            <div className={CSS.courseWrapper}>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                        {__t("personalInfoPage.phone")}
                    </div>
                    <TextInputField
                        className={CSS.middleInput}
                        name={`phone`}
                        placeholder={`+7 (___) ___ - __ - __`}
                    />
                    <FieldInputRadio
                        title={__t("personalInfoPage.hide")}
                        name={"visibility"}
                        value={"hidden"}
                        className={CSS.radio}
                    />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                        {__t("personalInfoPage.email")}
                    </div>
                    <TextInputField
                        className={CSS.bigInput}
                        name={`email`}
                    />
                </div>
            </div>
        </FormFieldset>
    )
}
