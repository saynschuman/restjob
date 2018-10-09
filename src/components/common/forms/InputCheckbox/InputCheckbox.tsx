import * as React from "react"
import * as classNames from "classnames"
import { Field } from "formik"
const CSS = require("./InputCheckbox.styl")

export interface InputCheckboxProps {
    name: string
    title?: string
    className?: string
    isChecked?: boolean
    onChange?: (val: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputCheckbox: React.SFC<InputCheckboxProps> = (props) => {
    return (
        <label className={classNames(CSS.container, props.className)}>
            <input
                type="checkbox"
                className={CSS.input}
                name={props.name}
                checked={props.isChecked}
                onChange={(val) => {
                    console.log(val)
                    if (props.onChange) {
                        props.onChange(val)
                    }
                }}
            />
            <span className={CSS.mark}/>
            <span className={CSS.title}>{props.title}</span>
        </label>
    )
}

interface FieldInputCheckboxProps extends InputCheckboxProps {
    value: any
}

export const FieldInputCheckbox: React.SFC<FieldInputCheckboxProps> = (props) => {
    return (
        <Field
            name={props.name}
            render={({ field, form }) => {
                const valuesList = form.values[props.name]
                const index = valuesList.findIndex((a) => a === props.value)
                const isChecked = index > -1

                return <InputCheckbox
                    title={props.title}
                    name={props.name}
                    className={props.className}
                    isChecked={isChecked}
                    onChange={() => {
                        form.setFieldTouched(props.name)
                        if (isChecked) {
                            valuesList.splice(index, 1)
                            form.setFieldValue(props.name, valuesList)
                        } else {
                            valuesList.push(props.value)
                            form.setFieldValue(props.name, valuesList)
                        }
                    }}
                />
            }}
        />
    )
}

export const FieldInputCheckboxSingle: React.SFC<InputCheckboxProps> = (props) => {
    return (
        <Field
            name={props.name}
            render={({ field, form }) => {

                const isChecked = !!form.values[props.name]

                return <InputCheckbox
                    name={props.name}
                    title={props.title}
                    className={props.className}
                    isChecked={isChecked}
                    onChange={(e) => {
                        form.setFieldTouched(props.name)
                        form.handleChange(e)
                    }}
                />
            }}
        />
    )
}
