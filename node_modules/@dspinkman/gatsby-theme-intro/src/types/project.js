import { graphql } from "gatsby"
import { arrayOf, shape, string, object, oneOf } from "prop-types"

export const ProjectType = {
  description: string,
  details: string,
  icon: oneOf(["github", "website"]),
  image: shape({
    childImageSharp: object.isRequired,
  }),
  name: string.isRequired,
  position: string,
  tags: arrayOf(string),
}

export const query = graphql`
  fragment ProjectFragment on ProjectsYaml {
    description
    details
    icon
    image {
      childImageSharp {
        fluid(maxWidth: 640, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    name
    position
    tags
  }
`
