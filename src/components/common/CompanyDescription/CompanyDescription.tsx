import * as React from "react"
const CSS = require("./CompanyDescription.styl")

interface CompanyDescriptionProps {
  openDate: string
  companyDescription: string
}

export const CompanyDescription: React.SFC<CompanyDescriptionProps> = (props) => {
    return (
      <section>
        <div className={CSS.openDate}>
          <span>{__t("companyPage.openDate")}</span>
          {props.openDate}
        </div>
        <div className={CSS.text}>
          <p>{props.companyDescription}</p>
        </div>
      </section>
    )
}
