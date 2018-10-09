import {
    Address,
    Banner,
    City,
    Company,
    Employee,
    Place, RelatedResumes,
    Specialization,
    Vacancy,
    WorkPlace,
    Action,
    Bill,
} from "./types"
import { Category } from "./pages/PublishVacancyPage/Fieldsets/CategorySelectFieldset/CategorySelectFieldset"

const logoImage = require("./assets/images/mocks/company.jpg")
const slide1 = require("./assets/images/mocks/slide1.jpg")
const slide2 = require("./assets/images/mocks/slide2.jpg")
const slide3 = require("./assets/images/mocks/slide3.jpg")
const slide4 = require("./assets/images/mocks/slide4.jpg")
const slide5 = require("./assets/images/mocks/slide5.jpg")
export const avatarMock = require("./assets/images/mocks/avatar.jpg")

export const categoryBar = require("./assets/images/categoryBar.png")
export const categoryKitchen = require("./assets/images/categoryKitchen.png")
export const categoryManagement = require("./assets/images/categoryManagement.png")
export const categoryOther = require("./assets/images/categoryOther.png")
export const categoryWithoutTraining = require("./assets/images/categoryWithoutTraining.png")

export const bonusesBanner = require("./assets/images/mocks/bonuses.jpg")

export const cityMock: City = {
  id: 1,
  name: "Москва",
  dnsAlias: "msk",
}

export const addressMock: Address = {
  color: "0078C9",
  station: "Московская",
  coord: "55.730786,37.631424",
  address: "ул. Пушкина, дом Колотушкина",
}

export const addressesMock: Address[] = [
  {
    color: "0078C9",
    station: "Московская",
    coord: "55.730786,37.631424",
    address: "ул. Пушкина, дом Колотушкина 1",
  },
  {
    color: "0078C9",
    station: "Московская",
    coord: "55.730786,37.631424",
    address: "ул. Пушкина, дом Колотушкина 2",
  },
  {
    color: "0078C9",
    station: "Московская",
    coord: "55.730786,37.631424",
    address: "ул. Пушкина, дом Колотушкина 3",
  },
]

export const specializationMock: Specialization = {
  id: 1,
  title: "Повар",
}

export const relatedResume: RelatedResumes[] = [
    {
        avatar: avatarMock,
        name: "Алексей",
        company: "Чебуroom Family",
        position: "Повар горячего цеха",
    },
    {
        avatar: avatarMock,
        name: "Виктор",
        company: "Чебуroom Family",
        position: "Повар горячего цеха",
    },
    {
        avatar: avatarMock,
        name: "Владимир",
        company: "Чебуroom Family",
        position: "Повар горячего цеха",
    },
]

export const vacancyMock: Vacancy = {
  id: 1,
  isArchived: false,
  archDate: "",
  RelatedResume: relatedResume,
  expiryDate: "",
  quantityReviews: 0,
  quantityViews: 0,
  lastUpTurnDate: "",
  isUpTurned: false,
  quantityShows: 0,
  notViewed: 0,
  views: null,
  upTurnPlan: "",
  title: "Повар",
  textDescription: `
                    Обязанности:\n\n  Встреча и обслуживание столов и банкетов‚знание меню и стандартов сервиса.\n\n
                    Требования:\n\nВозможно без опыта работы\n\nГражданство РФ.\n\nГрамотная речь‚ наличие медицинской
                    книжки и полного пакета документов.\n\nУсловия:\n\n  Ресторан в шаговой доступности от метро чистые
                    пруды‚ бесплатное питание‚ скидка на меню 50 %‚ оформление по т.к.\n\n \n\n \n\n
                `,
  isHot: false,
  isRecommended: false,
  isActive: false,
  isActually: false,
  isClosed: false,
  isStandard: true,
  salaryText: "45 000 - 50 000 ₽",
  hasTea: true,
  hasPercent: false,
  addressesList: [addressMock, addressMock, addressMock],
  specialization: specializationMock,
  company: {
    id: 1,
    brend: "Пиворама",
    brendOfMonth: null,
    logo: logoImage,
    orgname: "Пиворама",
    companyDescription: "lorem ipsum",
    openDate: "wedwe",
    city: cityMock,
    textDescription: "",
    vacancyPublished: [],
    photoSet: [],
  },
  publishedDate: "2018-06-11T13:03:35",
  params: [["Опыт", "1 - 3 года"], ["График", "2/2"]],
  callbackPhone: "",
  number: "9134",
  link: "#",
  isNew: false,
  isInvitation: false,
  isRejection: false,
  isNoAnswer: false,
  rejectionDate: "",
  rejectionText: "",
  feedBackDate: "",
  feedBackText: "",
  notAnsweredText: "",
  invitationDate: "",
  invitationText: "",
  recruiterName: "",
  recruiterContacts: "",
  isAccepted: false,
  offerDate: "",
  offerText: "",
  acceptanceDate: "",
  acceptanceText: "",
  isRejectedOffer: false,
  rejectedOfferDate: "",
  rejectedOfferText: "",
  offerIsNoAnswer: false,
  offerIsNew: false,
}

