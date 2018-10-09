import * as React from "react"
import { FormFieldset, FormFieldsetProps } from "../FormFieldset"
import {TextInputField} from "../../../../components/common/forms/TextInputField"
import {Select} from "../components/Select/Select"
const CSS = require("./Personal.styl")

export const Personal: React.SFC<FormFieldsetProps> = (props) => {
    return (
        <FormFieldset {...props} titleText={__t("personalInfoPage.FIO")} required>
            <div className={CSS.textInputsWrapper}>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                        {__t("personalInfoPage.surname")}
                    </div>
                    <TextInputField
                        className={CSS.bigInput}
                        name={`surname`}
                    />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                        {__t("personalInfoPage.name")}
                    </div>
                    <TextInputField
                        className={CSS.bigInput}
                        name={`name`}
                    />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                        {__t("personalInfoPage.fatherName")}
                    </div>
                    <TextInputField
                        className={CSS.bigInput}
                        name={`fatherName`}
                    />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                        {__t("personalInfoPage.birthDay")}
                    </div>
                    <Select
                        name={`birthDay`}
                        data={days}
                        day
                    />
                    <Select
                        name={`birthMonth`}
                        data={months}
                        month
                    />
                    <Select
                        name={`birthYear`}
                        data={years}
                        year
                    />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                        {__t("personalInfoPage.gender")}
                    </div>
                    <Select
                        name={`gender`}
                        data={gender}
                        gender
                    />
                </div>
            </div>
        </FormFieldset>
    )
}

const days = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
]

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

const gender = [
    { label: "Мужской", value: "Мужской" },
    { label: "Женский", value: "Женский" },
]
