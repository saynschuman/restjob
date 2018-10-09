import * as React from "react"
import { EditCompany } from "./EditCompany"
import {bannerMock} from "../../mocks"

export const EditCompanyWrapper: React.SFC = () => {
    return (
        <EditCompany
            banner={bannerMock}
            onSubmit={(values) => console.log(values)}
        />
    )
}
