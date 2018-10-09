import * as React from "react"
import { WorkPlace } from "../../../types"
import { WorkPlaceItem } from "./WorkPlaceItem"

export interface WorkPlaceListProps {
  list: WorkPlace[]
}

export const WorkPlaceList: React.SFC<WorkPlaceListProps> = (props) => {
  const workPlaceList = () =>
    props.list.map((workplace) => (
      <WorkPlaceItem key={workplace.id}
          orgname={workplace.orgname}
          position={workplace.position}
          period={workplace.period}
          description={ workplace.description }
          photoSet={workplace.photoSet}
      />
    ))
  return <div>{workPlaceList()}</div>
}
