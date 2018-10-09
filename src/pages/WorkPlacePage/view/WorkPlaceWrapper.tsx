import * as React from "react"
import { WorkPlacePage } from "./WorkPlacePage"
import {bannerMock, workPlaceMock, workPlaceMockLong, workPlaceMockLongGallery} from "../../../mocks"

export const WorkPlaceWrapper: React.SFC = () => {
    return (
        <WorkPlacePage
            banner={bannerMock}
            workplaces={[workPlaceMock, workPlaceMockLong, workPlaceMockLongGallery]}
        />
    )
}
