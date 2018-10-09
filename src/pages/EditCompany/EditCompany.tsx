import * as React from "react"
import { Banner } from "../../types"
import { ColumnsPageContainer } from "../../components/LayoutContainers/PageContainer/PageContainer"
import { MainContainerBig } from "../../components/LayoutContainers/MainContainer/MainContainer"
import { PageTitle } from "../../components/common/PageTitle/PageTitle"
import { Form as FormikForm, Formik, FormikProps } from "formik"
import { BlueButton } from "../../components/common/Buttons/BlueButton/BlueButton"
import { VerticalBanner } from "../../components/common/VerticalBanner/VerticalBanner"
import { MobileAppBlock } from "../../components/common/MobileAppBlock/MobileAppBlock"
import { AsideRightContainer } from "../../components/LayoutContainers/AsideRightContainer/AsideRightContainer"
import { BasicInfo } from "./Fieldsets/BasicInfo/BasicInfo"
import { Contacts } from "./Fieldsets/Contacts/Contacts"
import { AdditionalInfo } from "./Fieldsets/AdditionalInfo/AdditionalInfo"

const CSS = require("./EditCompany.styl")

export interface EditCompanyInfoProps {
  banner?: Banner
  onSubmit(values): any
}

export interface EditCompanyPageFormData {
  entity: string
}

export class EditCompany extends React.PureComponent<EditCompanyInfoProps> {
  render() {
    const initialFormValues: EditCompanyPageFormData = {
      entity: "",
    }
    return (
      <ColumnsPageContainer>
        <MainContainerBig>
          <PageTitle text={__t("editCompany.title")} mBottom />
          <Formik
            onSubmit={this.props.onSubmit}
            initialValues={initialFormValues}
            render={(FormikBag: FormikProps<EditCompanyPageFormData>) => {
              // const { values, touched } = FormikBag
              return (
                <FormikForm>
                  <BasicInfo isVisible={true} isValid={true}/>
                  <Contacts isVisible={true} isValid={true}/>
                  <AdditionalInfo isVisible={true} isValid={true}/>
                  <BlueButton className={CSS.submitButton} isSubmit={true}>
                    {__t("editCompany.save")}
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
