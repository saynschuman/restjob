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
  width?: number
}

export const Select: React.SFC<PeriodSelectProps> = (props) => {
  return (
    <label className={CSS.arrow} style={{width: props.width}}>
      <Field component="select" name={props.name} >
        <option value="" />
        {props.data.map((data, index) => {
            return (
                <option key={index} value={data.label}>
                    {data.value}
                </option>
            )
        })}
        <option value="addNew">{__t("balance.addNew")}</option>
      </Field>
    </label>
  )
}
