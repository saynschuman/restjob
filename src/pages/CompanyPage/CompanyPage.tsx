import * as React from "react"
import {AsideLeftContainer} from "../../components/LayoutContainers/AsideLeftContainer/AsideLeftContainer"
import {AsideRightContainer} from "../../components/LayoutContainers/AsideRightContainer/AsideRightContainer"
import {MainContainer} from "../../components/LayoutContainers/MainContainer/MainContainer"
import {ColumnsPageContainer} from "../../components/LayoutContainers/PageContainer/PageContainer"
import {Link} from "react-router-dom"
const CSS = require("./CompanyPage.styl")
import {Company, Vacancy} from "../../types"
import {BlueButton} from "../../components/common/Buttons/BlueButton/BlueButton"
import {MobileAppBlock} from "../../components/common/MobileAppBlock/MobileAppBlock"
import {VerticalBanner} from "../../components/common/VerticalBanner/VerticalBanner"
import {CompanyHeader} from "../../components/common/CompanyHeader/CompanyHeader"
import {CompanyDescription} from "../../components/common/CompanyDescription/CompanyDescription"
import {Gallery} from "../../components/common/Gallery/Gallery"
import {CatalogItemVacancy} from "../../components/common/CatalogItemVacancy/CatalogItemVacancy"
import {AddressesList} from "../../components/common/AddressesList/AddressesList"
import {MapBlock} from "../../components/common/MapBlock/MapBlock"

interface CompanyPageProps {
  company: Company
  banner?: {
    img: string;
    href: string;
  }
  vacancies: Vacancy[]
  vacancy: Vacancy
}

export class CompanyPage extends React.PureComponent<CompanyPageProps> {
  render() {
    const hasAdresses =
      this.props.vacancy.addressesList &&
      this.props.vacancy.addressesList.length
    const vacancyCoords = hasAdresses
      ? this.props.vacancy.addressesList
          .filter((address) => !!address.coord)
          .map((address) => address.coord)
      : null
    return (
      <div>
        <ColumnsPageContainer>
          <AsideLeftContainer>
            <Link to={"/company"}>
              <img
                src={this.props.company.logo}
                alt="logo"
                className={CSS.companyLogo}
              />
            </Link>
            <BlueButton className={CSS.applyButton}>
              {__t("companyPage.want")}
            </BlueButton>
          </AsideLeftContainer>

          <MainContainer>
            <CompanyHeader
              city={this.props.company.city.name}
              orgname={this.props.company.orgname}
              isRecommended={true}
            />

            <CompanyDescription
              openDate={this.props.company.openDate}
              companyDescription={this.props.company.companyDescription}
            />

    {this.props.company.photoSet.length > 0 && (
              <section className={CSS.photos}>
                <Gallery images={this.props.company.photoSet} />
              </section>
            )}

            <section className={CSS.catalogSection}>
              <h1 className={CSS.catalogSectionTitle}>
                {__t("companyPage.vacancies")} {__t("companyPage.in")}  {this.props.company.brend}
              </h1>
              {this.props.vacancies.map((vacancy, index) => (
                <CatalogItemVacancy vacancy={vacancy} key={index} />
              ))}
            </section>

            {hasAdresses && (
              <section className={CSS.map}>
                <h2 className={CSS.mapTitle}>{__t("companyPage.adresses")}</h2>
                <AddressesList addresses={this.props.vacancy.addressesList} />
                {vacancyCoords && <MapBlock coords={vacancyCoords} />}
              </section>
            )}
          </MainContainer>

          <AsideRightContainer>
            {this.props.banner && (
              <VerticalBanner
                href={this.props.banner.href}
                img={this.props.banner.img}
              />
            )}
            <MobileAppBlock className={CSS.mobileAppBlock} />
          </AsideRightContainer>
        </ColumnsPageContainer>
      </div>
    )
  }
}
