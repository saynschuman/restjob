import * as React from "react"
import { DesiredSalaryPage } from "./DesiredSalaryPage"
import {bannerMock} from "../../mocks"

export const DesiredSalaryWrapper: React.SFC = () => {
  return (
    <DesiredSalaryPage
      banner={bannerMock}
      onSubmit={(values) => console.log(values)}
    />
  )
}
