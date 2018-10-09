import * as React from "react"
import {Banner} from "../../types"
import { ColumnsPageContainer } from "../../components/LayoutContainers/PageContainer/PageContainer"
import { MainContainerBig } from "../../components/LayoutContainers/MainContainer/MainContainer"
import {PageTitle} from "../../components/common/PageTitle/PageTitle"
import {Form as FormikForm, Formik, FormikProps} from "formik"
import {VerticalBanner} from "../../components/common/VerticalBanner/VerticalBanner"
import {MobileAppBlock} from "../../components/common/MobileAppBlock/MobileAppBlock"
import {AsideRightContainer} from "../../components/LayoutContainers/AsideRightContainer/AsideRightContainer"
import { Requisites } from "./Fieldset/Requisites/Requisites"
import { Billings } from "./Fieldset/Billings/Billings"
import { Bonuses } from "./Fieldset/Bonuses/Bonuses"
import { Bill } from "../../types"

const CSS = require("./Balance.styl")

export interface BalanceProps {
    banner?: Banner
    bonuses?: string
    bills?: Bill[]
    onSubmit(values): any
}

export interface BalancePageFormData {
    entityName: string
    entityAddress: string
    inn: string
    kpp: string
    director: string
    sum: string
}

export class Balance extends React.PureComponent<BalanceProps> {
    render() {
        const initialFormValues: BalancePageFormData = {
            entityName: "",
            entityAddress: "",
            inn: "",
            kpp: "",
            director: "",
            sum: "",
        }
        return (
            <ColumnsPageContainer>
                <MainContainerBig>
                    <PageTitle text={__t("balance.title")} mBottom />
                    <Formik
                        onSubmit={this.props.onSubmit}
                        initialValues={initialFormValues}
                        render={(FormikBag: FormikProps<BalancePageFormData>) => {
                            const { values } = FormikBag
                            const entityVal = values.entityName
                            return (
                                <FormikForm>
                                    <div className={CSS.requisitesBlock}>
                                        <Requisites entityVal={entityVal} entities={entities} isValid={true} isVisible={true}/>
                                        <Bonuses bonuses={this.props.bonuses}/>
                                    </div>
                                    <Billings bills={this.props.bills}/>
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

const entities = [
    { label: "company 1", value: "company 1" },
    { label: "company 2", value: "company 2" },
    { label: "company 3", value: "company 3" },
    { label: "company 4", value: "company 4" },
    { label: "company 5", value: "company 5" },
]
