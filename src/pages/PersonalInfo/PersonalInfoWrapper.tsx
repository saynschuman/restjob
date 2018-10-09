import * as React from "react"
import { PersonalInfo } from "./PersonalInfo"
import {bannerMock} from "../../mocks"

export const PersonalInfoWrapper: React.SFC = () => {
    return (
        <PersonalInfo
            banner={bannerMock}
            onSubmit={(values) => console.log(values)}
        />
    )
}
