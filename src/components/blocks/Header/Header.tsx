import * as React from "react"
import { Link } from "react-router-dom"
import { UserMenu } from "../UserMenu/UserMenu"
import { avatarMock } from "../../../mocks"
import * as classNames from "classnames"
const logoSrc = require("./i/iconLogo.svg")
const CSS = require("./Header.styl")

export interface HeaderProps {
  city: string
  className?: string
}

export class Header extends React.PureComponent<HeaderProps> {
  render() {
    return (
      <div className={CSS.container}>
        <div className={CSS.fixedWrapper}>
          <header className={classNames(CSS.header, this.props.className)}>
            <Link to={"/"} className={CSS.logoLink}>
              <img src={logoSrc} alt="RESTOJOB.RU" className={CSS.logo} />
              <span className={CSS.city}>{this.props.city}</span>
            </Link>

            <div className={CSS.content}>
              <Link to={__t("headerLinks.vacancies.link")} className={CSS.link}>
                {__t("headerLinks.vacancies.title")}
              </Link>
              <Link to={__t("headerLinks.resume.link")} className={CSS.link}>
                {__t("headerLinks.resume.title")}
              </Link>
              <Link to={__t("headerLinks.shop.link")} className={CSS.link}>
                {__t("headerLinks.shop.title")}
              </Link>
              <UserMenu
                avatar={avatarMock}
                messagesCount={5}
                balance={12000}
                // isEmployer={true}
              />
            </div>
            <div className={CSS.tmpNav}>
                <Link to={"/"}>Главная</Link>
                <Link to={"/vacancy"}>Вакансии</Link>
                <Link to={"/company"}>Компании</Link>
                <Link to={"/catalog"}>Каталог</Link>
                <Link to={"/publishVacancy"}>Опубликовать</Link>
                <Link to={"/employee-vacancies"}>Избранные</Link>
                <Link to={"/employee-feedback"}>Отклики</Link>
                <Link to={"/employee-offers"}>Предложения</Link>
                <Link to={"/workplace"}>Место работы</Link>
                <Link to={"/workplace-edit"}>Место работы (ред)</Link>
                <Link to={"/publish-vacancy-not-logged"}>Опубликовать (незарег.)</Link>
                <Link to={"/my-vacancies"}>Мои Вакансии</Link>
                <Link to={"/desired-salary"}>Желаемая зарплата</Link>
                <Link to={"/education"}>Образование</Link>
                <Link to={"/personal"}>Личная информация</Link>
                <Link to={"/edit-company"}>Редактирование заведения</Link>
                <Link to={"/history"}>История</Link>
                <Link to={"/balance"}>Пополнение баланса</Link>
            </div>
          </header>
        </div>
      </div>
    )
  }
}
