import * as React from "react"
import { Link } from "react-router-dom"
import { ColumnsPageContainer } from "../../components/LayoutContainers/PageContainer/PageContainer"
import { MainContainerBig } from "../../components/LayoutContainers/MainContainer/MainContainer"
import { PageTitle } from "../../components/common/PageTitle/PageTitle"
import { AsideRightContainer } from "../../components/LayoutContainers/AsideRightContainer/AsideRightContainer"
import { VerticalBanner } from "../../components/common/VerticalBanner/VerticalBanner"
import { MobileAppBlock } from "../../components/common/MobileAppBlock/MobileAppBlock"
import { Banner, Action } from "../../types"
const CSS = require("./History.styl")

export interface HistoryProps {
  banner?: Banner
  history: Action[]
}

export const History: React.SFC<HistoryProps> = (props) => {
  return (
    <ColumnsPageContainer>
      <MainContainerBig>
        <PageTitle text={__t("history.title")} mBottom />
        <table className={CSS.table}>
          <thead>
            <tr>
              <th>{__t("history.date")}</th>
              <th>{__t("history.action")}</th>
              <th>{__t("history.vacancy")}</th>
              <th>{__t("history.company")}</th>
              <th>{__t("history.sum")}</th>
            </tr>
          </thead>
          <tbody>
            {props.history.length > 0 &&
              props.history.map((action, index) => {
                return (
                  <tr key={index}>
                    <td>{action.date}</td>
                    <td>{action.act}</td>
                    <td>
                      <Link to={action.vacancyLink} className={CSS.link}>
                        {action.vacancy.length > 31 ? (
                            action.vacancy.slice(0, 31) + "..."
                        ) : (
                            action.vacancy
                        )}
                      </Link>
                    </td>
                    <td>{action.company}</td>
                    <td>{action.sum}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </MainContainerBig>
      <AsideRightContainer>
        {props.banner && (
          <VerticalBanner href={props.banner.href} img={props.banner.img} />
        )}
        <MobileAppBlock className={CSS.mobileAppBlock} />
      </AsideRightContainer>
    </ColumnsPageContainer>
  )
}
