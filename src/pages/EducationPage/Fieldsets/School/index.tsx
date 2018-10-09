import * as React from "react"
import { FormFieldset, FormFieldsetProps } from "../FormFieldset"
import { Select } from "../components/Select/Select"
import { TextInputField } from "../../../../components/common/forms/TextInputField"

const CSS = require("./index.styl")

interface SchoolListProps {
  schoolIndex: number[]
}

export class School extends React.PureComponent<
  FormFieldsetProps,
  SchoolListProps
> {
  state = {
    schoolIndex: [1],
  }
  addSchool = () => {
      this.setState({
          schoolIndex: this.state.schoolIndex.concat(this.state.schoolIndex.length + 1),
      })
  }
  render() {
    return (
      <FormFieldset {...this.props} titleText={__t("educationPage.school")}>
        <div className={CSS.noMargin}>
          {this.state.schoolIndex.length > 0 &&
            this.state.schoolIndex.map((schoolIndex) => {
              return (
                <div key={schoolIndex} className={CSS.schooleWrapper}>
                  <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                      {__t("educationPage.schoolCity")}
                    </div>
                    <TextInputField
                      className={CSS.big}
                      name={`schoolCity-${schoolIndex}`}
                    />
                  </div>
                  <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                      {__t("educationPage.schoolName")}
                    </div>
                    <TextInputField
                      className={CSS.big}
                      name={`schoolName-${schoolIndex}`}
                    />
                  </div>
                  <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                      {__t("educationPage.schoolFaculty")}
                    </div>
                    <TextInputField
                      className={CSS.big}
                      name={`schoolFaculty-${schoolIndex}`}
                    />
                  </div>
                  <div className={CSS.container}>
                    <div className={CSS.blockTitle}>
                      {__t("educationPage.schoolGraduationYear")}
                    </div>
                    <Select
                      isValid={this.props.isValid}
                      name={`schoolGraduationYear-${schoolIndex}`}
                      data={years}
                      small
                    />
                  </div>
                </div>
              )
            })}
        </div>
          <div onClick={this.addSchool} className={CSS.addSchool}>{__t("educationPage.addSchool")}</div>
      </FormFieldset>
    )
  }
}

const years = [
  { label: "1999", value: "1999" },
  { label: "2000", value: "2000" },
  { label: "2001", value: "2001" },
]
