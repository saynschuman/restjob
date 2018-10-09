import * as React from "react"
import { History } from "./History"
import {bannerMock, action1, action2, action3, action4, action5, action6, action7, action8, action9} from "../../mocks"

export const HistoryWrapper: React.SFC = () => {
    return (
        <History
            banner={bannerMock}
            history={[action1, action2, action3, action4, action5, action6, action7, action8, action9]}
        />
    )
}