export const vacancyFeedbackInvitation: Vacancy = {
  ...vacancyMock,
  id: 2,
  isInvitation: true,
  invitationDate: "29 февраля 2017",
  invitationText:
    "К тому же американский лидер, согласно документу, может принять меры против предприятий, которые планируют инвестировать в строительство экспортных трубопроводов более пяти миллионов долларов в год или миллион единовременно.",
  isNew: true,
  feedBackDate: "25 февраля 2017",
  feedBackText:
    "К тому же американский лидер, согласно документу, может принять меры против предприятий, которые планируют инвестировать в строительство экспортных трубопроводов более пяти миллионов долларов в год или миллион единовременно.",
  recruiterName: "Мария Александровна",
  recruiterContacts: "+7 923 329 22 11",
}

export const vacancyFeedbackRejection: Vacancy = {
  ...vacancyMock,
  id: 3,
  isRejection: true,
  isNew: true,
  rejectionDate: "29 февраля 2017",
  rejectionText:
    "К тому же американский лидер, согласно документу, может принять меры против предприятий, которые планируют инвестировать в строительство экспортных трубопроводов более пяти миллионов долларов в год или миллион единовременно.",
  feedBackDate: "25 февраля 2017",
  feedBackText:
    "К тому же американский лидер, согласно документу, может принять меры против предприятий, которые планируют инвестировать в строительство экспортных трубопроводов более пяти миллионов долларов в год или миллион единовременно.",
}

export const vacancyFeedbackNoAnswer: Vacancy = {
  ...vacancyMock,
  isNoAnswer: true,
  id: 4,
  feedBackDate: "25 февраля 2017",
  feedBackText:
    "К тому же американский лидер, согласно документу, может принять меры против предприятий, которые планируют инвестировать в строительство экспортных трубопроводов более пяти миллионов долларов в год или миллион единовременно.",
  notAnsweredText:
    "Работодатель или еще не увидел ваш отклик, либо увидел, но пока никак не отреагировал.",
}

export const vacancyOfferAccepted: Vacancy = {
  ...vacancyMock,
  isAccepted: true,
  id: 5,
  offerDate: "28 мая 2017",
  offerText:
    "К тому же американский лидер, согласно документу, может принять меры против предприятий, которые планируют инвестировать в строительство экспортных трубопроводов более пяти миллионов долларов в год или миллион единовременно.",
  isNew: true,
  acceptanceDate: "29 мая 2017",
  acceptanceText:
    "Принял приглашение! К тому же американский лидер, согласно документу, может принять меры против предприятий, которые планируют инвестировать в строительство экспортных трубопроводов более пяти миллионов долларов в год или миллион единовременно.",
  recruiterName: "Мария Александровна",
  recruiterContacts: "+7 923 329 22 11",
}

export const vacancyOfferAccepted1: Vacancy = {
  ...vacancyMock,
  isAccepted: true,
  id: 6,
  offerDate: "28 мая 2017",
  offerText:
    "К тому же американский лидер, согласно документу, может принять меры против предприятий, которые планируют инвестировать в строительство экспортных трубопроводов более пяти миллионов долларов в год или миллион единовременно.",
  isNew: true,
  acceptanceDate: "29 мая 2017",
  recruiterName: "Мария Александровна",
  recruiterContacts: "+7 923 329 22 11",
}

export const vacancyOfferRejected: Vacancy = {
  ...vacancyMock,
  id: 7,
  isRejectedOffer: true,
  isNew: true,
  offerDate: "29 февраля 2017",
  offerText:
    "К тому же американский лидер, согласно документу, может принять меры против предприятий, которые планируют инвестировать в строительство экспортных трубопроводов более пяти миллионов долларов в год или миллион единовременно.",
  rejectedOfferDate: "30 февраля 2017",
  rejectedOfferText:
    "Не принял приглашение! К тому же американский лидер, согласно документу, может принять меры против предприятий, которые планируют инвестировать в строительство экспортных трубопроводов более пяти миллионов долларов в год или миллион единовременно.",
  recruiterName: "Мария Александровна",
  recruiterContacts: "+7 923 329 22 11",
}

