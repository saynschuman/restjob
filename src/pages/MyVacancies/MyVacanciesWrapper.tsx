import * as React from "react"
import { MyVacanciesPage } from "./MyVacanciesPage"
import { myVacancyItem, myVacancyItem1, myVacancyItem2, myVacancyItem3, myVacancyItemArchived1, myVacancyItemArchived2 } from "../../mocks"

const logoImage = require("../../assets/images/mocks/green_banner.svg")

export class MyVacanciesWrapper extends React.PureComponent {
  render() {
    return (
      <MyVacanciesPage
        banner={{
          href: "#",
          img: logoImage,
        }}
        vacancies={[ myVacancyItem3, myVacancyItem2, myVacancyItem1, myVacancyItem ]}
        vacanciesNew={[ myVacancyItem1, myVacancyItem ]}
        vacanciesArchived={[ myVacancyItemArchived1, myVacancyItemArchived2 ]}
      />
    )
  }
}
