import * as React from "react"
const CSS = require("./Recommended.styl")
import * as classNames from "classnames"

class Recommended extends React.PureComponent {
  render() {
    return (
      <div
        className={classNames(CSS.recommended, CSS.headerSpecialRecommended)}
      >
        {__t("vacancyPage.recommended")}
      </div>
    )
  }
}

export default Recommended