export const vacancyOfferRejected1: Vacancy = {
  ...vacancyMock,
  id: 8,
  isRejectedOffer: true,
  isNew: true,
  offerDate: "30 марта 2015",
  offerText:
    "К тому же американский лидер, согласно документу, может принять меры против предприятий, которые планируют инвестировать в строительство экспортных трубопроводов более пяти миллионов долларов в год или миллион единовременно.",
  rejectedOfferDate: "30 августа 2016",
  recruiterName: "Мария Александровна",
  recruiterContacts: "+7 923 329 22 11",
}

export const vacancyOfferNoAnswer: Vacancy = {
  ...vacancyMock,
  id: 9,
  offerIsNoAnswer: true,
  offerDate: "29 февраля 2017",
  offerText:
    "К тому же американский лидер, согласно документу, может принять меры против предприятий, которые планируют инвестировать в строительство экспортных трубопроводов более пяти миллионов долларов в год или миллион единовременно.",
  rejectedOfferDate: "30 февраля 2017",
  rejectedOfferText:
    "К тому же американский лидер, согласно документу, может принять меры против предприятий, которые планируют инвестировать в строительство экспортных трубопроводов более пяти миллионов долларов в год или миллион единовременно.",
  recruiterName: "Мария Александровна",
  recruiterContacts: "+7 923 329 22 11",
}

export const vacancyNewOffer: Vacancy = {
  ...vacancyMock,
  id: 10,
  offerIsNew: true,
  offerDate: "29 февраля 2017",
  offerText:
    "К тому же американский лидер, согласно документу, может принять меры против предприятий, которые планируют инвестировать в строительство экспортных трубопроводов более пяти миллионов долларов в год или миллион единовременно.",
  recruiterName: "Мария Александровна",
  recruiterContacts: "+7 923 329 22 11",
}

export const vacancyMockActually: Vacancy = {
  ...vacancyMock,
  id: 11,
  isActually: true,
}

export const vacancyMockClosed: Vacancy = {
  ...vacancyMock,
  id: 12,
  isClosed: true,
}

export const vacancyMockActive: Vacancy = {
  ...vacancyMock,
  id: 13,
  isActive: true,
}

export const vacancyMockRecommended: Vacancy = {
  ...vacancyMock,
  id: 14,
  isRecommended: true,
}

export const vacancyMockHot: Vacancy = {
  ...vacancyMock,
  id: 15,
  isHot: true,
}

export const vacancyMockLong: Vacancy = {
  ...vacancyMock,
  id: 16,
  title: "Повар горячего цеха очень хорошая зарплата очень большие перспективы",
}

export const companyMock: Company = {
  id: 1,
  brend: "Пиворама",
  brendOfMonth: null,
  logo: logoImage,
  orgname: "Пиворама",
  openDate: "2016 год",
  companyDescription:
    "Британские пекарни» твердо решили захватить мир! Ну или, как минимум, " +
    "Санкт-Петербург - точно)\n" +
    "\n" +
    "Мы - успешная компания с более чем 20-летней историей. " +
    "Несмотря на это, продолжаем развиваться и не стоим на месте. " +
    "В нашей команде работают профессионалы, неравнодушные к своему делу, " +
    "готовые делиться накопленными знаниями и опытом, создавая " +
    "новые традиции. Не хватает только ТЕБЯ!",
  city: cityMock,
  textDescription: "",
  photoSet: [slide1, slide2, slide3, slide4, slide5],
  vacancyPublished: [
    vacancyMock,
    vacancyMockLong,
    vacancyMockHot,
    vacancyMockRecommended,
    vacancyMock,
  ],
}

export const employeeMock: Employee = {
  name: "Рустам",
  vacancy: "Повар горячего цеха",
  salary: "от 30 000 ₽",
  photo: avatarMock,
}

export const bannerMock: Banner = {
  href: "#",
  img: "http://restojob.ru/media/banner/files1/iphonebaaner.jpg",
}

export const placeMock: Place = {
  title: "Британские кондитерские",
  city: "Санкт-Петербург",
}

