import * as React from "react"
import { FormFieldset, FormFieldsetProps } from "../FormFieldset"
import {Select} from "../components/Select/Select"
import classNames from "classnames"

const CSS = require("./Education.styl")

export const Education: React.SFC<FormFieldsetProps> = (props) => {
    return (
        <FormFieldset {...props} titleText={__t("educationPage.education")} >
            <div className={CSS.container}>
                <div
                    className={classNames({
                        [CSS.blockTitle]: true,
                        [CSS.notValid]: !props.isValid,
                    })}
                >
                    {__t("educationPage.edLevel")}
                </div>
                <Select
                    isValid={props.isValid}
                    name={"educationLevel"}
                    placeholder={__t("educationPage.selectEdLevel")}
                    data={educationList}
                    big
                />
            </div>
        </FormFieldset>
    )
}

const educationList = [
    { label: "Среднее", value: "Среднее" },
    { label: "Высшее", value: "Высшее" },
    { label: "Доктор наук", value: "Доктор наук" },
]
