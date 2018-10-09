import * as React from "react"
import { EducationPage } from "./EducationPage"
import {bannerMock} from "../../mocks"

export const EducationPageWrapper: React.SFC = () => {
  return (
    <EducationPage
      banner={bannerMock}
      onSubmit={(values) => console.log(values)}
    />
  )
}
