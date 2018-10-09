import * as React from "react"
import * as classNames from "classnames"
import { Field } from "formik"
const CSS = require("./InputRadio.styl")

interface InputRadioProps {
    title: string
    name: string
    value: string
    className?: string
    isChecked?: boolean
    onChange?: (val: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputRadio: React.SFC<InputRadioProps> = (props) => {
    return (
        <label className={classNames(CSS.container, props.className)}>
            <input
                type="radio"
                className={CSS.input}
                name={props.name}
                value={props.value}
                checked={props.isChecked}
                onChange={props.onChange}
            />
            <span className={CSS.mark}/>
            <span className={CSS.title}>{props.title}</span>
        </label>
    )
}

export const FieldInputRadio: React.SFC<InputRadioProps> = (props) => {
    return (
        <Field
            name={props.name}
            render={({ field, form }) => {
                return (
                    <InputRadio
                        title={props.title}
                        name={props.name}
                        value={props.value}
                        className={props.className}
                        onChange={(e) => {
                            form.setFieldTouched(props.name)
                            if (props.onChange) {
                                props.onChange(e)
                            } else {
                                form.handleChange(e)
                            }
                        }}
                        isChecked={form.values[props.name] === props.value}
                    />
                )
            }}
        />
    )
}
