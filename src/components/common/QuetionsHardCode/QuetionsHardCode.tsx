import * as React from "react"
const CSS = require("./QuetionsHardCode.styl")

export const QuetionsHardCode: React.SFC = () => {
    return (
        <div className={CSS.questionList}>
            <div className={CSS.questionBlock}>
                <div className={CSS.question}>
                    Что это такое?
                </div>
                <div className={CSS.answer}>
                    Если у вас еще нет регистрации работодателя на нашем сервисе, здесь вы можете одновременно пройти регистрацию и опубликовать вакансию.
                    <br/>
                    После завершения ваша первая вакансия уже будет опубликована на сайте и у вас будет аккаунт на Restojob.ru со своим личным кабинетом.
                </div>
            </div>
            <div className={CSS.questionBlock}>
                <div className={CSS.question}>
                    Сколько стоит публикация?
                </div>
                <div className={CSS.answer}>
                    Публикация вакансий бесплатная.
                </div>
            </div>
            <div className={CSS.questionBlock}>
                <div className={CSS.question}>
                    А что тогда платное?
                </div>
                <div className={CSS.answer}>
                    Все следующие действия с вакансиями платные. Чтобы поддерживать актуальность вакансии ее необходимо поднимать вверх каталога - это платная услуга (150 ₽). Кроме этого, есть услуги по продвижению вакансий - они тоже платные и вы сможете применить их позже к любой вакансии.
                    <br/><br/>
                    Ознакомьтесь - <a href="">Услуги и цены</a>
                </div>
            </div>
            <div className={CSS.questionBlock}>
                <div className={CSS.question}>
                    А если я буду закрывать вакансию и публиковать как новую?
                </div>
                <div className={CSS.answer}>
                    Так делать нельзя. В случае, если модераторы заметят такое, они сначала вас предупредят. В случае, если повторно заметят - ваш аккаунт будет заблокирован вместе с номерами телефонов и вы больше не сможете пользоваться нашими услугами.
                    <br/><br/>
                    Публикуя вакансию вы подтверждаете, что принимаете <a href="">правила публикации вакансий.</a>
                </div>
            </div>
            <div className={CSS.questionBlock}>
                <div className={CSS.question}>
                    У вас есть к нам вопросы?
                </div>
                <div className={CSS.answer}>
                    <div className={CSS.phone}>8 (800) 555-93-63</div>
                    <a href="">Или закажите обратный звонок</a>
                </div>
            </div>
        </div>
    )
}
