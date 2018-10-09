import * as React from "react"
import { EmployeeOffersPage } from "./EmployeeOffersPage"
import {
    vacancyOfferRejected,
    vacancyOfferRejected1,
    vacancyOfferNoAnswer,
    vacancyOfferAccepted,
    vacancyOfferAccepted1,
    vacancyNewOffer,
    bannerMock,
} from "../../../mocks"

export class EmployeeOffersPageWrapper extends React.PureComponent {
    render() {
        return (
            <EmployeeOffersPage
                banner={bannerMock}
                vacanciesNew={[ vacancyNewOffer ]}
                vacanciesAccepted={[ vacancyOfferAccepted, vacancyOfferAccepted1 ]}
                vacanciesNoAnswer={[ vacancyOfferNoAnswer ]}
                vacanciesRejected={[ vacancyOfferRejected, vacancyOfferRejected1 ]}
            />
        )
    }
}
