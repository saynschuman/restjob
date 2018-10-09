import * as React from "react"
import { EmployeeFeedbackPage } from "./EmployeeFeedbackPage"
import {vacancyFeedbackInvitation, vacancyFeedbackRejection, vacancyFeedbackNoAnswer, bannerMock} from "../../../mocks"

export class EmployeeFeedbackPageWrapper extends React.PureComponent {
    render() {
        return (
            <EmployeeFeedbackPage
                banner={bannerMock}
                vacanciesInvitation={[vacancyFeedbackInvitation]}
                vacanciesRejection={[vacancyFeedbackRejection]}
                vacanciesNoAnswer={[vacancyFeedbackNoAnswer]}
            />
        )
    }
}
