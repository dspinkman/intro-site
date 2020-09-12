import { graphql } from "gatsby"
import { string } from "prop-types"

export const WorkHistoryType = {
  company: string.isRequired,
  url: string,
  period: string,
  position: string,
  description: string,
}

export const query = graphql`
  fragment WorkHistoryFragment on WorkHistoryYaml {
    company
    url
    period
    position
    description
  }
`
