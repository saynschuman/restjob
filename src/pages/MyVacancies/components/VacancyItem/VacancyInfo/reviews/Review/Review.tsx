import * as React from "react"
const CSS = require("./Review.styl")
import classNames from "classnames"

export interface ReviewProps {
  quantity: number
  new?: number
  title: string
  isFeedBacks?: boolean
}

export const Review: React.SFC<ReviewProps> = (props) => {
  return (
    <div className={classNames({[CSS.reviewContainer]: true, [CSS.isFeedBacks]: props.isFeedBacks})}>
      <div className={CSS.quantity}> {props.quantity} </div>
      <div className={CSS.title}>{props.title}</div>
        { props.new ? (
            <div className={CSS.new}>{props.new}</div>
        ) : null}
    </div>
  )
}
