import * as React from "react"
import { FormFieldset, FormFieldsetProps } from "../FormFieldset"
import {TextInputField} from "../../../../components/common/forms/TextInputField"
import {Select} from "../components/Select/Select"
import {Field} from "formik"

const CSS = require("./AdditionalInfo.styl")

export const AdditionalInfo: React.SFC<FormFieldsetProps> = (props) => {
    return (
        <FormFieldset {...props} titleText={__t("editCompany.additionalInfo")}>
            <div className={CSS.textInputsWrapper}>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>{__t("editCompany.openDate")}</div>
                    <Select name={`openMonth`} data={months} width={158} />
                    <Select name={`openYear`} data={years} width={158} />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>{__t("editCompany.kitchen")}</div>
                    <TextInputField  width={329} name={`kitchen`} />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>{__t("editCompany.description")}</div>
                        <Field
                            name={`description`}
                            render={({ field }) => <textarea {...field} className={CSS.description} />}
                        />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>{__t("editCompany.website")}</div>
                    <TextInputField  width={329} name={`website`} />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>{__t("editCompany.vk")}</div>
                    <TextInputField  width={329} name={`vk`} />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>{__t("editCompany.fb")}</div>
                    <TextInputField  width={329} name={`fb`} />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>{__t("editCompany.inst")}</div>
                    <TextInputField  width={329} name={`inst`} />
                </div>
            </div>
        </FormFieldset>
    )
}

const months = [
    { label: "сентябрь", value: "сентябрь" },
    { label: "октябрь", value: "октябрь" },
    { label: "ноябрь", value: "ноябрь" },
    { label: "декабрь", value: "декабрь" },
    { label: "январь", value: "январь" },
]

const years = [
    { label: "1999", value: "2003" },
    { label: "2000", value: "2002" },
    { label: "2001", value: "2001" },
]
