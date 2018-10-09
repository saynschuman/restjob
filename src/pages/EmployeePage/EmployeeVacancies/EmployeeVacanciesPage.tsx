import * as React from "react"
import { AsideLeftContainer } from "../../../components/LayoutContainers/AsideLeftContainer/AsideLeftContainer"
import { AsideRightContainer } from "../../../components/LayoutContainers/AsideRightContainer/AsideRightContainer"
import { MainContainer } from "../../../components/LayoutContainers/MainContainer/MainContainer"
import { ColumnsPageContainer } from "../../../components/LayoutContainers/PageContainer/PageContainer"
import { MobileAppBlock } from "../../../components/common/MobileAppBlock/MobileAppBlock"
import { VerticalBanner } from "../../../components/common/VerticalBanner/VerticalBanner"
import { companyMock } from "../../../mocks"
const CSS = require("./EmployeeVacanciesPage.styl")
import { AsideCompanyBlock } from "../../../components/common/AsideCompanyBlock/AsideCompanyBlock"
import { SelectFilters } from "../../../components/common/SelectFilters/SelectFilters"
import { CatalogItemVacancy } from "../../../components/common/CatalogItemVacancy/CatalogItemVacancy"
import { Vacancy } from "../../../types"

export const menu = [
  { value: "all", title: "Все вакансии" },
  { value: "actually", title: "Актуальные вакансии" },
  { value: "closed", title: "Вакансии уже закрыты" },
]

interface EmployeeVacanciesPageProps {
  banner?: {
    img: string;
    href: string;
  }
  actuallyVacancies: Vacancy[]
  closedVacancies: Vacancy[]
}

export class EmployeeVacanciesPage extends React.PureComponent<
  EmployeeVacanciesPageProps
> {
  state = {
    currentFilter: "all",
  }

  renderActually() {
    return (
      <section className={CSS.catalogSection}>
          <div className={CSS.catalogSectionTitle}>
              <span className={CSS.name}>{__t("employeePage.actuallyVacancies")}</span>
              <span className={CSS.cleanList}>{__t("employeePage.cleanList")}</span>
          </div>
          {(this.props.actuallyVacancies.length > 0) ? this.props.actuallyVacancies.map((vacancy) => (
          <CatalogItemVacancy vacancy={vacancy} key={vacancy.id} />
        )) : <div className={CSS.noVacancies}>{__t("employeePage.noVacancies")}</div>}
      </section>
    )
  }

  renderClosed() {
    return (
      <section className={CSS.catalogSection}>
        <div className={CSS.catalogSectionTitle}>
          <span className={CSS.name}>{__t("employeePage.closedVacancies")}</span>
          <span className={CSS.cleanList}>{__t("employeePage.cleanList")}</span>
        </div>
        {(this.props.closedVacancies.length > 0) ? this.props.closedVacancies.map((vacancy) => (
          <CatalogItemVacancy vacancy={vacancy} key={vacancy.id} />
        )) : <div className={CSS.noVacancies}>{__t("employeePage.empty")}</div>}
      </section>
    )
  }

  renderAll() {
    return (
      <React.Fragment>
        {this.renderActually()}
        {this.renderClosed()}
      </React.Fragment>
    )
  }

  renderData() {
      const filterVacancies = this.state.currentFilter
      switch (filterVacancies) {
          case "actually":
              return this.renderActually()
          case "closed":
              return this.renderClosed()
          default:
              return this.renderAll()
      }
  }

  render() {
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

          <MainContainer>
              {this.renderData()}
          </MainContainer>

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
