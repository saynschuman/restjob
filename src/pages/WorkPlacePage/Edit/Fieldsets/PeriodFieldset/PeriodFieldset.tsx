import * as React from "react"
import { Field } from "formik"
import {
  PublishVacancyFieldset,
  PublishVacancyFieldsetProps,
} from "../PublishVacancyFieldset"
import { SelectInputField } from "../../../../../components/common/forms/SelectInputField"
const CSS = require("./PeriodFieldset.styl")

export class PeriodFieldset extends React.PureComponent<
  PublishVacancyFieldsetProps
> {
  state = {
    stillWork: false,
  }
  handleStillWork = () => {
    this.setState({
      stillWork: !this.state.stillWork,
    })
  }
  render() {
    return (
      <PublishVacancyFieldset
        {...this.props}
        titleText={__t("workPlace.periodTitle")}
      >
        <div className={CSS.periodInput}>
          <div className={CSS.periodDates}>
            <div className={CSS.periodCol}>
              <label className={CSS.descriptionInputLabel}>
                {__t("workPlace.started")}
              </label>
              <SelectInputField
                name={"periodMonthStart"}
                isMonthSelected
                placeholder={"Месяц"}
                months={[
                  { label: "January", value: "Январь" },
                  { label: "February", value: "Февраль" },
                  { label: "March", value: "Март" },
                  { label: "April", value: "Апрель" },
                  { label: "May", value: "Май" },
                  { label: "June", value: "Июнь" },
                  { label: "July", value: "Июль" },
                  { label: "August", value: "Август" },
                  { label: "September", value: "Сентябрь" },
                  { label: "October", value: "Октябрь" },
                  { label: "November", value: "Ноябрь" },
                  { label: "December", value: "Декабрь" },
                ]}
              />
              <SelectInputField
                name={"periodYearStart"}
                isYearSelected
                placeholder={"Год"}
                years={[
                  { value: "1999", label: "1999" },
                  { value: "2000", label: "2000" },
                  { value: "2001", label: "2001" },
                  { value: "2002", label: "2002" },
                  { value: "2003", label: "2003" },
                  { value: "2004", label: "2004" },
                  { value: "2005", label: "2005" },
                ]}
              />
            </div>
            <div className={CSS.periodCol}>
              <label className={CSS.descriptionInputLabel}>
                {__t("workPlace.finished")}
              </label>
              <SelectInputField
                name={"periodMonthEnd"}
                isMonthSelected
                isDisabled={this.state.stillWork}
                placeholder={"Месяц"}
                months={[
                  { label: "January", value: "Январь" },
                  { label: "February", value: "Февраль" },
                  { label: "March", value: "Март" },
                  { label: "April", value: "Апрель" },
                  { label: "May", value: "Май" },
                  { label: "June", value: "Июнь" },
                  { label: "July", value: "Июль" },
                  { label: "August", value: "Август" },
                  { label: "September", value: "Сентябрь" },
                  { label: "October", value: "Октябрь" },
                  { label: "November", value: "Ноябрь" },
                  { label: "December", value: "Декабрь" },
                ]}
              />
              <SelectInputField
                name={"periodYearEnd"}
                isYearSelected
                isDisabled={this.state.stillWork}
                placeholder={"Год"}
                years={[
                  { value: "1999", label: "1999" },
                  { value: "2000", label: "2000" },
                  { value: "2001", label: "2001" },
                  { value: "2002", label: "2002" },
                  { value: "2003", label: "2003" },
                  { value: "2004", label: "2004" },
                  { value: "2005", label: "2005" },
                ]}
              />
              <Field
                name={"stillWork"}
                render={({ field }) => {
                  return (
                    <div className={CSS.stillWork}>
                      <input
                        {...field}
                        onClick={this.handleStillWork}
                        checked={this.state.stillWork}
                        type={"checkbox"}
                        id={"stillWork"}
                      />
                      <label htmlFor={"stillWork"}>
                          {__t("workPlace.stillWork")}
                      </label>
                    </div>
                  )
                }}
              />
            </div>
          </div>
          <label
            className={CSS.descriptionInputLabel}
            htmlFor={"vacancyDescription"}
          >
            {__t("workPlace.descriptionAdd")}
          </label>
          <Field
            name={`periodDescription`}
            inputAttributes={{ id: "periodDescription" }}
            render={({ field }) => (
              <textarea {...field} className={CSS.descriptionTextArea} />
            )}
          />
        </div>
      </PublishVacancyFieldset>
    )
  }
}
