import * as React from "react"
import { GreenButton } from "../Buttons/GreenButton/GreenButton"
import classNames from "classnames"

const CSS = require("./PageTitle.styl")

interface PageTitleProps<T> {
  text: string
  value?: T
  isFilter?: boolean
  filters?: Array<SelectFilterOption<T>>
  isButton?: boolean
  mBottom?: boolean
  onClick?(): any
  onChange?(value: T): void
}

export interface SelectFilterOption<T> {
  title: string
  value: T
}

export class PageTitle<T> extends React.PureComponent<PageTitleProps<T>> {
  render() {
    return (
      <section
        className={classNames({ [CSS.withButton]: this.props.isButton, [CSS.isFilter]: this.props.isFilter, [CSS.mBottom]: this.props.mBottom })}
      >
        <h1 className={CSS.title}>{this.props.text}</h1>
        {this.props.isButton && (
          <GreenButton
            onClick={() => {
              if (this.props.onClick) {
                this.props.onClick()
              }
            }}
          >
            Добавить место работы
          </GreenButton>
        )}
        {this.props.isFilter && (
          <div className={CSS.filtersContainer}>
            {this.props.filters.map((filter, index) => {
              return (
                <label
                  key={index}
                  className={classNames(CSS.filter, {
                    [CSS.active]: filter.value === this.props.value,
                  })}
                >
                  <input
                    type="checkbox"
                    className={CSS.checkbox}
                    checked={filter.value === this.props.value}
                    onChange={() => this.props.onChange(filter.value)}
                  />
                  {filter.title}
                </label>
              )
            })}
          </div>
        )}
      </section>
    )
  }
}
