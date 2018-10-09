import * as React from "react"
import { EmployeeVacanciesPage } from "./EmployeeVacanciesPage"
import {bannerMock, vacancyMockActually, vacancyMockClosed} from "../../../mocks"

export class EmployeeVacanciesPageWrapper extends React.PureComponent {
  render() {
    return (
      <EmployeeVacanciesPage
        banner={bannerMock}
        // actuallyVacancies={[]}
        // closedVacancies={[]}
        actuallyVacancies={[vacancyMockActually]}
        closedVacancies={[vacancyMockClosed]}
      />
    )
  }
}
