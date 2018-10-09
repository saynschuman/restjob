import * as React from "react"
import { WorkplaceEditPage } from "./WorkPlaceEditPage"
import { addressesMock, bannerMock, placesMock } from "../../../mocks"

export const WorkPlaceEditWrapper: React.SFC = () => {
  return (
    <WorkplaceEditPage
      banner={bannerMock}
      places={placesMock}
      addresses={addressesMock}
      onAddressAdd={() => {
        //
      }}
      isEnoughMoney={false}
      onSubmit={(values) => console.log(values)}
    />
  )
}
