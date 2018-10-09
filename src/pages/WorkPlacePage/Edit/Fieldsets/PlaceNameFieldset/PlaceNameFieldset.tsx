import * as React from "react"
import {
  PublishVacancyFieldset,
  PublishVacancyFieldsetProps,
} from "../PublishVacancyFieldset"
import { TextInputField } from "../../../../../components/common/forms/TextInputField"

const CSS = require("./PlaceNameFiledset.styl")

export class PlaceNameFieldset extends React.PureComponent<
  PublishVacancyFieldsetProps
> {
  render() {
    return (
      <PublishVacancyFieldset
        {...this.props}
        titleText={__t("workPlace.placeName")}
      >
        <div className={CSS.contactInputsContainer}>
          <div className={CSS.contactInput}>
            <label className={CSS.contactInputLabel} htmlFor={"cityPlace"}>
              {__t("workPlace.city")}
            </label>
            <TextInputField
              name={"cityPlace"}
              className={CSS.contactInputName}
              inputAttributes={{ id: "cityPlace" }}
            />
            <div className={CSS.example}>
              {__t("workPlace.forEx")} <span>{__t("workPlace.Moscow")}</span>{" "}
              {__t("workPlace.or")} <span>{__t("workPlace.Peter")}</span>
            </div>
            <label className={CSS.contactInputLabel} htmlFor={"placeName"}>
              {__t("workPlace.place")}
            </label>
            <TextInputField
              name={"placeName"}
              className={CSS.contactInputName}
              inputAttributes={{ id: "placeName" }}
            />
          </div>
        </div>
      </PublishVacancyFieldset>
    )
  }
}
