import * as React from "react"
import { AsideRightContainer } from "../../components/LayoutContainers/AsideRightContainer/AsideRightContainer"
import { MainContainerBig } from "../../components/LayoutContainers/MainContainer/MainContainer"
import { ColumnsPageContainer } from "../../components/LayoutContainers/PageContainer/PageContainer"
import { PageTitle } from "../../components/common/PageTitle/PageTitle"
import {
  Category,
  CategorySelectFieldset,
} from "./Fieldsets/CategorySelectFieldset/CategorySelectFieldset"
import { categoryMock } from "../../mocks"
import { VacancyTypeProps } from "./Fieldsets/VacancyTypeFieldset/VacancyType/VacancyType"
import { BlueButton } from "../../components/common/Buttons/BlueButton/BlueButton"
import { DescriptionFieldset } from "./Fieldsets/DescriptionFieldset/DescriptionFieldset"
import { Formik, FormikProps, Form as FormikForm } from "formik"
import { ExperienceFieldset } from "./Fieldsets/ExperienceFieldset/ExperienceFieldset"
import { OtherRequirementsFieldset } from "./Fieldsets/OtherRequirementsFieldset/OtherRequirementsFieldset"
import { ContactsFieldset } from "./Fieldsets/ContactsFieldset/ContactsFieldset"
import { VacancyTypeSelect } from "./Fieldsets/VacancyTypeFieldset/VacancyTypeSelect"
import { QuetionsHardCode } from "../../components/common/QuetionsHardCode/QuetionsHardCode"
const CSS = require("./PublishVacancyNotLogged.styl")
import { RegisterData } from "./Fieldsets/RegisterData/RegisterData"
import { Password } from "./Fieldsets/Password/Password"

interface PublishVacancyPageProps {
  isEnoughMoney: boolean
  onAddressAdd(): any
  onSubmit(values): any
}

interface PublishVacancyFormData {
  vacancyDescription: string
  vacancyTitle: string
  salaryBottom: string
  salaryTop: string
  hasTips: boolean
  hasPercent: boolean
  category: Category
  specializations: string[]
  experience: string
  sheduleFirst: string
  sheduleSecond: string
  englishLevel: string
  cuisineSkills: string[]
  education: string
  hidePhose: boolean
  allowNoResume: boolean
  createTemplate: boolean
  contactsName: string
  contactsPhone: string
  vacancyType: string
  email: string
  name: string
  phone: string
  shopName: string
  format: string
  vacancyPhone: string
  city: string
  logo: string
  adress: string
  site: string
  password: string
  passwordRepeat: string
}

export class PublishVacancyNotLoggedPage extends React.PureComponent<
  PublishVacancyPageProps
