import * as React from "react"
import { PublishVacancyFieldset, PublishVacancyFieldsetProps } from "../PublishVacancyFieldset"
import { FieldInputCheckboxSingle } from "../../../../components/common/forms/InputCheckbox/InputCheckbox"
import { TextInputField } from "../../../../components/common/forms/TextInputField"

const CSS = require("./ContactsFieldset.styl")

export class ContactsFieldset extends React.PureComponent<PublishVacancyFieldsetProps> {
    render() {
        return (
            <PublishVacancyFieldset {...this.props} titleText={__t("publishVacancyPage.listItem7")}>
                <div className={CSS.contactInputsContainer}>
                    <div className={CSS.contactInput}>
                        <label className={CSS.contactInputLabel} htmlFor={"contactsName"}>{__t("publishVacancyPage.contactsName")}</label>
                        <TextInputField
                            name={"contactsName"}
                            className={CSS.contactInputName}
                            inputAttributes={{ id: "contactsName" }}
                        />
                    </div>
                    <div className={CSS.contactInput}>
                        <label className={CSS.contactInputLabel} htmlFor={"contactsPhone"}>{__t("publishVacancyPage.contactsPhone")}</label>
                        <TextInputField
                            type={"tel"}
                            name={"contactsPhone"}
                            className={CSS.contactInputPhone}
                            value={this.props.value}
                            inputAttributes={{
                                id: "contactsPhone",
                                placeholder: "+7 (__)___-__-__",
                            }}
                        />
                    </div>
                </div>
                <FieldInputCheckboxSingle
                    name={"hidePhose"}
                    title={__t("publishVacancyPage.contactsCheckboxHidePhone")}
                    className={CSS.contactCheckbox}
                />
                <FieldInputCheckboxSingle
                    name={"allowNoResume"}
                    title={__t("publishVacancyPage.contactsCheckboxAllowNoResume")}
                    className={CSS.contactCheckbox}
                />
                <FieldInputCheckboxSingle
                    name={"createTemplate"}
                    title={__t("publishVacancyPage.contactsCheckboxCreateTemplate")}
                    className={CSS.contactCheckbox}
                />
            </PublishVacancyFieldset>
        )
    }
}
