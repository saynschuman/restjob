import * as React from "react"
import {Banner} from "../../types"
import { ColumnsPageContainer } from "../../components/LayoutContainers/PageContainer/PageContainer"
import { MainContainerBig } from "../../components/LayoutContainers/MainContainer/MainContainer"
import {PageTitle} from "../../components/common/PageTitle/PageTitle"
import {Form as FormikForm, Formik, FormikProps} from "formik"
import {BlueButton} from "../../components/common/Buttons/BlueButton/BlueButton"
import {VerticalBanner} from "../../components/common/VerticalBanner/VerticalBanner"
import {MobileAppBlock} from "../../components/common/MobileAppBlock/MobileAppBlock"
import {AsideRightContainer} from "../../components/LayoutContainers/AsideRightContainer/AsideRightContainer"
import {Personal} from "./Fieldset/Personal/Personal"
import {Citizenship} from "./Fieldset/Citizenship/Citizenship"
import {ContactInfo} from "./Fieldset/ContactInfo/ContactInfo"
import {Social} from "./Fieldset/Social/Social"
import {Avatar} from "./Fieldset/Avatar/Avatar"

const CSS = require("./PersonalInfo.styl")

export interface PersonalInfoProps {
    banner?: Banner
    onSubmit(values): any
}

export interface PersonalInfoPageFormData {
    name: string
    surname: string
    fatherName: string
    "birthDay": string
    "birthMonth": string
    "birthYear": string
    gender: string
    nationality: string
    bornPlace: string
    live: string
    move: string
    phone: string
    email: string
    facebook: string
    vk: string
    avatar: string
}

export class PersonalInfo extends React.PureComponent<PersonalInfoProps> {
    render() {
        const initialFormValues: PersonalInfoPageFormData = {
            name: "",
            surname: "",
            fatherName: "",
            birthDay: "",
            birthMonth: "",
            birthYear: "",
            gender: "",
            nationality: "",
            bornPlace: "",
            live: "",
            move: "",
            phone: "",
            email: "",
            facebook: "",
            vk: "",
            avatar: "",
        }
        return (
            <ColumnsPageContainer>
                <MainContainerBig>
                <PageTitle text={__t("personalInfoPage.title")} mBottom />
                <Formik
                    onSubmit={this.props.onSubmit}
                    initialValues={initialFormValues}
                    render={(FormikBag: FormikProps<PersonalInfoPageFormData>) => {
                        // const { values, touched } = FormikBag
                        return (
                            <FormikForm>
                                <div className={CSS.info}>
                                    <Personal isValid={true} isVisible={true}/>
                                    <Avatar className={CSS.avatar}/>
                                </div>
                                <Citizenship isValid={true} isVisible={true}/>
                                <ContactInfo isValid={true} isVisible={true}/>
                                <Social isValid={true} isVisible={true}/>
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