export const placesMock: Place[] = [
  { title: "Британские кондитерские 1", city: "Санкт-Петербург" },
  { title: "Британские кондитерские 2", city: "Санкт-Петербург" },
  { title: "Британские кондитерские 3", city: "Санкт-Петербург" },
  { title: "Британские кондитерские 4", city: "Санкт-Петербург" },
]

export const categoryMock: Category[] = [
  {
    title: "Зал и бар",
    image: categoryBar,
    specializations: [
      "Бренд-шеф",
      "Шеф-повар",
      "Су-шеф",
      "Зав. производством",
      "Повар-универсал",
      "Повар горячего цеха",
      "Повар холодного цеха",
      "Пиццмейкер",
      "Сушист",
      "Кондитер",
      "Пекарь",
      "Заготовщик",
    ],
  },
  {
    title: "Кухня",
    image: categoryKitchen,
    specializations: ["Бренд-шеф", "Шеф-повар", "Су-шеф", "Зав. производством"],
  },
  {
    title: "Управление",
    image: categoryManagement,
    specializations: [
      "Бренд-шеф",
      "Шеф-повар",
      "Су-шеф",
      "Зав. производством 1",
      "Зав. производством 2",
      "Зав. производством 3",
    ],
  },
  {
    title: "Другие специалисты",
    image: categoryOther,
    specializations: ["Бренд-шеф", "Шеф-повар"],
  },
  {
    title: "Без спец подготовки",
    image: categoryWithoutTraining,
    specializations: ["Бренд-шеф", "Шеф-повар 1", "Шеф-повар 2", "Шеф-повар 3"],
  },
]

export const workPlaceMock: WorkPlace = {
  id: 1,
  orgname: "Моллис Паб",
  position: "Бармен",
  period: "с января 2018 по настоящее время",
  description:
    "Круглосуточный бар, с акцентом на натуральные ингредиенты, все сиропы и топпинги делал самостоятельно. Бар, с акцентом на натуральные ингредиенты, все сиропы и топпинги делал самостоятельно.",
}

export const workPlaceMockLong: WorkPlace = {
  id: 2,
  orgname: "Моллис Паб",
  position: "Бармен",
  period: "с января 2018 по настоящее время",
  description:
    "Круглосуточный бар, с акцентом на натуральные ингредиенты, все сиропы и топпинги делал самостоятельно. Бар, с акцентом на натуральные ингредиенты, все сиропы и топпинги делал самостоятельно. Круглосуточный бар, с акцентом на натуральные ингредиенты, все сиропы и топпинги делал самостоятельно. Бар, с акцентом на натуральные ингредиенты, все сиропы и топпинги делал самостоятельно Бар, с акцентом на натуральные ингредиенты, все сиропы и топпинги делал самостоятельно. Круглосуточный бар, с акцентом на натуральные ингредиенты, все сиропы и топпинги делал самостоятельно. Бар, с акцентом на натуральные ингредиенты, все сиропы и топпинги делал самостоятельно",
  photoSet: [slide1, slide2, slide3],
}

export const workPlaceMockLongGallery: WorkPlace = {
  id: 3,
  orgname: "Моллис Паб",
  position: "Бармен",
  period: "с января 2018 по настоящее время",
  description:
    "Круглосуточный бар, с акцентом на натуральные ингредиенты, все сиропы и топпинги делал самостоятельно. Бар, с акцентом на натуральные ингредиенты, все сиропы и топпинги делал самостоятельно.",
  photoSet: [slide1, slide2, slide3, slide4, slide5],
}

export const myVacancyItem: Vacancy = {
  ...vacancyMock,
  views: 10,
  recruiterName: "Мария Александровна",
  recruiterContacts: "+7 923 329 22 11",
  quantityViews: 245,
  quantityReviews: 275,
  quantityShows: 1000,
  notViewed: 6,
  lastUpTurnDate: "25 мая в 18:45 - 3 дня назад",
    company: {
        id: 2,
        brend: "Евразия",
        brendOfMonth: null,
        logo: logoImage,
        orgname: "Евразия",
        companyDescription: "lorem ipsum",
        openDate: "wedwe",
        city: cityMock,
        textDescription: "",
        vacancyPublished: [],
        photoSet: [],
    },
}

export const myVacancyItem1: Vacancy = {
  ...vacancyMock,
  views: 12,
  recruiterName: "Мария Александровна",
  recruiterContacts: "+7 923 329 22 11",
  quantityReviews: 235,
  quantityViews: 10,
  quantityShows: 390,
  notViewed: 5,
  isUpTurned: true,
  upTurnPlan: "InActiveSearch",
  expiryDate: "25 мая включительно",
}