> {
  state = {
    vacancyPhone: "+7 (988) 988 88 88",
  }
  render() {
    const initialFormValues: PublishVacancyFormData = {
      vacancyDescription: "",
      vacancyTitle: "",
      salaryBottom: "",
      salaryTop: "",
      hasTips: false,
      hasPercent: false,
      category: null,
      specializations: [],
      experience: "",
      sheduleFirst: "",
      sheduleSecond: "",
      englishLevel: "",
      cuisineSkills: [],
      education: "",
      hidePhose: false,
      allowNoResume: false,
      createTemplate: false,
      contactsName: "",
      contactsPhone: "",
      vacancyType: vacancyTypes[3].title,
      email: "",
      name: "",
      phone: "",
      shopName: "",
      format: "",
      vacancyPhone: "",
      city: "",
      logo: "",
      adress: "",
      site: "",
      password: "",
      passwordRepeat: "",
    }
    return (
      <ColumnsPageContainer>
        <MainContainerBig>
          <PageTitle text={__t("publishNotLogged.title")} />
          <div className={CSS.form}>
            <Formik
              onSubmit={this.props.onSubmit}
              initialValues={initialFormValues}
              render={(formikBag: FormikProps<PublishVacancyFormData>) => {
                const { values, touched } = formikBag

                const passwordTouched = touched.password
                const passwordValid =
                  values.password === values.passwordRepeat || !passwordTouched

                const registerTouched =
                  touched.email &&
                  touched.name &&
                  touched.phone &&
                  touched.shopName &&
                  touched.format &&
                  touched.city

                const regEmailValid = values.email || !touched.email
                const regNameValid = values.name || !touched.name
                const regPhoneValid = values.phone || !touched.phone
                const regShopValid = values.shopName || !touched.shopName
                const regFormatValid = values.format || !touched.format
                const regAdressValid = values.adress || !touched.adress
                const regSiteValid = values.site || !touched.site
                const regCityValid = values.city || !touched.city

                const registerValid =
                  (values.email &&
                    values.name &&
                    values.phone &&
                    values.shopName &&
                    values.format &&
                    values.city) ||
                  !registerTouched

                const categoryTouched =
                  touched.specializations && touched.category
                const categoryValid =
                  (values.specializations.length > 0 && !!values.category) ||
                  !categoryTouched

                const experienceTouched = touched.experience
                const experienceValid =
                  !!values.experience || !experienceTouched

                const descriptionTouched = touched.vacancyTitle
                const descriptionValid =
                  !!values.vacancyTitle || !descriptionTouched

                const contactsTouched = touched.contactsName
                const contactsValid = !!values.contactsName || !contactsTouched

                const allValid =
                  // registerValid &&
                  // categoryValid &&
                  // experienceValid &&
                  // descriptionValid &&
                  // passwordTouched &&
                  // contactsValid &&
                  passwordValid &&
                    passwordTouched

                return (
                  <FormikForm>
                    <RegisterData
                      isValid={!!registerValid}
                      isVisible={true}
                      value={this.state.vacancyPhone}
                      emailValid={!!regEmailValid}
                      nameValid={!!regNameValid}
                      phoneValid={!!regPhoneValid}
                      shopValid={!!regShopValid}
                      formatValid={!!regFormatValid}
                      adressValid={!!regAdressValid}
                      siteValid={!!regSiteValid}
                      cityValid={!!regCityValid}
                    />

                    <CategorySelectFieldset
                      categories={categoryMock}
                      currentCategory={values.category}
                      isValid={categoryValid}
                      isVisible={!!registerTouched}
                    />

                    <ExperienceFieldset
                      isValid={experienceValid}
                      isVisible={!!categoryTouched}
                      experienceLevels={[
                        __t("publishVacancyPage.workExperience1"),
                        __t("publishVacancyPage.workExperience2"),
                        __t("publishVacancyPage.workExperience3"),
                        __t("publishVacancyPage.workExperience4"),
                      ]}
                    />

                    <DescriptionFieldset
                      isValid={descriptionValid}
                      isVisible={!!experienceTouched}
                    />

                    <ContactsFieldset
                      isVisible={!!descriptionTouched}
                      isValid={contactsValid}
                      value={this.state.vacancyPhone}
                    />

                    <Password
                      isVisible={!!contactsTouched}
                      isValid={passwordValid}
                    />

                      {allValid && (
                          <label className={CSS.submButton}>
                              <BlueButton className={CSS.submitButton} isSubmit={true}>
                                  {__t("publishVacancyPage.submitButton")}
                              </BlueButton>
                          </label>
                      )}

                    <OtherRequirementsFieldset
                      englishLevels={[
                        __t("publishVacancyPage.otherReqEnglishLevel1"),
                        __t("publishVacancyPage.otherReqEnglishLevel2"),
                        __t("publishVacancyPage.otherReqEnglishLevel3"),
                        __t("publishVacancyPage.otherReqEnglishLevel4"),
                      ]}
                      cuisineSkills={[
                        __t("publishVacancyPage.otherReqCuisineEurope"),
                        __t("publishVacancyPage.otherReqCuisineRussian"),
                        __t("publishVacancyPage.otherReqCuisineItalian"),
                        __t("publishVacancyPage.otherReqCuisineJapan"),
                        __t("publishVacancyPage.otherReqCuisineChina"),
                        __t("publishVacancyPage.otherReqCuisineCaucasian"),
                        __t("publishVacancyPage.otherReqCuisineFrench"),
                        __t("publishVacancyPage.otherReqCuisineEastern"),
                      ]}
                      education={[
                        __t("publishVacancyPage.otherReqEducationLevel1"),
                        __t("publishVacancyPage.otherReqEducationLevel2"),
                        __t("publishVacancyPage.otherReqEducationLevel3"),
                        __t("publishVacancyPage.otherReqEducationLevel4"),
                      ]}
                      isVisible={!!passwordTouched}
                      isValid={true}
                    />

                    <VacancyTypeSelect
                      isEnoughMoney={false}
                      vacancyTypes={vacancyTypes}
                      isVisible={passwordTouched}
                    />
                  </FormikForm>
                )
              }}
            />
          </div>
        </MainContainerBig>

        <AsideRightContainer>
            <QuetionsHardCode />
        </AsideRightContainer>
      </ColumnsPageContainer>
    )
  }
}

const vacancyTypes: VacancyTypeProps[] = [
  {
    icon: require("./i/iconRocket.svg"),
    title: "Интернет максимум",
    price: "1400 ₽",
    description: `Вакансия будет выделена и закреплена на 7 дней вверху списка вакансий + размещена в соц. сетях
        на аудиторию до 110 000 работников ресторанной индустрии`,
    isEnoughMoney: false,
  },
  {
    icon: require("./i/iconHot.svg"),
    title: "Выделить и закрепить",
    price: "1100 ₽",
    description:
      "Вакансия выделяется и закрепляется вверху каталога всех вакансий и сроком на 7 дней. ",
    isEnoughMoney: false,
  },
  {
    icon: require("./i/iconActive.svg"),
    title: "В активном поиске сутрудника",
    price: "750 ₽",
    description: `Вакансия один раз в день в течении 5 дней будет подниматься вверх каталога. Все это время она
        будет выделена иконкой и надписью “Работодатель активно ищет сотрудника”`,
    isEnoughMoney: true,
  },
  {
    icon: require("./i/iconGrayMan.svg"),
    title: "Обычное размещение",
    price: "0 ₽",
    description: `Простая публикация в общем потоке. Поднять вакансию можно в любой момент, стоимость поднятия -
        150 ₽. В случае нарушения <a href="#">Правил публикации</a> - аккаунт будет заблокирован. Размещая вакансию вы
        подтверждаете, что принимаете правила.`,
    isEnoughMoney: true,
  },
]
