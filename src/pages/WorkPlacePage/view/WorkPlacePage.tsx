import * as React from "react"
import { ColumnsPageContainer } from "../../../components/LayoutContainers/PageContainer/PageContainer"
import { AsideRightContainer } from "../../../components/LayoutContainers/AsideRightContainer/AsideRightContainer"
import { MainContainerBig } from "../../../components/LayoutContainers/MainContainer/MainContainer"
import {Banner, WorkPlace} from "../../../types"
import { MobileAppBlock } from "../../../components/common/MobileAppBlock/MobileAppBlock"
import { VerticalBanner } from "../../../components/common/VerticalBanner/VerticalBanner"
import { PageTitle } from "../../../components/common/PageTitle/PageTitle"
import { WorkPlaceList } from "./WorkPlaceList"

const CSS = require("./WorkPlacePage.styl")

export interface WorkPlacePageProps {
    banner?: Banner
    workplaces: WorkPlace[]
}

export const WorkPlacePage: React.SFC<WorkPlacePageProps> = (props) => {
    return (
        <ColumnsPageContainer>
            <MainContainerBig>
                <PageTitle text={__t("workPlace.workPlaceTitle")} isButton/>
                <WorkPlaceList list={props.workplaces}/>
            </MainContainerBig>

            <AsideRightContainer>
                {props.banner && (
                    <VerticalBanner
                        href={ props.banner.href }
                        img={ props.banner.img }
                    />
                )}
                <MobileAppBlock className={CSS.mobileAppBlock} />
            </AsideRightContainer>
        </ColumnsPageContainer>
    )
}
