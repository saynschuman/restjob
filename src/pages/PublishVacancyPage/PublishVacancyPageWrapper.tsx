import * as React from "react"
import { PublishVacancyPage } from "./PublishVacancyPage"
import { addressesMock, bannerMock, placesMock } from "../../mocks"

export class PublishVacancyPageWrapper extends React.PureComponent {
    render() {
        return (
            <PublishVacancyPage
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
}
