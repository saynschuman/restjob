import * as React from "react"
const CSS = require("./UpploadPhoto.styl")
import {Field} from "formik"
import FileReaderInput from "react-file-reader-input"

export class UpploadPhoto extends React.PureComponent {
  state = {
    url: [],
  }
  deletePreview = (e) => {
    this.setState({
      url: this.state.url.filter(
        (element) => this.state.url.indexOf(element) !== e,
      ),
    })
  }
  handleChange = (e, results) => {
    results.forEach((result) => {
      const [e] = result
      this.setState({
        url: this.state.url.concat(e.target.result),
      })
    })
  }
  render() {
    return (
      <div className={CSS.upploadContainer}>
        <Field
          name={`photos`}
          render={({field}) => {
            return (
              <div>
                <label htmlFor={"upploadPhoto"}>Загрузить фото</label>
                <div className={CSS.previewContainer}>
                  <FileReaderInput
                    as="url"
                    id={"upploadPhoto"}
                    type="file"
                    multiple
                    onChange={this.handleChange}
                  />
                  <div className={CSS.previewBlock}>
                    {this.state.url.length
                      ? this.state.url.map((url, index) => (
                          <div className={CSS.preview} key={index}>
                            <img src={url} alt="" />
                            <div
                              className={CSS.close}
                              onClick={(e) => this.deletePreview(index)}>
                              x
                            </div>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              </div>
            )
          }}
        />
      </div>
    )
  }
}
