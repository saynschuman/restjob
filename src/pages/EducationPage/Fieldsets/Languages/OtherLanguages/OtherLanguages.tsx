import * as React from "react"
import { Select } from "../../components/Select/Select"

const CSS = require("./OtherLanguages.styl")

interface Language {
  label: string
  value: string
}

export interface OtherLanguagesProps {
  title?: string
  otherLanguages: Language[]
  levelList: Language[]
}

export class OtherLanguages extends React.PureComponent<OtherLanguagesProps> {
  state = {
    languages: [{ language: "английский", level: "разговорный" }],
  }
  deleteLang = () => {
    this.setState({
      languages: this.state.languages.filter(
        (el) =>
          this.state.languages.indexOf(el) !== this.state.languages.length - 1,
      ),
    })
  }
  render() {
    const addLang = () => {
      const newLang = { language: "английский", level: "разговорный" }
      this.setState({
        languages: this.state.languages.concat(newLang),
      })
    }
    return (
      <div className={CSS.langContainer}>
        <div className={CSS.blockTitle}>{this.props.title}</div>
        {this.state.languages.map((language, index) => {
          return (
            <div key={index} className={CSS.otherLangContainer}>
              <Select
                name={"addition language " + index}
                placeholder={__t("educationPage.selectLanguage")}
                data={this.props.otherLanguages}
                isValid={true}
                middle
              />
              <Select
                name={"addition language level " + index}
                placeholder={__t("educationPage.selectLevel")}
                data={this.props.levelList}
                isValid={true}
                middle
              />
            </div>
          )
        })}
        {this.state.languages.length > 0 && (
          <div onClick={this.deleteLang} className={CSS.delLang}>
            {__t("educationPage.deleteLang")}
          </div>
        )}
        <div onClick={addLang} className={CSS.addLang}>
          {__t("educationPage.addLang")}
        </div>
      </div>
    )
  }
}
