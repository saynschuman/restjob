import * as React from "react"
import { FormFieldset, FormFieldsetProps } from "../FormFieldset"
import { TextInputField } from "../../../../components/common/forms/TextInputField"
import { Select } from "../components/Select/Select"
import { BlueButton } from "../../../../components/common/Buttons/BlueButton/BlueButton"
const CSS = require("./Requisites.styl")
import { Data } from "../../../../types"

interface RequisitesProps extends FormFieldsetProps {
  entities: Data[]
  entityVal: string
}

export class Requisites extends React.PureComponent<RequisitesProps> {
  state = {
    value: this.props.entityVal,
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.entityVal,
    })
  }
  render() {
    return (
      <div className={CSS.requirmentsWrapper}>
        <FormFieldset {...this.props}>
          <div className={CSS.container}>
            <div className={CSS.blockTitle}>{__t("balance.entity")}</div>
            {this.props.entities.length > 0 ? (
              <Select
                name={`entityName`}
                data={this.props.entities}
                width={329}
              />
            ) : (
              <TextInputField width={329} name={`entityName`} />
            )}
          </div>
          {this.props.entityVal === "addNew" && (
              <div className={CSS.container}>
                  <div className={CSS.blockTitle}>{__t("balance.newEntity")}</div>
                  <TextInputField width={329} name={`newEntity`} />
              </div>
          )}
          <div className={CSS.container}>
            <div className={CSS.blockTitle}>{__t("balance.address")}</div>
            <TextInputField width={329} name={`entityAddress`} />
          </div>
          <div className={CSS.container}>
            <div className={CSS.blockTitle}>{__t("balance.inn")}</div>
            <TextInputField
              className={CSS.shortInput}
              width={156}
              name={`inn`}
            />
            <TextInputField
              className={CSS.shortInput}
              width={156}
              name={`kpp`}
            />
          </div>
          <div className={CSS.container}>
            <div className={CSS.blockTitle}>{__t("balance.director")}</div>
            <TextInputField width={329} name={`inn`} />
          </div>
          <div className={CSS.container}>
            <div className={CSS.blockTitle}>{__t("balance.sum")}</div>
            <TextInputField
              className={CSS.sum}
              width={156}
              height={53}
              name={`sum`}
            />
            <div className={CSS.notLess}>{__t("balance.notLess")}</div>
          </div>
          <BlueButton className={CSS.submitButton} isSubmit={true}>
            {__t("balance.save")}
          </BlueButton>
        </FormFieldset>
      </div>
    )
  }
}
