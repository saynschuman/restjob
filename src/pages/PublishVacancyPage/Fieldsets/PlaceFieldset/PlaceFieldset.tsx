import * as React from "react"
import { Field } from "formik"
import { PublishVacancyFieldset, PublishVacancyFieldsetProps } from "../PublishVacancyFieldset"
import { InputRadio } from "../../../../components/common/forms/InputRadio/InputRadio"
import { Place } from "../../../../types"
const CSS = require("./PlaceFieldset.styl")

interface PlaceFieldsetProps extends PublishVacancyFieldsetProps {
    places: Place[]
}

export class PlaceFieldset extends React.PureComponent<PlaceFieldsetProps> {
    render() {
        return (
            <PublishVacancyFieldset {...this.props} titleText={__t("publishVacancyPage.listItem1")}>
                <div className={CSS.placesList}>
                    {this.props.places.map((place, index) => (
                        <div className={CSS.container} key={index}>
                            <Field
                                name={`place`}
                                render={({ field, form }) => {
                                    const isChecked = !!form.values.place && form.values.place.title === place.title
                                    return (
                                        <InputRadio
                                            title={place.title}
                                            name={`place`}
                                            onChange={() => {
                                                form.setFieldTouched("place")
                                                form.setFieldValue("place", place)
                                            }}
                                            className={CSS.input}
                                            value={place.title}
                                            isChecked={isChecked}
                                        />
                                    )
                                }}
                            />
                            <span className={CSS.placeCity}>{place.city}</span>
                        </div>
                    ))}
                </div>
            </PublishVacancyFieldset>
        )
    }
}
