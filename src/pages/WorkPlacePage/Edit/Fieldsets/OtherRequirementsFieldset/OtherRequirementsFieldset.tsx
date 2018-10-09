import * as React from "react"
import { PublishVacancyFieldset, PublishVacancyFieldsetProps } from "../PublishVacancyFieldset"
import { FieldInputRadio } from "../../../../../components/common/forms/InputRadio/InputRadio"
import { FieldInputCheckbox } from "../../../../../components/common/forms/InputCheckbox/InputCheckbox"
const CSS = require("./OtherRequirementsFieldset.styl")

interface OtherRequirementsFieldsetProps extends PublishVacancyFieldsetProps {
    englishLevels: string[]
    cuisineSkills: string[]
    education: string[]
}

interface OtherRequirementsFieldsetState {
    listsVisible: boolean
}

export class OtherRequirementsFieldset extends React.PureComponent<OtherRequirementsFieldsetProps, OtherRequirementsFieldsetState> {

    state = {
        listsVisible: false,
    }

    showOtherRequirements = () => {
        this.setState({ listsVisible: true })
    }

    hideOtherRequirements = () => {
        this.setState({ listsVisible: false })
    }

    render() {
        return (
            <PublishVacancyFieldset {...this.props} titleText={__t("publishVacancyPage.listItem6")}>
                <div className={CSS.otherRequirementsText}>{__t("publishVacancyPage.otherRequirementsText")}</div>
                {
                    this.state.listsVisible
                        ?
                        <>
                            <div
                                className={CSS.otherRequirementsToggle}
                                onClick={this.hideOtherRequirements}
                            >
                                {__t("publishVacancyPage.otherRequirementsHide")}
                            </div>
                            <div className={CSS.otherRequirementsBlock}>
                                <h3 className={CSS.otherRequirementsSmallTitle}>
                                    {__t("publishVacancyPage.otherReqEnglishTitle")}
                                </h3>
                                {this.props.englishLevels.map((level, index) => (
                                    <FieldInputRadio
                                        value={level}
                                        key={index}
                                        title={level}
                                        name={"englishLevel"}
                                        className={CSS.reqRadio}
                                    />
                                ))}
                            </div>
                            <div className={CSS.otherRequirementsBlock}>
                                <h3 className={CSS.otherRequirementsSmallTitle}>
                                    {__t("publishVacancyPage.otherReqCuisineTitle")}
                                </h3>
                                {this.props.cuisineSkills.map((level, index) => (
                                    <FieldInputCheckbox
                                        key={index}
                                        title={level}
                                        value={level}
                                        className={CSS.reqCheckbox}
                                        name={"cuisineSkills"}
                                    />
                                ))}
                            </div>
                            <div className={CSS.otherRequirementsBlock}>
                                <h3 className={CSS.otherRequirementsSmallTitle}>
                                    {__t("publishVacancyPage.otherReqEducationTitle")}
                                </h3>
                                {this.props.education.map((level, index) => (
                                    <FieldInputRadio
                                        value={level}
                                        key={index}
                                        title={level}
                                        name={"education"}
                                        className={CSS.reqRadio}
                                    />
                                ))}
                            </div>
                        </>
                        :
                        <div
                            className={CSS.otherRequirementsToggle}
                            onClick={this.showOtherRequirements}
                        >
                            {__t("publishVacancyPage.otherRequirementsShow")}
                        </div>
                }
            </PublishVacancyFieldset>
        )
    }
}
