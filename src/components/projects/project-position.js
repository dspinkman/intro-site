import React from "react"
import { ProjectType } from "../../types"

const ProjectPosition = ({ position }) => (
  <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
    <span
      className={`inline-block w-2 h-2 rounded-full mr-2 ${
        position === "*" ? "bg-green-500" : "bg-orange-500"
      }`}
    ></span>
    Postion: {position}
  </li>
)

ProjectPosition.propTypes = {
  position: ProjectType.position,
}

export default ProjectPosition
