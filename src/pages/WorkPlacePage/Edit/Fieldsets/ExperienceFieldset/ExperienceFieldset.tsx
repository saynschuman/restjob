import * as React from "react"
import { PublishVacancyFieldset, PublishVacancyFieldsetProps } from "../PublishVacancyFieldset"
import { FieldInputRadio } from "../../../../../components/common/forms/InputRadio/InputRadio"
const CSS = require("./ExperienceFieldset.styl")

interface PlaceFieldsetProps extends PublishVacancyFieldsetProps {
    experienceLevels: string[]
}

export class ExperienceFieldset extends React.PureComponent<PlaceFieldsetProps> {
    render() {
        return (
            <PublishVacancyFieldset {...this.props} titleText={__t("publishVacancyPage.listItem4")}>
                <div className={CSS.workExperienceList}>
                    {this.props.experienceLevels.map((level, index) => (
                        <FieldInputRadio
                            title={level}
                            key={index}
                            name={`experience`}
                            className={CSS.workExperienceInput}
                            value={level}
                        />
                    ))}
                </div>
            </PublishVacancyFieldset>
        )
    }
}
