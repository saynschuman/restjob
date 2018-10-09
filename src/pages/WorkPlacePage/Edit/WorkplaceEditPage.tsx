import * as React from "react"
import { ColumnsPageContainer } from "../../../components/LayoutContainers/PageContainer/PageContainer"
import { PageTitle } from "../../../components/common/PageTitle/PageTitle"
import { AsideRightContainer } from "../../../components/LayoutContainers/AsideRightContainer/AsideRightContainer"
import { VerticalBanner } from "../../../components/common/VerticalBanner/VerticalBanner"
import { MainContainerBig } from "../../../components/LayoutContainers/MainContainer/MainContainer"
import { MobileAppBlock } from "../../../components/common/MobileAppBlock/MobileAppBlock"
const CSS = require("./WorkPlaceEditPage.styl")
import { Address, Banner, Place } from "../../../types"
import {
  Category,
  CategorySelectFieldset,
} from "./Fieldsets/CategorySelectFieldset/CategorySelectFieldset"
import { categoryMock } from "../../../mocks"
import { BlueButton } from "../../../components/common/Buttons/BlueButton/BlueButton"
import { Formik, FormikProps, Form as FormikForm } from "formik"
import { PlaceNameFieldset } from "./Fieldsets/PlaceNameFieldset/PlaceNameFieldset"
import { PeriodFieldset } from "./Fieldsets/PeriodFieldset/PeriodFieldset"

import { PhotoFieldset } from "./Fieldsets/PhotoFieldset/PhotoFieldset"

interface EditWorkPlacePageProps {
  banner?: Banner
  places: Place[]
  addresses: Address[]
  isEnoughMoney: boolean
  onAddressAdd(): any
  onSubmit(values): any
}

interface EditWorkPlaceFormData {
  category: Category
  specializations: string[]
  cityPlace: string
  placeName: string
  periodDescription: string
  periodMonthStart: string
  periodMonthEnd: string
  periodYearStart: string
  periodYearEnd: string
  stillWork: boolean
  photos: string
}

export class WorkplaceEditPage extends React.PureComponent<
  EditWorkPlacePageProps
> {
  render() {
    const initialFormValues: EditWorkPlaceFormData = {
      category: null,
      specializations: [],
      cityPlace: "",
      placeName: "",
      periodDescription: "",
      periodMonthStart: "",
      periodMonthEnd: "",
      periodYearStart: "",
      periodYearEnd: "",
      stillWork: false,
      photos: "",
    }
    return (
      <ColumnsPageContainer>
        <MainContainerBig>
          <PageTitle text={__t("workPlace.editPageTitle")} />
          <div className={CSS.form}>
            <Formik
              onSubmit={this.props.onSubmit}
              initialValues={initialFormValues}
              render={(FormikBag: FormikProps<EditWorkPlaceFormData>) => {
                const { values, touched } = FormikBag

                const cityPlaceTouched = touched.cityPlace && touched.placeName
                const cityPlaceValid =
                  (!!values.cityPlace && !!values.placeName) ||
                  !cityPlaceTouched

                const periodTouched =
                  touched.periodMonthStart && touched.periodYearStart

                const periodValid =
                  (!!values.periodMonthStart &&
                    !!values.periodYearStart &&
                    ((!!values.periodMonthEnd && !!values.periodYearEnd) ||
                      !!values.stillWork) &&
                    values.periodDescription.length > 0) ||
                  !periodTouched

                const categoryTouched =
                  touched.specializations && touched.category
                const categoryValid =
                  (values.specializations.length > 0 && !!values.category) ||
                  !categoryTouched

                const allValid =
                  cityPlaceValid &&
                  categoryValid &&
                  categoryTouched &&
                  periodValid &&
                  periodTouched

                return (
                  <FormikForm>
                    <PlaceNameFieldset
                      isVisible={true}
                      isValid={cityPlaceValid}
                    />
                    <CategorySelectFieldset
                      categories={categoryMock}
                      currentCategory={values.category}
                      isValid={categoryValid}
                      isVisible={!!cityPlaceTouched}
                    />
                    <PeriodFieldset
                      isValid={periodValid}
                      isVisible={!!categoryTouched}
                    />
                    <PhotoFieldset isValid={true} isVisible={!!periodTouched} />
                    {allValid && (
                      <BlueButton className={CSS.submitButton} isSubmit={true}>
                        {__t("workPlace.save")}
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
