import * as React from "react"
import { PublishVacancyNotLoggedPage } from "./PublishVacancyNotLoggedPage"

export class PublishVacancyNotLoggedWrapper extends React.PureComponent {
    render() {
        return (
            <PublishVacancyNotLoggedPage
                onAddressAdd={() => {
                    //
                }}
                isEnoughMoney={false}
                onSubmit={(values) => console.log(values)}
            />
        )
    }
}
