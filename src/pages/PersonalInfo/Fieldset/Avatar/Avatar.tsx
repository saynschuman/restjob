import * as React from "react"
import { Field } from "formik"
import FileReaderInput from "react-file-reader-input"
const CSS = require("./Avatar.styl")

interface AvatarProps {
  className?: string
}

export class Avatar extends React.PureComponent<AvatarProps> {
  state = {
    url: "",
  }
  handleChange = (e, results) => {
    results.forEach((result) => {
      const [e] = result
      this.setState({
        url: e.target.result,
      })
    })
  }
  render() {
    const avatarBackgroundUploaded = {
      backgroundImage: "url(" + this.state.url + ")",
    }
    return (
      <div className={CSS.photo}>
        <div className={CSS.photoInner}>
          <div className={CSS.photoTitle}>
            {__t("personalInfoPage.yourPhoto")}
          </div>
          <Field
            name={`image`}
            render={({ field }) => {
              return (
                <label htmlFor={"image"}>
                    {this.state.url.length > 0 ? (
                        <div className={CSS.photoPreview} style={avatarBackgroundUploaded} />
                    ) : (
                        <div className={CSS.photoPreview} />
                    )}
                  <FileReaderInput
                    as="url"
                    id={"image"}
                    type="file"
                    multiple
                    onChange={this.handleChange}
                  />
                  <div className={CSS.photoLink}>
                    {__t("personalInfoPage.uploadPhoto")}
                  </div>
                </label>
              )
            }}
          />
        </div>
      </div>
    )
  }
}
