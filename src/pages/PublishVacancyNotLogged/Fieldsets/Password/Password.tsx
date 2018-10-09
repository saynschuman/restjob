import * as React from "react"
import {
  PublishVacancyFieldset,
  PublishVacancyFieldsetProps,
} from "../PublishVacancyFieldset"
import { Field } from "formik"
const CSS = require("./Password.styl")
import * as classNames from "classnames"

export class Password extends React.PureComponent<PublishVacancyFieldsetProps> {
  state = {
    password1: "",
    password2: "",
  }
  handleFocus1 = (e) => {
    this.setState({
      password1: e.target.value,
    })
  }
  handleFocus2 = (e) => {
    this.setState({
      password2: e.target.value,
    })
  }
  render() {
    return (
      <PublishVacancyFieldset
        {...this.props}
        titleText={__t("publishNotLogged.setPassword")}
      >
        <div className={CSS.passwordContainer}>
          <div
            data-not-val={__t("publishNotLogged.notVal")}
            className={classNames(
              { [CSS.passwordInput]: true },
              {
                [CSS.valid]:
                  this.state.password1.length > 0 &&
                  this.state.password1 === this.state.password2,
              },
            )}
          >
            <label className={CSS.passwordInputLabel} htmlFor={"password"}>
              {__t("publishNotLogged.password")}
            </label>
            <Field
              name={`password`}
              render={({ field }) => {
                return (
                  <div className={CSS.passwordInput}>
                    <input
                      {...field}
                      type="text"
                      value={this.state.password1}
                      onChange={this.handleFocus1}
                    />
                  </div>
                )
              }}
            />
          </div>
          <div
            data-not-val={__t("publishNotLogged.notVal")}
            className={classNames(
              { [CSS.passwordInput]: true },
              {
                [CSS.notValid]:
                  this.state.password2.length > 0 &&
                  this.state.password1 !== this.state.password2,
              },
              {
                [CSS.valid]:
                  this.state.password2.length > 0 &&
                  this.state.password1 === this.state.password2,
              },
            )}
          >
            <label
              className={CSS.passwordInputLabel}
              htmlFor={"passwordRepeat"}
            >
              {__t("publishNotLogged.passwordRepeat")}
            </label>
            <Field
              name={`passwordRepeat`}
              render={({ field }) => {
                return (
                  <div className={CSS.passwordInput}>
                    <input
                      {...field}
                      type="text"
                      value={this.state.password2}
                      onChange={this.handleFocus2}
                    />
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
