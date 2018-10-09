import * as React from "react"
import {AsideLeftContainer} from "../../../components/LayoutContainers/AsideLeftContainer/AsideLeftContainer"
import {AsideRightContainer} from "../../../components/LayoutContainers/AsideRightContainer/AsideRightContainer"
import {MainContainer} from "../../../components/LayoutContainers/MainContainer/MainContainer"
import {ColumnsPageContainer} from "../../../components/LayoutContainers/PageContainer/PageContainer"
import {MobileAppBlock} from "../../../components/common/MobileAppBlock/MobileAppBlock"
import {VerticalBanner} from "../../../components/common/VerticalBanner/VerticalBanner"
import {companyMock} from "../../../mocks"
const CSS = require("./EmployeeOffersPage.styl")
import {AsideCompanyBlock} from "../../../components/common/AsideCompanyBlock/AsideCompanyBlock"
import {SelectFilters} from "../../../components/common/SelectFilters/SelectFilters"
import {Vacancy} from "../../../types"
import {NewVacancyOffer} from "./NewVacancyOffer"
import {VacancyOffer} from "./VacancyOffer"

export const menu = [
  {value: "new", title: "Новые"},
  {value: "accepted", title: "Принятые"},
  {value: "rejected", title: "Отклоненные"},
  {value: "no-answer", title: "Оставили без ответа"},
]

export interface EmployeeOffersPageProps {
  banner?: {
    img: string;
    href: string;
  }
  vacanciesNew: Vacancy[]
  vacanciesAccepted: Vacancy[]
  vacanciesNoAnswer: Vacancy[]
  vacanciesRejected: Vacancy[]
}

export class EmployeeOffersPage extends React.PureComponent<
  EmployeeOffersPageProps
> {
  state = {
    currentFilter: "new",
  }
  render() {
    const renderData = () => {
      switch (this.state.currentFilter) {
        case "accepted":
          return (
            <VacancyOffer
              title={__t("employeePage.invitations")}
              vacancies={this.props.vacanciesAccepted}
            />
          )
        case "rejected":
          return (
            <VacancyOffer
              title={__t("employeePage.rejected")}
              vacancies={this.props.vacanciesRejected}
            />
          )
        case "no-answer":
          return (
            <VacancyOffer
              title={__t("employeePage.noAnswer")}
              vacancies={this.props.vacanciesNoAnswer}
            />
          )
        default:
          return <NewVacancyOffer vacancies={this.props.vacanciesNew} />
      }
    }
    return (
      <div>
        <ColumnsPageContainer>
          <AsideLeftContainer>
            <div className={CSS.asideLeftContent}>
              <SelectFilters
                filters={menu}
                onChange={(val) => this.setState({currentFilter: val})}
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
