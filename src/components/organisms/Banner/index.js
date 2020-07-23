/** @jsx jsx */

import { jsx, Grid, Button } from 'theme-ui'
import { Flex, Heading, Link, Container } from 'components/atoms'
import Navbar from 'components/organisms/Navbar'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Banner = ({
	underlineColor,
	headline,
	subtitle,
	cta,
	ctaLink,
	section,
	background,
	textAlign,
	preTitle,
	...props
}) => (
	<Grid
		sx={{
			gridTemplateRows:'8rem 1fr',
			background: `${background}`,
		}}
		className={styles.container}
	>
		<Navbar {...props} underlineColor={underlineColor} white />
		<Container style={{alignSelf:'center'}}>
			<Flex
				direction="column"
				align={textAlign}
				style={{textAlign:`${textAlign}`}}
				className={styles.content}
			>
				{preTitle ? <div className={styles.preTitle}>
					{preTitle}
				</div> : null}
				<Heading color="white" level={1}>
					{headline}
				</Heading>
				<Heading color="white" level={2}>
					{subtitle}
				</Heading>
				{cta ? (
					<Link to={ctaLink}>
						<Button className={styles.button}>
							{cta}
						</Button>
					</Link>
				) : null}
			</Flex>
		</Container>
	</Grid>
)

Banner.propTypes = {
	headline: PropTypes.string,
	preTitle: PropTypes.string,
	underlineColor: PropTypes.string,
	subtitle: PropTypes.string,
	cta: PropTypes.string,
	ctaLink: PropTypes.string,
	background: PropTypes.string,
	textAlign: PropTypes.string,
}

Banner.defaultProps = {
	textAlign: 'center',
}

export default Banner
