import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styles from './styles.module.scss'
import { Footer, Navbar } from 'components/organisms'
import { Flex } from 'components/atoms'
import { withPrefix } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import moment from 'moment'

export default class Events extends Component {
	render() {
		const post = this.props.data.mdx

		return (
			<div>
				<Navbar section="Events" />

				<Flex justify="center" align="center" className={styles.banner}>
					<Flex direction="column" className={styles.bannerContent}>
						<h1>
							{post.frontmatter.title}{' '}
							<Flex justify="center" align="center" direction="column">
								<span>
									{' '}
										{moment(post.frontmatter.startDateTime).format("MMM")}
								</span>
								<span>
									{' '}
										{moment(post.frontmatter.startDateTime).format("DD")}
								</span>
							</Flex>
						</h1>
						<h2>
							<span className={styles.startTime}>
								{moment(post.frontmatter.startDateTime).format("h:mma")}
							</span>
							{post.frontmatter.endDateTime && <span className={styles.endTime}>
								&nbsp; – &nbsp;{moment(post.frontmatter.endDateTime).format("h:mma")}
							</span>}
							<span className={styles.locationName}>
								<a href={post.frontmatter.locationURL} target="_blank">
									{post.frontmatter.locationName}
								</a>
							</span>
						</h2>
						{post.frontmatter.heroImage && <img className={styles.heroImage} src={post.frontmatter.heroImage}/>}
						<p className={styles.summary}>
							{post.frontmatter.summary}
						</p>
						{post.frontmatter.bodyImage && <img className={styles.bodyImage} src={post.frontmatter.bodyImage}/>}
					</Flex>
				</Flex>
				<a href={post.frontmatter.ctaURL} className={styles.ctaButton} target="_blank">RSVP</a>
				<div className={styles.markdownContainer}>
					<Flex direction="column" className={styles.wrapper}>
						<MDXRenderer>{post.code.body}</MDXRenderer>
					</Flex>
				</div>
				<Footer light />
			</div>
		)
	}
}

export const pageQuery = graphql`
			query($slug: String!) {
				mdx(fields: { slug: { eq: $slug } }) {
					frontmatter {
						author
						authorLink
						description
						title
						startDateTime
						endDateTime
						locationName
						locationURL
						heroImage
						summary
						bodyImage
						ctaURL
					}
					code {
						body
					}
				}
			}
		`
