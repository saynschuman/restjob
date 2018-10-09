import * as React from "react"
import { Field } from "formik"

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
  width?: number
}

export const Select: React.SFC<PeriodSelectProps> = (props) => {
  return (
    <label className={CSS.arrow} style={{width: props.width}}>
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
