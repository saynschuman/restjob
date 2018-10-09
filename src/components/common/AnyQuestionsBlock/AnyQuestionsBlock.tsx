import * as React from "react"
import { AnyQuestionsBlockProps } from "../../../types"
import { Question } from "./Question"

export const AnyQuestionsBlock: React.SFC<AnyQuestionsBlockProps> = (props) => {
  const renderQuestions = props.questions.map((question, index) => {
    return (
      <Question
        key={index}
        title={question.title}
        description={question.description}
        phone={question.phone}
        link={question.link}
        linkName={question.linkName}
      />
    )
  })
  return <div>{renderQuestions}</div>
}
