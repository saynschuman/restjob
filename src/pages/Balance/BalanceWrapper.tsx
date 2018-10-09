import * as React from "react"
import { Balance } from "./Balance"
import {bannerMock, bonusesBanner, bill1, bill2, bill3} from "../../mocks"

export const BalanceWrapper: React.SFC = () => {
    return (
        <Balance
            banner={bannerMock}
            onSubmit={(values) => console.log(values)}
            bonuses={bonusesBanner}
            bills={[bill1, bill2, bill3]}
        />
    )
}
