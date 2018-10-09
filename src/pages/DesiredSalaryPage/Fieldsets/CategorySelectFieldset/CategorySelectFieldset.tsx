import * as React from "react"
import * as classNames from "classnames"
import { FieldInputCheckbox } from "../../../../components/common/forms/InputCheckbox/InputCheckbox"
import { FormFieldset, FormFieldsetProps } from "../FormFieldset"
import { Field } from "formik"
const CSS = require("./CategorySelectFieldset.styl")

export interface Category {
    title: string
    image: string
    specializations: string[]
}

export interface CategorySelectProps extends FormFieldsetProps {
    categories: Category[]
    currentCategory: Category
}

export class CategorySelectFieldset extends React.PureComponent<CategorySelectProps> {
    renderSpecializations() {
        if (!this.props.currentCategory) {
            return
        }

        return (
            <>
                <h3 className={CSS.currentCategoryTitle}>
                    {__t("publishVacancyPage.chooseSpecialization")}
                    <span className={CSS.currentCategoryWord}>{this.props.currentCategory.title}</span>
                </h3>
                {this.props.currentCategory.specializations.map((spec, index) => {
                    return <FieldInputCheckbox
                        name={"specializations"}
                        title={spec}
                        value={spec}
                        key={index}
                        className={CSS.checkbox}
                    />
                })}
            </>
        )
    }

    render() {
        return (
            <FormFieldset
                isVisible={this.props.isVisible}
                isValid={this.props.isValid}
                titleText={__t("publishVacancyPage.listItem3")}
            >
                <div className={CSS.categorylist}>
                    {this.props.categories.map((category, index) => {
                        const isCurrent = this.props.currentCategory === category
                        return (
                            <Field
                                key={index}
                                name={"category"}
                                render={({ field, form }) => {
                                    return <div
                                        className={classNames(
                                            CSS.categoryTab,
                                            { [CSS.active]: isCurrent },
                                        )}
                                        style={{ backgroundImage: `url(${category.image})` }}
                                        key={index}
                                        onClick={() => {
                                            if (category === this.props.currentCategory) {
                                                return
                                            }
                                            form.setFieldTouched("category")
                                            form.setFieldValue(`category`, category)
                                            form.setFieldValue(`specializations`, [])
                                        }}
                                    >
                                        <span className={CSS.categoryTitle}>{category.title}</span>
                                    </div>
                                }}
                            />
                        )
                    })}
                </div>
                {this.renderSpecializations()}
            </FormFieldset>
        )
    }
}