export const myVacancyItem2: Vacancy = {
    ...vacancyMock,
    views: 10,
    recruiterName: "Мария Александровна",
    recruiterContacts: "+7 923 329 22 11",
    quantityViews: 245,
    quantityReviews: 275,
    quantityShows: 1000,
    isUpTurned: true,
    upTurnPlan: "Fixed",
    expiryDate: "3 сентября включительно",
}

export const myVacancyItem3: Vacancy = {
    ...vacancyMock,
    views: 10,
    recruiterName: "Мария Александровна",
    recruiterContacts: "+7 923 329 22 11",
    quantityViews: 245,
    quantityReviews: 275,
    quantityShows: 1000,
    archDate: "15:00 25 августа 2018 г.",
}

export const myVacancyItemArchived1: Vacancy = {
    ...vacancyMock,
    views: 25,
    recruiterName: "Мария Сергеевна",
    recruiterContacts: "+7 923 329 22 11",
    quantityViews: 123,
    quantityReviews: 678,
    quantityShows: 432,
    isArchived: true,
    archDate: "15:00 25 октября 2018 г.",
}

export const myVacancyItemArchived2: Vacancy = {
    ...vacancyMock,
    views: 768,
    recruiterName: "Наталья Моисеевна",
    recruiterContacts: "+7 923 329 22 11",
    quantityViews: 245,
    quantityReviews: 275,
    quantityShows: 1000,
    isArchived: true,
    archDate: "15:00 25 августа 2018 г.",
}

export const action1: Action = {
    date: "Сегодня",
    act: "Поднятие вакансии",
    vacancy: "Повар-универсал",
    vacancyLink: "/vacancy",
    company: "Моллис Паб",
    sum: "- 150 ₽",
}

export const action2: Action = {
    ...action1,
    date: "Вчера",
}

export const action3: Action = {
    date: "25.08.2018",
    act: "Пополнение баланса. Физическое лицо. ",
    vacancy: "",
    vacancyLink: "/vacancy",
    company: "",
    sum: "+ 2000 ₽",
}

export const action4: Action = {
    ...action1,
    date: "24.08.2018",
}

export const action5: Action = {
    date: "23.08.2018",
    act: "Интернет-максимум",
    vacancy: "Срочно  требуются официанты",
    vacancyLink: "/vacancy",
    company: "Моллис Паб",
    sum: "- 1 400 ₽",
}

export const action6: Action = {
    date: "23.08.2018",
    act: "В активном поиске",
    vacancy: "Срочно  требуются официанты",
    vacancyLink: "/vacancy",
    company: "Моллис Паб",
    sum: "- 700 ₽",
}

export const action7: Action = {
    date: "23.08.2018",
    act: "Выделить и закрепить",
    vacancy: "Срочно  требуются официанты длинное название lorem ipsum ...",
    vacancyLink: "/vacancy",
    company: "Моллис Паб",
    sum: "- 1 100 ₽",
}

export const action8: Action = {
    date: "23.08.2018",
    act: "В активном поиске",
    vacancy: "Срочно  требуются официанты",
    vacancyLink: "/vacancy",
    company: "Моллис Паб",
    sum: "- 1 100 ₽",
}

export const action9: Action = {
    date: "22.08.2018",
    act: "Пополнение баланса. Юридическое лицо. ООО “Ромашка”",
    vacancy: "",
    vacancyLink: "",
    company: "",
    sum: "+ 15 000 ₽",
}

export const bill: Bill = {
    bilNum: null,
    date: "",
    entity: "",
    sum: "",
    status: "",
    billLink: "",
    actLink: "",
}

export const bill1: Bill = {
    ...bill,
    bilNum: 780,
    date: "25 января 2018",
    entity: "ООО “Ромашка”",
    sum: "2 000 ₽",
    status: "Оплачено",
    billLink: "#",
    actLink: "#",
}

export const bill2: Bill = {
    ...bill,
    bilNum: 779,
    date: "24 января 2018",
    entity: "ООО “Ромашка”",
    sum: "2 000 ₽",
    status: "Не оплачено",
    billLink: "#",
}

export const bill3: Bill = {
    ...bill,
    bilNum: 778,
    date: "23 января 2018",
    entity: "ООО “Ромашка”",
    sum: "2 000 ₽",
    status: "Оплачено",
    billLink: "#",
    actLink: "#",
}
