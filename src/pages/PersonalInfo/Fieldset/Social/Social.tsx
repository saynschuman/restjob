import * as React from "react"
import { FormFieldset, FormFieldsetProps } from "../FormFieldset"
import {TextInputField} from "../../../../components/common/forms/TextInputField"
const CSS = require("./Social.styl")

export const Social: React.SFC<FormFieldsetProps> = (props) => {
    return (
        <FormFieldset {...props} titleText={__t("personalInfoPage.links")}>
            <div className={CSS.courseWrapper}>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                        {__t("personalInfoPage.facebook")}
                    </div>
                    <TextInputField
                        className={CSS.bigInput}
                        name={`facebook`}
                    />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                        {__t("personalInfoPage.vk")}
                    </div>
                    <TextInputField
                        className={CSS.bigInput}
                        name={`vk`}
                    />
                </div>
            </div>
        </FormFieldset>
    )
}
