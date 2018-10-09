import * as React from "react"
import { AsideLeftContainer } from "../../../components/LayoutContainers/AsideLeftContainer/AsideLeftContainer"
import { AsideRightContainer } from "../../../components/LayoutContainers/AsideRightContainer/AsideRightContainer"
import { MainContainer } from "../../../components/LayoutContainers/MainContainer/MainContainer"
import { ColumnsPageContainer } from "../../../components/LayoutContainers/PageContainer/PageContainer"
import { MobileAppBlock } from "../../../components/common/MobileAppBlock/MobileAppBlock"
import { VerticalBanner } from "../../../components/common/VerticalBanner/VerticalBanner"
import { companyMock } from "../../../mocks"
const CSS = require("./EmployeeFeedbackPage.styl")
import { AsideCompanyBlock } from "../../../components/common/AsideCompanyBlock/AsideCompanyBlock"
import { SelectFilters } from "../../../components/common/SelectFilters/SelectFilters"
import { Vacancy } from "../../../types"
import { EmployeeFeedbackItemList } from "./EmployeeFeedbackItemList"

export const menu = [
  { value: "new", title: "Новые" },
  { value: "invitations", title: "Приглашения" },
  { value: "rejections", title: "Отказы" },
  { value: "no-answer", title: "Без ответа" },
]

interface EmployeeFeedbackPageProps {
  banner?: {
    img: string;
    href: string;
  }
  vacanciesInvitation: Vacancy[]
  vacanciesRejection: Vacancy[]
  vacanciesNoAnswer: Vacancy[]
}

export class EmployeeFeedbackPage extends React.PureComponent<
  EmployeeFeedbackPageProps
> {
  state = {
    currentFilter: "new",
  }

  render() {
    const renderData = () => {
      const { vacanciesInvitation, vacanciesRejection, vacanciesNoAnswer } = this.props
      const all = vacanciesInvitation
        .concat(vacanciesRejection)
        .concat(vacanciesNoAnswer)
      switch (this.state.currentFilter) {
        case "invitations":
          return (
            <EmployeeFeedbackItemList
              title={__t("employeePage.invitations")}
              vacancies={vacanciesInvitation}
            />
          )
        case "rejections":
          return (
            <EmployeeFeedbackItemList
              title={__t("employeePage.rejections")}
              vacancies={vacanciesRejection}
            />
          )
        case "no-answer":
          return (
            <EmployeeFeedbackItemList
              title={__t("employeePage.noAnswer")}
              vacancies={vacanciesNoAnswer}
            />
          )
        default:
          return (
            <EmployeeFeedbackItemList
              title={__t("employeePage.new")}
              vacancies={all}
            />
          )
      }
    }
    return (
      <div>
        <ColumnsPageContainer>
          <AsideLeftContainer>
            <div className={CSS.asideLeftContent}>
              <SelectFilters
                filters={menu}
                onChange={(val) => this.setState({ currentFilter: val })}
                value={this.state.currentFilter}
              />
            </div>
          </AsideLeftContainer>

          <MainContainer>{renderData()}</MainContainer>

          <AsideRightContainer>
            {this.props.banner && (
              <VerticalBanner
                href={this.props.banner.href}
                img={this.props.banner.img}
              />
            )}
            <AsideCompanyBlock company={companyMock} />
            <MobileAppBlock className={CSS.mobileAppBlock} />
          </AsideRightContainer>
        </ColumnsPageContainer>
      </div>
    )
  }
}
