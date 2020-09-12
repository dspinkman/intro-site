import Img from "gatsby-image"
import React from "react"
import { ProjectType } from "../../types"
import ProjectIcon from "./project-icon"
import ProjectPosition from "./project-position"
import ProjectTags from "./project-tags"

const Project = props => {
  const { name, image, description, details, position, tags, icon } = props
  return (
    <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
      {image && (
        <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
          <Img fluid={image.childImageSharp.fluid} alt={name} />
        </div>
      )}
      <div className="lg:flex-1">
        <h4 className="font-bold">{name}</h4>
        {description && (
          <span
            className="text-front break-all hover:opacity-75 transition-opacity duration-150"
          >
            {description}
          </span>
        )}
        <p className="w-full py-4 whitespace-pre-line">{details}</p>
        <ul className="pr-2">
          {position && <ProjectPosition position={position} />}
          {tags && <ProjectTags tags={tags} />}
        </ul>

        {icon && <ProjectIcon icon={icon} />}
      </div>
    </div>
  )
}

Project.propTypes = ProjectType

export default Project
