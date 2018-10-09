import * as React from "react"
import { FormFieldset, FormFieldsetProps } from "../FormFieldset"
import { Select } from "../components/Select/Select"
import { TextInputField } from "../../../../components/common/forms/TextInputField"

const CSS = require("./Qualification.styl")

interface CourseListProps {
    courseIndex: number[]
}

export class Qualification extends React.PureComponent<
    FormFieldsetProps,
    CourseListProps
    > {
    state = {
        courseIndex: [1],
    }
    addCourse = () => {
        this.setState({
            courseIndex: this.state.courseIndex.concat(this.state.courseIndex.length + 1),
        })
    }
    render() {
        return (
            <FormFieldset {...this.props} titleText={__t("educationPage.qualification")}>
                <div className={CSS.noMargin}>
                    {this.state.courseIndex.length > 0 &&
                    this.state.courseIndex.map((courseIndex) => {
                        return (
                            <div key={courseIndex} className={CSS.courseWrapper}>
                                <div className={CSS.container}>
                                    <div className={CSS.blockTitle}>
                                        {__t("educationPage.courseCity")}
                                    </div>
                                    <TextInputField
                                        className={CSS.big}
                                        name={`courseCity-${courseIndex}`}
                                    />
                                </div>
                                <div className={CSS.container}>
                                    <div className={CSS.blockTitle}>
                                        {__t("educationPage.courseName")}
                                    </div>
                                    <TextInputField
                                        className={CSS.big}
                                        name={`courseName-${courseIndex}`}
                                    />
                                </div>
                                <div className={CSS.container}>
                                    <div className={CSS.blockTitle}>
                                        {__t("educationPage.courseOrganisation")}
                                    </div>
                                    <TextInputField
                                        className={CSS.big}
                                        name={`courseOrganisation-${courseIndex}`}
                                    />
                                </div>
                                <div className={CSS.container}>
                                    <div className={CSS.blockTitle}>
                                        {__t("educationPage.courseDiploma")}
                                    </div>
                                    <TextInputField
                                        className={CSS.big}
                                        name={`courseDiploma-${courseIndex}`}
                                    />
                                </div>
                                <div className={CSS.container}>
                                    <div className={CSS.blockTitle}>
                                        {__t("educationPage.courseGraduationYear")}
                                    </div>
                                    <Select
                                        isValid={this.props.isValid}
                                        name={`courseGraduationYear-${courseIndex}`}
                                        data={years}
                                        small
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div onClick={this.addCourse} className={CSS.addCourse}>{__t("educationPage.addCourse")}</div>
            </FormFieldset>
        )
    }
}

const years = [
    { label: "1999", value: "1999" },
    { label: "2000", value: "2000" },
    { label: "2001", value: "2001" },
]
