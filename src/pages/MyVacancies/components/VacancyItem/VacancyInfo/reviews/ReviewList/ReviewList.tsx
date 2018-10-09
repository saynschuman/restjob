import * as React from "react"
import {Review} from "../Review/Review"
import {Vacancy} from "../../../../../../../types"
const CSS = require("./ReviewList.styl")

export interface ReviewListProps {
    vacancy: Vacancy
}

export const ReviewList: React.SFC<ReviewListProps> = (props) => {
    return (
        <div className={CSS.itemReviews}>
            <Review
                quantity={props.vacancy.quantityReviews}
                title={__t("myVacancies.reviews")}
                new={props.vacancy.notViewed}
                isFeedBacks
            />
            <Review
                quantity={props.vacancy.quantityViews}
                title={__t("myVacancies.views")}
            />
            <Review
                quantity={props.vacancy.quantityShows}
                title={__t("myVacancies.shows")}
            />

        </div>
    )
}
