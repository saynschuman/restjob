import * as React from "react"
import {
  PublishVacancyFieldset,
  PublishVacancyFieldsetProps,
} from "../PublishVacancyFieldset"
import { TextInputField } from "../../../../components/common/forms/TextInputField"
import { Field } from "formik"
const CSS = require("./RegisterData.styl")
import { SelectInputField } from "../../../../components/common/forms/SelectInputField"
import FileReaderInput from "react-file-reader-input"
import classNames from "classnames"

interface RegisterProps extends PublishVacancyFieldsetProps {
  emailValid: boolean
  nameValid: boolean
  phoneValid: boolean
  shopValid: boolean
  formatValid: boolean
  adressValid: boolean
  siteValid: boolean
  cityValid: boolean
}

export class RegisterData extends React.PureComponent<RegisterProps> {
  state = {
    url: "",
  }
  deletePreview = () => {
    this.setState({
      url: "",
    })
  }
  handleChange = (e, results) => {
    results.forEach((result) => {
      const [e] = result
      this.setState({
        url: e.target.result,
      })
    })
  }
  render() {
    return (
      <PublishVacancyFieldset
        {...this.props}
        titleText={__t("publishNotLogged.registerDataTitle")}
      >
        <div className={CSS.registerInputContainer}>
          <div className={CSS.col}>
            <div className={CSS.contactInput}>
              <label className={CSS.contactInputLabel} htmlFor={"email"}>
                {__t("publishNotLogged.email")}
              </label>
              <label
                className={classNames({ [CSS.valid]: !this.props.emailValid })}
              >
                <TextInputField
                  name={"email"}
                  className={CSS.contactInputName}
                  inputAttributes={{ id: "email" }}
                />
              </label>
            </div>
            <div className={CSS.contactInput}>
              <label className={CSS.contactInputLabel} htmlFor={"name"}>
                {__t("publishNotLogged.name")}
              </label>
              <label
                className={classNames({ [CSS.valid]: !this.props.nameValid })}
              >
                <TextInputField
                  name={"name"}
                  className={CSS.contactInputName}
                  inputAttributes={{ id: "name" }}
                />
              </label>
            </div>
            <div className={CSS.contactInput}>
              <label className={CSS.contactInputLabel} htmlFor={"phone"}>
                {__t("publishNotLogged.phone")}
              </label>
              <label
                className={classNames({ [CSS.valid]: !this.props.phoneValid })}
              >
                <TextInputField
                  name={"phone"}
                  className={CSS.contactInputName}
                  inputAttributes={{ id: "phone" }}
                />
              </label>
            </div>
          </div>
          <div className={CSS.col}>
            <div className={CSS.contactInput}>
              <label className={CSS.contactInputLabel} htmlFor={"shopName"}>
                {__t("publishNotLogged.shopName")}
              </label>
              <label
                className={classNames({ [CSS.valid]: !this.props.shopValid })}
              >
                <TextInputField
                  name={"shopName"}
                  className={CSS.contactInputName}
                  inputAttributes={{ id: "shopName" }}
                />
              </label>
            </div>
            <div className={CSS.contactInput}>
              <label className={CSS.contactInputLabel} htmlFor={"format"}>
                {__t("publishNotLogged.format")}
              </label>
              <label
                className={classNames({ [CSS.valid]: !this.props.formatValid })}
              >
                <SelectInputField
                  name={"format"}
                  isFormatSelected
                  placeholder={"Выберите формат"}
                  formats={[
                    { label: "format1", value: "формат 1" },
                    { label: "format2", value: "формат 2" },
                    { label: "format3", value: "формат 3" },
                    { label: "format4", value: "формат 4" },
                  ]}
                />
              </label>
            </div>
            <div className={CSS.contactInput}>
              <label className={CSS.contactInputLabel} htmlFor={"vacancyPhone"}>
                {__t("publishNotLogged.vacancyPhone")}
              </label>
              <label
                className={classNames({ [CSS.valid]: false })}
              >
                <TextInputField
                  name={"vacancyPhone"}
                  className={CSS.contactInputName}
                  value={this.props.value}
                  inputAttributes={{
                    id: "vacancyPhone",
                    placeholder: "+7 (__)___-__-__",
                  }}
                />
              </label>
            </div>
          </div>
          <div className={CSS.col}>
            <div className={CSS.contactInput}>
              <label className={CSS.contactInputLabel} htmlFor={"city"}>
                {__t("publishNotLogged.city")}
              </label>
              <label
                className={classNames({ [CSS.valid]: !this.props.cityValid })}
              >
                <SelectInputField
                  name={"city"}
                  isFormatSelected
                  placeholder={"Выберите Город"}
                  formats={[
                    { label: "city1", value: "Город 1" },
                    { label: "city2", value: "Город 2" },
                    { label: "city3", value: "Город 3" },
                    { label: "city4", value: "Город 4" },
                  ]}
                />
              </label>
            </div>
            <div className={CSS.contactInput}>
              <label className={CSS.contactInputLabel} htmlFor={"adress"}>
                {__t("publishNotLogged.adress")}
              </label>
              <label
                className={classNames({ [CSS.valid]: !this.props.adressValid })}
              >
                <TextInputField
                  name={"adress"}
                  className={CSS.contactInputName}
                  inputAttributes={{ id: "adress" }}
                />
              </label>
            </div>
            <div className={CSS.contactInput}>
              <label className={CSS.contactInputLabel} htmlFor={"site"}>
                {__t("publishNotLogged.site")}
              </label>
              <label
                className={classNames({ [CSS.valid]: !this.props.siteValid })}
              >
                <TextInputField
                  name={"site"}
                  className={CSS.contactInputName}
                  inputAttributes={{ id: "site" }}
                />
              </label>
            </div>
          </div>
          <div className={CSS.contactInput}>
            <label className={CSS.contactInputLabel} htmlFor={"logo"}>
              {__t("publishNotLogged.logo")}
            </label>
            <Field
              name={`logo`}
              render={({ field }) => {
                return (
                  <div>
                    <FileReaderInput
                      as="url"
                      id={"logo"}
                      type="file"
                      onChange={this.handleChange}
                    />
                    <label className={CSS.upploadLogo} htmlFor="logo">
                      {__t("publishNotLogged.upploadLogo")}
                    </label>
                    <div className={CSS.previewBlock}>
                      {this.state.url.length > 0 ? (
                        <div className={CSS.preview}>
                          <img src={this.state.url} alt="" />
                          <div
                            className={CSS.close}
                            onClick={this.deletePreview}
                          >
                            x
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                )
              }}
            />
          </div>
        </div>
      </PublishVacancyFieldset>
    )
  }
}
