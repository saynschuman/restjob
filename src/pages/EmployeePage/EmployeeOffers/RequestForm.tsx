import * as React from "react"
import { avatarMock } from "../../../mocks"
import { RedButton } from "../../../components/common/Buttons/RedButton/RedButton"
import { GreenButton } from "../../../components/common/Buttons/GreenButton/GreenButton"
const CSS = require("./EmployeeOffersPage.styl")

export const RequestForm: React.SFC = () => {
  return (
    <div className={CSS.flRow}>
      <div className={CSS.iconContainer}>
        <span className={CSS.avatar}>
          <img src={avatarMock} alt="" />
        </span>
      </div>
      <div className={CSS.textContainer}>
        <form>
          <textarea
            placeholder={"Ваше сообщение работодателю (необязательно)"}
          />
          <div className={CSS.flRow}>
            <GreenButton>{__t("employeePage.agree")}</GreenButton>
            <RedButton>{__t("employeePage.reject")}</RedButton>
          </div>
        </form>
      </div>
    </div>
  )
}
