import React from 'react'
import styles from './styles.module.scss'
import { Flex, Heading } from 'components/atoms'
import { Button } from 'reakit'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'
import Navbar from 'components/organisms/Navbar'

const Banner = ({ headline, subtitle, cta, ctaLink, section, background }) => (
	<Flex className={styles.container} style={{ background: `${background}` }}>
		<Navbar white section={section} />
		<Flex direction="column" align="center" className={styles.content}>
			<Heading color="white" level={1}>
				{headline}
			</Heading>
			<Heading color="white" level={2}>
				{subtitle}
			</Heading>
			<Link to={ctaLink}>
				<Button className={styles.button} raised primary>
					{cta}
				</Button>
			</Link>
		</Flex>
	</Flex>
)

Banner.propTypes = {
	headline: PropTypes.string,
	subtitle: PropTypes.string,
	cta: PropTypes.string,
	ctaLink: PropTypes.string,
	background: PropTypes.string,
}

export default Banner
