import * as React from "react"
import * as classNames from "classnames"

const CSS = require("./SelectFilters.styl")

export interface IFiltersProps<T> {
    filters: Array<SelectFilterOption<T>>
    value: T
    onChange(value: T): void
}

export interface SelectFilterOption<T> {
    title: string
    value: T
    responses?: number
}

export class SelectFilters<T> extends React.PureComponent<IFiltersProps<T>, null> {
    render() {
        return (
            <div className={CSS.container}>
                {this.props.filters.map((filter, index) => {
                    return (
                        <label
                            data-responses={filter.responses}
                            key={index}
                            className={
                                classNames(
                                    CSS.filter,
                                    {
                                        [CSS.active]: filter.value === this.props.value,
                                        [CSS.responses]: filter.responses > 0,
                                    },
                                )
                            }
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
        )
    }
}
