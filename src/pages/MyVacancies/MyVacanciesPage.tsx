import * as React from "react"
import { AsideLeftContainer } from "../../components/LayoutContainers/AsideLeftContainer/AsideLeftContainer"
import { MainContainerBigRightSide } from "../../components/LayoutContainers/MainContainer/MainContainer"
import { ColumnsPageContainer } from "../../components/LayoutContainers/PageContainer/PageContainer"
import { SelectFilters } from "../../components/common/SelectFilters/SelectFilters"
import { VerticalBanner } from "../../components/common/VerticalBanner/VerticalBanner"
import { AnyQuestionsBlock } from "../../components/common/AnyQuestionsBlock/AnyQuestionsBlock"
import { PageTitle } from "../../components/common/PageTitle/PageTitle"
import { VacancyList } from "./components/VacancyList/VacancyList"
import { Vacancy } from "../../types"

const CSS = require("./MyVacanciesPage.styl")

export const filter = [
  { value: "actually", title: "Актуальные" },
  { value: "archive", title: "Архив" },
]

export interface MyVacanciesPageProps {
  banner?: {
    img: string;
    href: string;
  }
  vacancies: Vacancy[]
  vacanciesNew: Vacancy[]
  vacanciesArchived: Vacancy[]
}

export class MyVacanciesPage extends React.PureComponent<MyVacanciesPageProps> {
  state = {
    currentFilter: "withNew",
    toggleArchives: "actually",
  }
  render() {
    const renderData = () => {
      switch (this.state.currentFilter) {
        case "withNew":
          return this.props.vacanciesNew
        case "all":
          return this.props.vacancies
        case "archive":
          return this.props.vacanciesArchived
        case "actually":
          return this.props.vacancies
        default:
          const currentCompany = this.props.vacancies.filter((vacancy) => {
            return vacancy.company.orgname === this.state.currentFilter
          })
          return currentCompany
      }
    }
    const handleArchives = (val) => {
        this.setState({ toggleArchives: val, currentFilter: val })
    }
    const getVacanciesNew = this.props.vacancies.filter((vacancy) => {
      return vacancy.notViewed > 0
    })
    const vacancies = getVacanciesNew.map((vacancy) => {
      return {
        value: vacancy.company.orgname,
        title: vacancy.company.orgname,
        responses: vacancy.notViewed,
      }
    })
    const acc = vacancies.map((res) => {
      return res.responses
    })
    const sum = acc.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })
    const withNew = [
      { value: "withNew", title: "С новыми откликами", responses: sum },
    ]
    const all = [{ value: "all", title: "Все вакансии", responses: 0 }]
    const menu = withNew.concat(vacancies).concat(all)

    return (
      <ColumnsPageContainer>
        <AsideLeftContainer>
          <div className={CSS.asideLeftContent}>
            <SelectFilters
              filters={menu}
              onChange={(val) =>
                this.setState({
                  currentFilter: val,
                  toggleArchives: "actually",
                })
              }
              value={this.state.currentFilter}
            />
          </div>
          <div className={CSS.asideBlock}>
            {this.props.banner && (
              <VerticalBanner
                href={this.props.banner.href}
                img={this.props.banner.img}
              />
            )}
          </div>
          <div className={CSS.asideLeftContent}>
            <AnyQuestionsBlock questions={questions} />
          </div>
        </AsideLeftContainer>
        <MainContainerBigRightSide>
          <PageTitle
            text={__t("myVacancies.title")}
            isFilter
            filters={filter}
            value={this.state.toggleArchives}
            onChange={(val) => {
              handleArchives(val)
            }}
          />
          <VacancyList vacancies={renderData()} />
        </MainContainerBigRightSide>
      </ColumnsPageContainer>
    )
  }
}

const questions = [
  {
    title: "ЕСТЬ ВОПРОСЫ?",
    phone: "8 (800) 555-93-63",
    description:
      "Если у вас к нам какие-нибудь вопросы по работе сайта, по платным услугам, по сотрудничеству. Звоните нам и мы ответим на все ваши вопросы.",
    link: "#",
    linkName: "Или закажите обратный звонок",
  },
  {
    title: "ПРАВИЛА ПУБЛИКАЦИИ ВАКАНСИЙ",
    description:
      "Ознакомьтесь с правилами публикации вакансии. Что разрешено и что запрещено. И за какие нарушения ваш аккаунт могут заблокировать.",
    link: "#",
    linkName: "Посмотреть правила",
  },
  {
    title: "ПЛАТНЫЕ ВОЗМОЖНОСТИ",
    description:
      "Ознакомьтесь со всеми возможными вариантами продвижения вакансий и платных услуг.",
    link: "#",
    linkName: "Услуги и цены",
  },
]
