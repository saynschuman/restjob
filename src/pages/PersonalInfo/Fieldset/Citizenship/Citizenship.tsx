import * as React from "react"
import { FormFieldset, FormFieldsetProps } from "../FormFieldset"
import {TextInputField} from "../../../../components/common/forms/TextInputField"
import {Select} from "../components/Select/Select"
const CSS = require("./Citizenship.styl")

export const Citizenship: React.SFC<FormFieldsetProps> = (props) => {
    return (
        <FormFieldset {...props} titleText={__t("personalInfoPage.citizenship")} required>
            <div className={CSS.courseWrapper}>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                        {__t("personalInfoPage.nationality")}
                    </div>
                    <Select
                        name={`nationality`}
                        data={nationalities}
                        nationality
                    />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                        {__t("personalInfoPage.bornPlace")}
                    </div>
                    <TextInputField
                        className={CSS.bigInput}
                        name={`bornPlace`}
                    />
                    <div className={CSS.example} dangerouslySetInnerHTML={{ __html: example }} />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                        {__t("personalInfoPage.live")}
                    </div>
                    <TextInputField
                        className={CSS.bigInput}
                        name={`live`}
                    />
                    <div className={CSS.example} dangerouslySetInnerHTML={{ __html: example }} />
                </div>
                <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                        {__t("personalInfoPage.move")}
                    </div>
                    <Select
                        name={`move`}
                        data={move}
                        gender
                    />
                </div>
            </div>
        </FormFieldset>
    )
}

const nationalities = [
    { label: "русский", value: "русский" },
    { label: "украинец", value: "украинец" },
    { label: "кавказец", value: "кавказец" },
    { label: "китаец", value: "китаец" },
]

const move = [
    { label: "да", value: "да" },
    { label: "нет", value: "нет" },
]

const example = `Например, <span>Москва</span> или <span>Санкт-Петербург</span>`
