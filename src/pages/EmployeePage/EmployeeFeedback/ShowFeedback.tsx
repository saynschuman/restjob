import * as React from "react"
import { avatarMock } from "../../../mocks"
import {Vacancy} from "../../../types"
const CSS = require("./EmployeeFeedbackPage.styl")

export interface ShowFeedbackProps {
    vacancy: Vacancy
}

export class ShowFeedback extends React.PureComponent<ShowFeedbackProps> {
  state = {
    isOpenFeedback: false,
  }
  render() {
    return (
      <section>
        {!this.state.isOpenFeedback && (
          <button onClick={this.showMyFeedback} className={CSS.showFeedback}>
            {__t("employeePage.showFeedback")}
          </button>
        )}
        {this.state.isOpenFeedback && (
          <div className={CSS.flRow}>
            <div className={CSS.iconContainer}>
              <span className={CSS.avatar}>
                <img src={avatarMock} alt="" />
              </span>
            </div>
            <div className={CSS.textContainer}>
              <div className={CSS.titleGray}>
                {__t("employeePage.yourFeedback")}{" "}
                {this.props.vacancy.feedBackDate}
              </div>
              <div className={CSS.feedBackText}>
                {this.props.vacancy.feedBackText}
              </div>
            </div>
          </div>
        )}
      </section>
    )
  }
  showMyFeedback = () => {
    this.setState({
      isOpenFeedback: !this.state.isOpenFeedback,
    })
  }
}
