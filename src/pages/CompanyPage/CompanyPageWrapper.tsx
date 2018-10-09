import * as React from "react"
import { CompanyPage } from "./CompanyPage"
import {
    bannerMock,
    companyMock,
    vacancyMock,
    vacancyMockActive,
    vacancyMockHot,
    vacancyMockRecommended,
} from "../../mocks"

export class CompanyPageWrapper extends React.PureComponent {
  render() {
    return (
      <CompanyPage
        banner={bannerMock}
        company={companyMock}
        vacancies={[vacancyMock, vacancyMockHot, vacancyMockRecommended, vacancyMockActive]}
        vacancy={vacancyMock}

      />
    )
  }
}
