import { EmployeeFeedbackPageWrapper } from "./pages/EmployeePage/EmployeeFeedback/EmployeeFeedbackPageWrapper"
require("./localization/i18n")
import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import * as moment from "moment"
import { HeaderStaticWidth } from "./components/blocks/Header/HeaderStaticWidth"
import { VacancyPageWrapper } from "./pages/VacancyPage/VacancyPageWrapper"
import { Footer } from "./components/blocks/Footer/Footer"
import { CatalogPageWrapper } from "./pages/CatalogPage/CatalogPageWrapper"
import { IndexPageWrapper } from "./pages/IndexPage/IndexPageWrapper"
import { PublishVacancyPageWrapper } from "./pages/PublishVacancyPage/PublishVacancyPageWrapper"
import { CompanyPageWrapper } from "./pages/CompanyPage/CompanyPageWrapper"
import { EmployeeVacanciesPageWrapper } from "./pages/EmployeePage/EmployeeVacancies/EmployeeVacanciesPageWrapper"
import { EmployeeOffersPageWrapper } from "./pages/EmployeePage/EmployeeOffers/EmployeeOffersPageWrapper"
import { WorkPlaceEditWrapper } from "./pages/WorkPlacePage/Edit/WorkPlaceEditWrapper"
import { WorkPlaceWrapper } from "./pages/WorkPlacePage/View/WorkPlaceWrapper"
import {PublishVacancyNotLoggedWrapper} from "./pages/PublishVacancyNotLogged/PublishVacancyNotLoggedWrapper"
import {MyVacanciesWrapper} from "./pages/MyVacancies/MyVacanciesWrapper"
import {DesiredSalaryWrapper} from "./pages/DesiredSalaryPage/DesiredSalaryWrapper"
import {EducationPageWrapper} from "./pages/EducationPage/EducationPageWrapper"
import {PersonalInfoWrapper} from "./pages/PersonalInfo/PersonalInfoWrapper"
import {EditCompanyWrapper} from "./pages/EditCompany/EditCompanyWrapper"
import {HistoryWrapper} from "./pages/History/HistoryWrapper"
import {BalanceWrapper} from "./pages/Balance/BalanceWrapper"
moment.locale("ru")

require("./styles/initial.styl")
ReactDOM.render(
  <Router>
    <>
      <HeaderStaticWidth city={"Санкт-Петербург"} />
      <Route exact={true} path="/" component={IndexPageWrapper} />
      <Route path="/vacancy" component={VacancyPageWrapper} />
      <Route path="/company" component={CompanyPageWrapper} />
      <Route path="/catalog" component={CatalogPageWrapper} />
      <Route
        path="/employee-vacancies"
        component={EmployeeVacanciesPageWrapper}
      />
      <Route
        path="/employee-feedback"
        component={EmployeeFeedbackPageWrapper}
      />
      <Route path="/employee-offers" component={EmployeeOffersPageWrapper} />
      <Route path="/publishVacancy" component={PublishVacancyPageWrapper} />
      <Route path="/workplace" component={WorkPlaceWrapper} />
      <Route path="/workplace-edit" component={WorkPlaceEditWrapper} />
      <Route path="/publish-vacancy-not-logged" component={PublishVacancyNotLoggedWrapper} />
      <Route path="/my-vacancies" component={MyVacanciesWrapper} />
      <Route path="/desired-salary" component={DesiredSalaryWrapper} />
      <Route path="/education" component={EducationPageWrapper} />
      <Route path="/personal" component={PersonalInfoWrapper} />
      <Route path="/edit-company" component={EditCompanyWrapper} />
      <Route path="/history" component={HistoryWrapper} />
      <Route path="/balance" component={BalanceWrapper} />
      <Footer />
    </>
  </Router>,
  document.getElementById("app"),
)
