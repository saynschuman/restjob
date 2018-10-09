import * as React from "react"
import {Field} from "formik"
import {StatusSelect, StatusTypeProps} from "./StatusSelect/StatusSelect"
const CSS = require("./StatusTypeSelect.styl")
import {FormFieldset, FormFieldsetProps} from "../FormFieldset"

export interface StatusTypeSelectProps extends FormFieldsetProps {
  statusTypes: StatusTypeProps[]
  isVisible: boolean
}

export const StatusTypeSelect: React.SFC<StatusTypeSelectProps> = (props) => {
  if (!props.isVisible) {
    return null
  }

  return (
      <FormFieldset {...props} titleText={__t("desiredSalary.chooseStatus")}>
        <div className={CSS.statusTypeSelect}>
          <ul className={CSS.vacancyTypesContainer}>
            {props.statusTypes.map((statusTypes, index) => (
              <Field
                key={index}
                name={`status`}
                render={({field, form}) => {
                  const isChecked = form.values.status === statusTypes.title
                  return (
                    <StatusSelect
                      {...statusTypes}
                      key={index}
                      isChecked={isChecked}
                      onClick={() => {
                        form.setFieldValue(`status`, statusTypes.title)
                      }}
                    />
                  )
                }}
              />
            ))}
          </ul>
        </div>
      </FormFieldset>
  )
}
