import * as React from "react"
import { Field } from "formik"
import { VacancyType, VacancyTypeProps } from "./VacancyType/VacancyType"
const CSS = require("./VacancyTypeSelect.styl")

interface VacancyTypeSelectProps {
    isEnoughMoney: boolean
    vacancyTypes: VacancyTypeProps[]
    isVisible: boolean
}

export const VacancyTypeSelect: React.SFC<VacancyTypeSelectProps> = (props) => {
    if (!props.isVisible) {
        return null
    }

    return (
        <div className={CSS.vacancyTypeSelect}>
            {!props.isEnoughMoney && <span className={CSS.notEnoughMoney} dangerouslySetInnerHTML={{ __html: __t("publishVacancyPage.notEnoughMoneyText") }} />}
            <h2 className={CSS.smallTitle}>{__t("publishVacancyPage.publishWay")}</h2>
            <ul className={CSS.vacancyTypesContainer}>
                {props.vacancyTypes.map((vacancyType, index) => (
                    <Field
                        key={index}
                        name={`vacancyType`}
                        render={({ field, form }) => {
                            const isChecked = form.values.vacancyType === vacancyType.title
                            return (
                                <VacancyType
                                    {...vacancyType}
                                    key={index}
                                    isChecked={isChecked}
                                    onClick={() => {
                                        if (!vacancyType.isEnoughMoney) {
                                            return
                                        }
                                        form.setFieldValue(`vacancyType`, vacancyType.title)
                                    }}
                                />
                            )
                        }}
                    />
                ))}
            </ul>
        </div>
    )
}
