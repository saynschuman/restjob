import * as React from "react"
import {PublishVacancyFieldsetProps, PublishVacancyFieldset} from "../PublishVacancyFieldset"
import { UpploadPhoto } from "../UpploadPhoto/UpploadPhoto"

const CSS = require("./PhotoFieldset.styl")

export class PhotoFieldset extends React.PureComponent<PublishVacancyFieldsetProps> {
    render() {
        return (
            <PublishVacancyFieldset
                {...this.props}
                titleText={__t("workPlace.photo")}
            >
                <div className={CSS.textContainer}>
                    <div className={CSS.text}>
                        {__t("workPlace.photoText")}
                    </div>
                </div>
                <UpploadPhoto />
            </PublishVacancyFieldset>
        )
    }
}
