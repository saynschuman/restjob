import * as React from "react"
import { Link } from "react-router-dom"

const CSS = require("./VacancyArchived.styl")

export interface VacancyArchivedProps {
  archDate: string
}

export const VacancyArchived: React.SFC<VacancyArchivedProps> = (props) => {
  return (
    <div className={CSS.archContainer}>
      <div className={CSS.archInner}>
        <div className={CSS.icon} />
        <div className={CSS.info}>
          <div>{__t("myVacancies.inArchive")}</div>
          <div>
            {__t("myVacancies.from")} {props.archDate}
          </div>
          <div>
            <Link to={`${__t("myVacancies.loadAgain.link")}`}>
              <span>{__t("myVacancies.loadAgain.title")}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
