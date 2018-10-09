import * as React from "react"
import { Banner } from "../../types"
import { ColumnsPageContainer } from "../../components/LayoutContainers/PageContainer/PageContainer"
import { MainContainerBig } from "../../components/LayoutContainers/MainContainer/MainContainer"
import { PageTitle } from "../../components/common/PageTitle/PageTitle"
import { Formik, FormikProps, Form as FormikForm } from "formik"
import {VerticalBanner} from "../../components/common/VerticalBanner/VerticalBanner"
import {MobileAppBlock} from "../../components/common/MobileAppBlock/MobileAppBlock"
import {AsideRightContainer} from "../../components/LayoutContainers/AsideRightContainer/AsideRightContainer"
import {Languages} from "./Fieldsets/Languages/Languages"
import {Education} from "./Fieldsets/Education/Education"
import {School} from "./Fieldsets/School"
import {Qualification} from "./Fieldsets/Qualification/Qualification"
import {BlueButton} from "../../components/common/Buttons/BlueButton/BlueButton"
const CSS = require("./EducationPage.styl")

export interface EducationPageProps {
  banner?: Banner
  onSubmit(values): any
}

export interface EducationPageFormData {
  nativeLanguage: string
  educationLevel: string
}

export class EducationPage extends React.PureComponent<EducationPageProps> {
  render() {
    const initialFormValues: EducationPageFormData = {
      nativeLanguage: "",
      educationLevel: "",
    }
    return (
      <ColumnsPageContainer>
        <MainContainerBig>
          <PageTitle text={__t("educationPage.title")} mBottom={true} />
          <Formik
            onSubmit={this.props.onSubmit}
            initialValues={initialFormValues}
            render={(FormikBag: FormikProps<EducationPageFormData>) => {
              const { values, touched } = FormikBag
              const nativeLanguageTouched = touched.nativeLanguage
              const nativeLanguageValid = !!values.nativeLanguage || !nativeLanguageTouched
              const edLevelTouched = touched.educationLevel
              const edLevelValid = !!values.educationLevel || !edLevelTouched

              return (
                <FormikForm>
                    <Languages isValid={nativeLanguageValid} isVisible={true}/>
                    <Education isValid={edLevelValid} isVisible={true}/>
                    <School isValid={true} isVisible={true}/>
                    <Qualification isValid={true} isVisible={true}/>
                    <BlueButton className={CSS.submitButton} isSubmit={true}>
                        {__t("educationPage.save")}
                    </BlueButton>
                </FormikForm>
              )
            }}
          />
        </MainContainerBig>
          <AsideRightContainer>
              {this.props.banner && (
                  <VerticalBanner
                      href={this.props.banner.href}
                      img={this.props.banner.img}
                  />
              )}
              <MobileAppBlock className={CSS.mobileAppBlock} />
          </AsideRightContainer>
      </ColumnsPageContainer>
    )
  }
}
