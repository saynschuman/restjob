import * as React from "react"
import { Field } from "formik"
import classNames from "classnames"

const CSS = require("./SelectInputField.styl")

interface SelectData {
  label: string
  value: string
}

export interface PeriodSelectProps {
  months?: SelectData[]
  years?: SelectData[]
  formats?: SelectData[]
  name: string
  isMonthSelected?: boolean
  isYearSelected?: boolean
  isFormatSelected?: boolean
  isDisabled?: boolean
  placeholder: string
}

export const SelectInputField: React.SFC<PeriodSelectProps> = (props) => {
  return (
    <label
      className={classNames({
        [CSS.arrow]: true,
        [CSS.format]: props.isFormatSelected,
      })}
    >
      <Field
        component="select"
        name={props.name}
        disabled={props.isDisabled}
        className={classNames({
          [CSS.selectMonth]: props.isMonthSelected,
          [CSS.selectYear]: props.isYearSelected,
          [CSS.disabled]: props.isDisabled,
          [CSS.format]: props.isFormatSelected,
        })}
      >
        <option value="">{props.placeholder}</option>
        {props.isMonthSelected &&
          props.months.map((month, index) => {
            return (
              <option key={index} value={month.label}>
                {month.value}
              </option>
            )
          })}
        {props.isYearSelected &&
          props.years.map((year, index) => {
            return (
              <option key={index} value={year.label}>
                {year.value}
              </option>
            )
          })}
        {props.isFormatSelected &&
          props.formats.map((format, index) => {
            return (
              <option key={index} value={format.label}>
                {format.value}
              </option>
            )
          })}
      </Field>
    </label>
  )
}
