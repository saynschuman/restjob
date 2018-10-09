import * as React from "react"
import { Link } from "react-router-dom"

const CSS = require("../VacancyItem.styl")

export interface LinksProps {
    id: number
}

export const Links: React.SFC<LinksProps> = () => {
    return (
        <div className={CSS.editBlock}>
            <div className={CSS.edit}>
                <Link to={`${__t("myVacancies.vacancyEdit.link")}`}>
                    <span>{__t("myVacancies.vacancyEdit.title")}</span>
                </Link>
            </div>
            <div className={CSS.close}>
                <Link to={`${__t("myVacancies.vacancyClose.link")}`}>
                    <span>{__t("myVacancies.vacancyClose.title")}</span>
                </Link>
            </div>
        </div>
    )
}
