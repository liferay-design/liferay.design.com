import { CardGrid, Container, Heading } from 'components/atoms'
import { CardDefault } from 'components/molecules'
import { MainLayout } from 'components/templates'
import { graphql } from 'gatsby'
import React from 'react'

export default ({ data }) => {
	return (
		<MainLayout section="Team">
			<Container>
				<Heading level={1} color="white" padding="4rem">
					The Squad
				</Heading>
				<CardGrid>
					{data.allMdx.edges.map(({ node }) => (
						<CardDefault
							avatarImage
							key={node.id}
							imageURL={node.frontmatter.featuredImage}
							link={node.fields.slug}
							title={node.frontmatter.title}
							subtitle={node.frontmatter.description}
							avatarImageURL={node.frontmatter.avatar}
						/>
					))}
				</CardGrid>
			</Container>
		</MainLayout>
	)
}

export const query = graphql`
	{
		allMdx(
			filter: { fileAbsolutePath: { regex: "/(/team/)/" } }
			sort: { order: ASC, fields: [fields___slug] }
		) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						description
						featuredImage
						author
						avatar
						date(formatString: "MMMM DD, YYYY")
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`
