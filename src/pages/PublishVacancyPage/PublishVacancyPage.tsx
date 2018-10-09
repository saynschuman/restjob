import * as React from "react"
import {VerticalBanner} from "../../components/common/VerticalBanner/VerticalBanner"
import {MobileAppBlock} from "../../components/common/MobileAppBlock/MobileAppBlock"
import {AsideRightContainer} from "../../components/LayoutContainers/AsideRightContainer/AsideRightContainer"
import {MainContainerBig} from "../../components/LayoutContainers/MainContainer/MainContainer"
import {ColumnsPageContainer} from "../../components/LayoutContainers/PageContainer/PageContainer"
import {Address, Banner, Place} from "../../types"
import {PageTitle} from "../../components/common/PageTitle/PageTitle"
import {
  Category,
  CategorySelectFieldset,
} from "./Fieldsets/CategorySelectFieldset/CategorySelectFieldset"
import {categoryMock} from "../../mocks"
import {VacancyTypeProps} from "./Fieldsets/VacancyTypeFieldset/VacancyType/VacancyType"
import {BlueButton} from "../../components/common/Buttons/BlueButton/BlueButton"
import {DescriptionFieldset} from "./Fieldsets/DescriptionFieldset/DescriptionFieldset"
import {Formik, FormikProps, Form as FormikForm} from "formik"
import {PlaceFieldset} from "./Fieldsets/PlaceFieldset/PlaceFieldset"
import {AddressesFieldset} from "./Fieldsets/AddressesFieldset/AddressesFieldset"
import {ExperienceFieldset} from "./Fieldsets/ExperienceFieldset/ExperienceFieldset"
import {OtherRequirementsFieldset} from "./Fieldsets/OtherRequirementsFieldset/OtherRequirementsFieldset"
import {ContactsFieldset} from "./Fieldsets/ContactsFieldset/ContactsFieldset"
import {VacancyTypeSelect} from "./Fieldsets/VacancyTypeFieldset/VacancyTypeSelect"
const CSS = require("./PublishVacancyPage.styl")

interface PublishVacancyPageProps {
  banner?: Banner
  places: Place[]
  addresses: Address[]
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
  place: Place
  addresses: Address[]
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
}

export class PublishVacancyPage extends React.PureComponent<
  PublishVacancyPageProps
> {
  render() {
    const initialFormValues: PublishVacancyFormData = {
      vacancyDescription: "",
      vacancyTitle: "",
      salaryBottom: "",
      salaryTop: "",
      hasTips: false,
      hasPercent: false,
      place: null,
      addresses: [],
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
    }
    return (
      <ColumnsPageContainer>
        <MainContainerBig>
          <PageTitle text={__t("publishVacancyPage.title")} />
          <div className={CSS.form}>
            <Formik
              onSubmit={this.props.onSubmit}
              initialValues={initialFormValues}
              render={(formikBag: FormikProps<PublishVacancyFormData>) => {
                const {values, touched} = formikBag

                const placesTouched = touched.place
                const placesValid = !!values.place || !placesTouched

                const addressesTouched = touched.addresses
                const addressesValid =
                  values.addresses.length > 0 || !addressesTouched

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

                const contactsTouched =
                  touched.vacancyTitle && touched.contactsPhone
                const contactsValid =
                  (!!values.contactsName && !!values.contactsPhone) ||
                  !contactsTouched

                const allValid =
                  placesValid &&
                  placesTouched &&
                  addressesValid &&
                  addressesTouched &&
                  categoryValid &&
                  categoryTouched &&
                  experienceValid &&
                  experienceTouched &&
                  descriptionValid &&
                  descriptionTouched &&
                  contactsValid &&
                  contactsTouched

                return (
                  <FormikForm>
                    <PlaceFieldset
                      places={this.props.places}
                      isValid={placesValid}
                      isVisible={true}
                    />

                    <AddressesFieldset
                      onAddressAdd={this.props.onAddressAdd}
                      addresses={this.props.addresses}
                      isValid={addressesValid}
                      isVisible={!!placesTouched}
                    />

                    <CategorySelectFieldset
                      categories={categoryMock}
                      currentCategory={values.category}
                      isValid={categoryValid}
                      isVisible={!!addressesTouched}
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
                      isVisible={!!descriptionTouched}
                      isValid={true}
                    />

                    <ContactsFieldset
                      isVisible={!!descriptionTouched}
                      isValid={contactsValid}
                    />

                    <VacancyTypeSelect
                      isEnoughMoney={false}
                      vacancyTypes={vacancyTypes}
                      isVisible={!!contactsTouched}
                    />

                    {allValid && (
                      <BlueButton className={CSS.submitButton} isSubmit={true}>
                        {__t("publishVacancyPage.submitButton")}
                      </BlueButton>
                    )}
                  </FormikForm>
                )
              }}
            />
          </div>
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
