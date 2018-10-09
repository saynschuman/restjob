import * as React from "react"
import { EmployeeOffersList } from "./EmployeeOffersList"
import {Vacancy} from "../../../types"
const CSS = require("./EmployeeOffersPage.styl")

interface NewVacancyOfferProps {
    vacancies: Vacancy[]
}

export class NewVacancyOffer extends React.PureComponent<NewVacancyOfferProps> {
    state = {
        bannerOpened: true,
    }

    closeBanner = () => {
        this.setState({
            bannerOpened: !this.state.bannerOpened,
        })
    }
    render() {
        return (
            <section className={CSS.catalogSection}>
                <div className={CSS.catalogSectionTitle}>
                    <div className={CSS.name}>{__t("employeePage.newOffers")}</div>
                </div>
                {this.state.bannerOpened && (<div className={CSS.offersBanner}>
                    <div className={CSS.iconBlock}>
                        <div className={CSS.icon}></div>
                    </div>
                    <div className={CSS.offersText}>
                        <span>{__t("employeePage.offersBannerTitle")}</span>
                        <p>{__t("employeePage.offersBannerText")}</p>
                    </div>
                    <div onClick={this.closeBanner} className={CSS.bannerClose}></div>
                </div>)}
                <EmployeeOffersList vacancyList={this.props.vacancies}/>
            </section>
        )
    }
}
