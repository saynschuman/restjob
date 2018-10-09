import * as React from "react"
const CSS = require("./WorkPlacePage.styl")
import { Gallery } from "../../../components/common/Gallery/Gallery"

export interface WorkPlaceItemProps {
  orgname: string
  position: string
  period: string
  description: string
  photoSet?: string[]
}

export class WorkPlaceItem extends React.PureComponent<WorkPlaceItemProps> {
  state = {
    isOpen: false,
  }
  OpenDescr = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const { description } = this.props
    return (
      <section className={CSS.item}>
        <div className={CSS.headerItem}>
          <div className={CSS.title}>
            {this.props.orgname} / {this.props.position}
          </div>
          <div className={CSS.period}>{this.props.period}</div>
          <div className={CSS.links}>
            <span>{__t("workPlace.edit")}</span>
            <span className={CSS.red}>{__t("workPlace.delete")}</span>
          </div>
        </div>
        <div className={CSS.bodyItem}>
          <div className={CSS.description}>
              {(description.length > 300 && !this.state.isOpen) ? (description.slice(0, 300)) : description}
              {(!this.state.isOpen && description.length > 300) ? (
                  <span onClick={this.OpenDescr} className={CSS.openDescr}>
                {__t("workPlace.openFull")}
              </span>
              ) : description}
          </div>
            {this.props.photoSet && (
                <section className={CSS.photos}>
                    <Gallery images={this.props.photoSet} />
                </section>
            )}
        </div>
      </section>
    )
  }
}
