import { Field } from "formik"
import * as React from "react"

interface TextInputFieldProps {
  name: string
  type?: string
  className?: string
  inputAttributes?: object
  value?: string
  placeholder?: string
  width?: number
  height?: number
  onChange?(val: React.ChangeEvent<HTMLInputElement>): any
}

export const TextInputField: React.SFC<TextInputFieldProps> = (props) => {
    return (
        <Field
            name={props.name}
            render={({ field, form }) => {
                return (
                    <input
                        name={props.name}
                        type={props.type || "text"}
                        className={props.className}
                        style={{width: props.width, height: props.height}}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={(e) => {
                            form.setFieldTouched(props.name)
                            if (props.onChange) {
                                props.onChange(e)
                            } else {
                                form.handleChange(e)
                            }
                        }}
                        {...props.inputAttributes}
                    />
                )
            }}
        />
    )
}
