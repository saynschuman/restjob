import * as React from "react"
import { Field } from "formik"
import * as classNames from "classnames"

const CSS = require("./Select.styl")

interface SelectData {
  label: string
  value: string
}

export interface PeriodSelectProps {
  data: SelectData[]
  name: string
  isDisabled?: boolean
  placeholder?: string
  initialValue?: string
  day?: boolean
  month?: boolean
  year?: boolean
  nationality?: boolean
  gender?: boolean
}

export const Select: React.SFC<PeriodSelectProps> = (props) => {
  return (
    <label
        className={classNames({
            [CSS.arrow]: true,
            [CSS.day]: props.day,
            [CSS.month]: props.month,
            [CSS.year]: props.year,
            [CSS.gender]: props.gender,
            [CSS.nationality]: props.nationality,
        })}
    >
      <Field
        component="select"
        name={props.name}
        disabled={props.isDisabled}
      >
        <option value={props.initialValue ? props.initialValue : ""}>
          {props.initialValue ? props.initialValue : props.placeholder}
        </option>
        {props.initialValue
          ? props.data
              .filter((data) => data.label !== props.initialValue)
              .map((data, index) => {
                return (
                  <option key={index} value={data.label}>
                    {data.value}
                  </option>
                )
              })
          : props.data.map((data, index) => {
              return (
                <option key={index} value={data.label}>
                  {data.value}
                </option>
              )
            })}
      </Field>
    </label>
  )
}
