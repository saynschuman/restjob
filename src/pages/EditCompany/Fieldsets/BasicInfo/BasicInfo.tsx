import * as React from "react"
import { FormFieldset, FormFieldsetProps } from "../../Fieldsets/FormFieldset"
import { TextInputField } from "../../../../components/common/forms/TextInputField"
import { Select } from "../components/Select/Select"
import { UpploadPhoto } from "../components/UpploadPhoto/UpploadPhoto"
import { UpploadLogo } from "../components/UpploadLogo/UpploadLogo"

const CSS = require("./BasicInfo.styl")

interface State {
  addressIndex: number[]
}

export class BasicInfo extends React.PureComponent<FormFieldsetProps, State> {
  state = {
    addressIndex: [],
  }
  addAddress = () => {
    this.setState({
      addressIndex: this.state.addressIndex.concat(
        this.state.addressIndex.length + 1,
      ),
    })
  }
  render() {
    return (
      <FormFieldset {...this.props} titleText={__t("editCompany.basicInfo")}>
        <div className={CSS.textInputsWrapper}>
          <div className={CSS.container}>
            <div className={CSS.blockTitle}>{__t("editCompany.entity")}</div>
            <Select name={`entityNumber`} data={days} width={86} />
            <TextInputField width={231} name={`entityName`} />
          </div>
          <div className={CSS.container}>
            <div className={CSS.blockTitle}>{__t("editCompany.name")}</div>
            <TextInputField width={329} name={`name`} />
          </div>
          <div className={CSS.container}>
            <div className={CSS.blockTitle}>{__t("editCompany.format")}</div>
            <Select name={`format`} data={formats} width={329} />
          </div>
          <div className={CSS.container}>
            <div className={CSS.blockTitle}>{__t("editCompany.city")}</div>
            <Select name={`city`} data={cities} width={329} />
          </div>
          <div className={CSS.container}>
            <div className={CSS.blockTitle}>{__t("editCompany.address")}</div>
            <TextInputField width={329} name={`address`} />
          </div>
          {this.state.addressIndex.length > 0 &&
            this.state.addressIndex.map((i) => {
              return (
                <div key={i} className={CSS.container}>
                  <div className={CSS.blockTitle}>
                    {__t("editCompany.addressIterated")} {i + 1}
                  </div>
                  <TextInputField width={329} name={`address-${i + 1}`} />
                </div>
              )
            })}
          <div className={CSS.container}>
            <div className={CSS.blockTitle} />
            <span onClick={this.addAddress} className={CSS.addAddress}>
              {__t("editCompany.addAddress")}
            </span>
          </div>
          <div className={CSS.container}>
            <div className={CSS.blockTitle}>
              {__t("editCompany.uploadPhoto")}
            </div>
            <div className={CSS.upploadPhoto}>
              <span>{__t("editCompany.upload10")}</span>
              <UpploadPhoto />
            </div>
          </div>
        </div>
        <div className={CSS.upploadLogoWrapper}>
            <UpploadLogo />
        </div>
      </FormFieldset>
    )
  }
}

const days = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
]

const formats = [
  { label: "формат 1", value: "формат 1" },
  { label: "формат 2", value: "формат 2" },
  { label: "формат 3", value: "формат 3" },
  { label: "формат 4", value: "формат 4" },
  { label: "формат 5", value: "формат 5" },
]

const cities = [
  { label: "город 1", value: "город 1" },
  { label: "город 2", value: "город 2" },
  { label: "город 3", value: "город 3" },
  { label: "город 4", value: "город 4" },
  { label: "город 5", value: "город 5" },
]
