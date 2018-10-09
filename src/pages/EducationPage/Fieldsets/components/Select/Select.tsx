import * as React from "react"
import { Field } from "formik"
import classNames from "classnames"

const CSS = require("./Select.styl")

interface SelectData {
  label: string
  value: string
}

export interface PeriodSelectProps {
  data: SelectData[]
  name: string
  big?: boolean
  middle?: boolean
  small?: boolean
  isDisabled?: boolean
  placeholder?: string
  isValid?: boolean
  initialValue?: string
}

export const Select: React.SFC<PeriodSelectProps> = (props) => {
  return (
    <label
      className={classNames({
        [CSS.arrow]: true,
        [CSS.big]: props.big,
        [CSS.middle]: props.middle,
        [CSS.small]: props.small,
        [CSS.notValid]: !props.isValid,
      })}
    >
      <Field
        component="select"
        name={props.name}
        disabled={props.isDisabled}
        className={classNames({
          [CSS.disabled]: props.isDisabled,
        })}
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
