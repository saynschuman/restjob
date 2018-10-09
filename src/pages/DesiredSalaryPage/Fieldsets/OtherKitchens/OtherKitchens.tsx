import * as React from "react"
import {
  FieldInputCheckbox,
  InputCheckbox,
} from "../../../../components/common/forms/InputCheckbox/InputCheckbox"
import { FormFieldset, FormFieldsetProps } from "../FormFieldset"
import { Field } from "formik"
import classNames from "classnames"

const CSS = require("./OtherKitchens.styl")

export interface OtherKitchensProps extends FormFieldsetProps {
  otherKitchens: string[]
  value: string[]
}

export class OtherKitchens extends React.PureComponent<OtherKitchensProps> {
  state = {
    kitchens: this.props.otherKitchens,
    newKitchenList: [],
    newKitchen: "",
  }
  render() {
    const addKitchen = () => {
      if (
        this.state.newKitchen.length > 0 &&
        this.state.newKitchenList.indexOf(this.state.newKitchen) === -1
      ) {
        this.setState({
          newKitchenList: this.state.newKitchenList.concat(
            this.state.newKitchen,
          ),
          newKitchen: "",
        })
      } else {
        return null
      }
    }
    const addNew = (e) => {
      this.setState({
        newKitchen: e.target.value,
      })
    }
    return (
      <FormFieldset
        {...this.props}
        titleText={__t("desiredSalary.kitchen.titleAddition")}
      >
        <div className={CSS.otherKitchens}>
          {this.props.otherKitchens.map((kitchen, index) => (
            <FieldInputCheckbox
              key={index}
              title={kitchen}
              value={kitchen}
              name={`otherKitchens`}
              className={CSS.kitchensCheckbox}
            />
          ))}
        </div>
        {this.state.newKitchenList.length > 0 &&
          this.state.newKitchenList.map((kitchen, index) => {
            return (
              <Field
                key={index}
                name={`otherKitchens`}
                render={({ field, form }) => {
                  const valuesList = form.values[`otherKitchens`]
                  const index = valuesList.findIndex((a) => a === kitchen)
                  const isChecked = index > -1
                  return (
                    <InputCheckbox
                      name={`experienceList`}
                      title={kitchen}
                      className={CSS.labelCheckbox}
                      isChecked={isChecked}
                      onChange={() => {
                        form.setFieldTouched(`otherKitchens`)
                        if (isChecked) {
                          valuesList.splice(index, 1)
                          form.setFieldValue(`otherKitchens`, valuesList)
                        } else {
                          valuesList.push(kitchen)
                          form.setFieldValue(`otherKitchens`, valuesList)
                        }
                      }}
                    />
                  )
                }}
              />
            )
          })}
        {this.props.value.indexOf("Другая") !== -1 && (
          <Field
            name={`otherKitchens`}
            render={({ field, form }) => {
              return (
                <div className={CSS.addKitchenContainer}>
                  <div className={CSS.title}>
                    {__t("desiredSalary.kitchen.addKitchen")}
                  </div>
                  <input
                    className={CSS.addKitchen}
                    placeholder={"Введите название"}
                    value={this.state.newKitchen}
                    onChange={(e) => addNew(e)}
                    type="text"
                  />
                  <div className={CSS.buttonsContainer}>
                    <div
                      className={classNames({
                        [CSS.button]: true,
                        [CSS.blue]: true,
                      })}
                      onClick={addKitchen}
                    >
                      {__t("desiredSalary.kitchen.add")}
                    </div>
                    <div
                      className={classNames({
                        [CSS.button]: true,
                        [CSS.red]: true,
                      })}
                      onClick={() => {
                        form.setFieldValue(`otherKitchens`, [])
                        this.setState({
                          newKitchenList: [],
                        })
                      }}
                    >
                      {__t("desiredSalary.kitchen.remove")}
                    </div>
                  </div>
                </div>
              )
            }}
          />
        )}
      </FormFieldset>
    )
  }
}
