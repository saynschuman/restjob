import * as React from "react"
import { Banner } from "../../types"
import { ColumnsPageContainer } from "../../components/LayoutContainers/PageContainer/PageContainer"
import { PageTitle } from "../../components/common/PageTitle/PageTitle"
import { AsideRightContainer } from "../../components/LayoutContainers/AsideRightContainer/AsideRightContainer"
import { VerticalBanner } from "../../components/common/VerticalBanner/VerticalBanner"
import { MainContainerBig } from "../../components/LayoutContainers/MainContainer/MainContainer"
import { MobileAppBlock } from "../../components/common/MobileAppBlock/MobileAppBlock"
import { BlueButton } from "../../components/common/Buttons/BlueButton/BlueButton"
import { Formik, FormikProps, Form as FormikForm } from "formik"
import { StatusTypeProps } from "./Fieldsets/StatusSelectFieldset/StatusSelect/StatusSelect"
import { StatusTypeSelect } from "./Fieldsets/StatusSelectFieldset/StatusTypeSelect"
import { categoryMock } from "../../mocks"
import { KitchenFieldset } from "./Fieldsets/Kitchen/Kitchen"
import { DesiredSalaryInput } from "./Fieldsets/DesiredSalaryInput/DesiredSalaryInput"
import {
  Category,
  CategorySelectFieldset,
} from "./Fieldsets/CategorySelectFieldset/CategorySelectFieldset"
import { OtherKitchens } from "./Fieldsets/OtherKitchens/OtherKitchens"

const CSS = require("./DesiredSalaryPage.styl")

export interface DesiredSalaryPageProps {
  banner?: Banner
  onSubmit(values): any
}

interface DesiredSalaryFormData {
  status: string
  category: Category
  specializations: string[]
  experience: string
  experienceList: string[]
  otherKitchens: string[]
  salary: number
}

export class DesiredSalaryPage extends React.PureComponent<
  DesiredSalaryPageProps
> {
  render() {
    const initialFormValues: DesiredSalaryFormData = {
      status: "",
      category: null,
      specializations: [],
      experience: "",
      experienceList: [],
      otherKitchens: [],
      salary: null,
    }

    return (
      <ColumnsPageContainer>
        <MainContainerBig>
          <PageTitle text={__t("desiredSalary.title")} mBottom />
          <Formik
            onSubmit={this.props.onSubmit}
            initialValues={initialFormValues}
            render={(FormikBag: FormikProps<DesiredSalaryFormData>) => {
              const { values, touched } = FormikBag

              const statusValid = values.status

              const categoryTouched =
                !!touched.specializations && !!touched.category
              const categoryValid =
                (values.specializations.length > 0 ) ||
                !categoryTouched

              const kitchensTouched = touched.experience
              const kitchensValid = values.experience.length > 0 || !kitchensTouched

              const otherKitchensTouched = touched.otherKitchens
              const otherKitchensValid =
                values.otherKitchens.length > 0 || !otherKitchensTouched

              const SalarTouched = touched.salary
              const SalarValid = !!values.salary || !SalarTouched

              const allVaid =
                statusValid &&
                categoryValid &&
                kitchensValid &&
                otherKitchensValid &&
                SalarValid

              return (
                <FormikForm>
                  <StatusTypeSelect
                    statusTypes={statusTypes}
                    isVisible={true}
                    isValid={true}
                  />
                  <CategorySelectFieldset
                    categories={categoryMock}
                    currentCategory={values.category}
                    isValid={categoryValid}
                    isVisible={!!statusValid}
                  />
                  <KitchenFieldset
                    isValid={kitchensValid}
                    isVisible={categoryTouched}
                    value={values.experience}
                    experienceLevels={[
                      __t("desiredSalary.kitchen.euro"),
                      __t("desiredSalary.kitchen.ru/ukr"),
                      __t("desiredSalary.kitchen.ital"),
                      __t("desiredSalary.kitchen.japan"),
                      __t("desiredSalary.kitchen.caucasian"),
                      __t("desiredSalary.kitchen.french"),
                      __t("desiredSalary.kitchen.midleAsian"),
                      __t("desiredSalary.kitchen.american"),
                      __t("desiredSalary.kitchen.vietnam"),
                      __t("desiredSalary.kitchen.indi"),
                      __t("desiredSalary.kitchen.spanish"),
                      __t("desiredSalary.kitchen.other"),
                    ]}
                  />
                  <OtherKitchens
                    isValid={!!otherKitchensValid}
                    isVisible={kitchensTouched}
                    value={values.otherKitchens}
                    otherKitchens={[
                      __t("desiredSalary.kitchen.euro"),
                      __t("desiredSalary.kitchen.ru/ukr"),
                      __t("desiredSalary.kitchen.ital"),
                      __t("desiredSalary.kitchen.japan"),
                      __t("desiredSalary.kitchen.caucasian"),
                      __t("desiredSalary.kitchen.french"),
                      __t("desiredSalary.kitchen.midleAsian"),
                      __t("desiredSalary.kitchen.american"),
                      __t("desiredSalary.kitchen.vietnam"),
                      __t("desiredSalary.kitchen.indi"),
                      __t("desiredSalary.kitchen.spanish"),
                      __t("desiredSalary.kitchen.other"),
                    ]}
                  />
                  <DesiredSalaryInput
                    initialValue={values.salary}
                    isValid={!!SalarValid}
                    isVisible={!!otherKitchensTouched}
                  />
                  {allVaid && (
                    <BlueButton className={CSS.submitButton} isSubmit={true}>
                      {__t("desiredSalary.save")}
                    </BlueButton>
                  )}
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

const statusTypes: StatusTypeProps[] = [
  {
    icon: require("./i/active.svg"),
    title: `В АКТИВНОМ (СРОЧНОМ) ПОИСКЕ РАБОТЫ`,
    description: `Ваше резюме в специальном разделе “В активном поиске”, который работодатели просматривают в первую очередь.  Охват со стороны работодателей - максимальный. <a href="#">Подробнее о статусе “В активном поиске</a>`,
  },
  {
    icon: require("./i/inSearch.svg"),
    title: "В ПОИСКАХ РАБОТЫ",
    description: `Обычное размещение. Резюме находится в каталоге резюме среди тысяч кандиатов, которые ищут работы. Работодатель может вас найти и предложить вам вакансию.`,
  },
  {
    icon: require("./i/notInSearch.svg"),
    title: "СЕЙЧАС НЕ ИЩУ РАБОТУ",
    description: `Работодатели не смогут найти ваше резюме, вы не будете получать звонки и предложения от работодателей, но вы сможете отправлять отклики на вакансии.`,
  },
]
