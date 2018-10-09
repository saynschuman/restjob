import * as React from "react"
import { Select } from "../../components/Select/Select"
import classNames from "classnames"

const CSS = require("./NativeLanguage.styl")

interface Language {
  label: string
  value: string
}

export interface NativeLanguageProps {
  languageList: Language[]
  title?: string
  isValid: boolean
}

export const NativeLanguage: React.SFC<NativeLanguageProps> = (props) => {
  return (
    <div className={CSS.nativeContainer}>
      <div
        className={classNames({
          [CSS.blockTitle]: true,
          [CSS.notValid]: !props.isValid,
        })}
      >
        {props.title}
      </div>
      <Select
        isValid={props.isValid}
        name={"nativeLanguage"}
        placeholder={__t("educationPage.selectNativeLanguage")}
        data={props.languageList}
        big
      />
    </div>
  )
}
