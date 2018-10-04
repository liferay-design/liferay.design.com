import React from 'react'
import { Icon, Heading } from 'components/atoms'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import { Grid } from 'reakit'

const Billboard = ({ image, heading, Subtitle, background }) => {
	return (
		<section
			className={styles.wrapper}
			style={{ backgroundImage: `url(${background})` }}
		>
			<Grid columns="20rem 30rem 1fr" areas="'icon copy gutterR'">
				<Icon className={styles.icon} name={image} />

				<div className={styles.copy}>
					<Heading level={2}>{heading}</Heading>

					<Subtitle />
				</div>
			</Grid>
		</section>
	)
}

Billboard.propTypes = {
	image: PropTypes.string,
	heading: PropTypes.string,
	subtitle: PropTypes.element,
	background: PropTypes.string,
}

export default Billboard
