import * as React from "react"
import { Field } from "formik"
import { PercentCheckbox, TipsCheckbox } from "./SalaryCheckboxes/SalaryCheckboxes"
import { PublishVacancyFieldset, PublishVacancyFieldsetProps } from "../PublishVacancyFieldset"
import { TextInputField } from "../../../../components/common/forms/TextInputField"
const CSS = require("./DescriptionFieldset.styl")

export class DescriptionFieldset extends React.PureComponent<PublishVacancyFieldsetProps> {
    render() {
        return (
            <PublishVacancyFieldset {...this.props} titleText={__t("publishVacancyPage.listItem5")}>
                <Field
                    name={`vacancyDescription`}
                    render={({ field }) => <textarea {...field} className={CSS.descriptionTextArea} />}
                />

                <h3 className={CSS.descriptionSmallTitle}>{__t("publishVacancyPage.vacancyTitle")}</h3>

                <TextInputField
                    name={`vacancyTitle`}
                    className={CSS.vacancyTitleInput}
                />

                <h3 className={CSS.descriptionSmallTitle}>{__t("publishVacancyPage.salary")}</h3>

                <div className={CSS.salaryContainer}>

                    <TextInputField
                        name={`salaryBottom`}
                        type={"number"}
                        className={CSS.salaryInput}
                    />

                    -

                    <TextInputField
                        name={`salaryTop`}
                        type={"number"}
                        className={CSS.salaryInput}
                    />

                    <span className={CSS.salaryUnit}>{__t("publishVacancyPage.salaryCurrency")}</span>

                    +
                    <Field
                        name={`hasTips`}
                        render={({ field, form }) => {
                            return (
                                <TipsCheckbox
                                    onChange={form.handleChange}
                                    {...field}
                                    isChecked={form.values.hasTips}
                                />
                            )
                        }}
                    />

                    <Field
                        name={`hasPercent`}
                        render={({ field, form }) => {
                            return (
                                <PercentCheckbox
                                    onChange={form.handleChange}
                                    {...field}
                                    isChecked={form.values.hasPercent}
                                />
                            )
                        }}
                    />

                </div>

                <h3 className={CSS.descriptionSmallTitle}>{__t("publishVacancyPage.schedule")}</h3>

                <TextInputField
                    name={`sheduleFirst`}
                    className={CSS.scheduleInput}
                    inputAttributes={{ maxLength: 1 }}
                />
                /
                <TextInputField
                    name={`sheduleSecond`}
                    className={CSS.scheduleInput}
                    inputAttributes={{ maxLength: 1 }}
                />

            </PublishVacancyFieldset>
        )
    }
}
