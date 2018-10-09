import * as React from "react"
import { FormFieldset, FormFieldsetProps } from "../FormFieldset"
import { NativeLanguage } from "./NativeLanguage/NativeLanguage"
import { OtherLanguages } from "./OtherLanguages/OtherLanguages"

export const Languages: React.SFC<FormFieldsetProps> = (props) => {
    return (
        <FormFieldset {...props} titleText={__t("educationPage.languages.speak")} >
            <NativeLanguage isValid={props.isValid} languageList={languageList} title={__t("educationPage.languages.native")}/>
            <OtherLanguages otherLanguages={otherLanguages} levelList={levelList} title={__t("educationPage.languages.other")}/>
        </FormFieldset>
    )
}

const languageList = [
    { label: "русский", value: "русский" },
    { label: "английский", value: "английский" },
    { label: "немецкий", value: "немецкий" },
    { label: "фрацузкий", value: "фрацузкий" },
    { label: "испанский", value: "испанский" },
]

const otherLanguages = [
    { label: "английский", value: "английский" },
    { label: "китайский", value: "китайский" },
    { label: "немецкий", value: "немецкий" },
    { label: "фрацузкий", value: "фрацузкий" },
    { label: "испанский", value: "испанский" },
]

const levelList = [
    { label: "разговорный", value: "разговорный" },
    { label: "средний", value: "средний" },
    { label: "продвинутый", value: "продвинутый" },
]
