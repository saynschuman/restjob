import * as React from "react"
import { FormFieldset, FormFieldsetProps } from "../FormFieldset"
import { FieldInputRadio } from "../../../../components/common/forms/InputRadio/InputRadio"
import { InputCheckbox } from "../../../../components/common/forms/InputCheckbox/InputCheckbox"
import { Field } from "formik"
const CSS = require("./Kitchen.styl")
import classNames from "classnames"

interface KitchenFieldsetProps extends FormFieldsetProps {
  experienceLevels: string[]
  value: string
}

export class KitchenFieldset extends React.PureComponent<KitchenFieldsetProps> {
  state = {
    levels: this.props.experienceLevels,
    newKitchenList: [],
    newKitchen: "",
  }
  render() {
    const addKitchen = () => {
      if (
        this.state.newKitchen.length > 0 &&
        this.state.newKitchenList.indexOf(this.state.newKitchen) === -1) {
        this.setState({
          newKitchenList: this.state.newKitchenList.concat(
            this.state.newKitchen,
          ).filter((el) => this.state.newKitchenList.indexOf(el) !== 0),
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
        titleText={__t("desiredSalary.kitchen.title")}
      >
        <div className={CSS.workExperienceList}>
          {this.state.levels.map((level, index) => (
            <FieldInputRadio
              title={level}
              key={index}
              name={`experience`}
              className={CSS.workExperienceInput}
              value={level}
            />
          ))}
        </div>

        {this.state.newKitchenList.length > 0 &&
          this.state.newKitchenList.map((kitchen, index) => {
            return (
              <Field
                key={index}
                name={`experienceList`}
                render={({ field, form }) => {
                  const valuesList = form.values[`experienceList`]
                  const index = valuesList.findIndex((a) => a === kitchen)
                  const isChecked = index > -1
                  return (
                    <InputCheckbox
                      name={`experienceList`}
                      title={kitchen}
                      className={CSS.labelCheckbox}
                      isChecked={isChecked}
                      onChange={() => {
                        form.setFieldTouched(`experienceList`)
                        if (isChecked) {
                          valuesList.splice(index, 1)
                          form.setFieldValue(`experienceList`, valuesList)
                        } else {
                          valuesList.push(kitchen)
                          form.setFieldValue(`experienceList`, valuesList)
                        }
                      }}
                    />
                  )
                }}
              />
            )
          })}
        {this.props.value === "Другая" && (
          <Field
            name={`experience`}
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
                        form.setFieldValue(`experience`, [])
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
