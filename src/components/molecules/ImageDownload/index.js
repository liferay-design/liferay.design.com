import { Flex, Icon, Text } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export default function ImageDownload({
	source,
	type,
	title,
	width,
	imageWidth,
}) {

	const altText = `${title + ' ' + type}`
	const downloadName = `${title}`

	return (

		<Flex
			className={styles.container}
			direction="column"
			align="center"
			padding="3rem 0"
			width={width}
		>
			<img src={source} alt={altText} width={imageWidth} />
			<div className={styles.caption}>
				<Text type="p" color="grey" weight="regular" size="base">
					{title}
				</Text>
				<a className={styles.download} href={source} download={downloadName}>
					<Icon name="keyboardArrowDown" />
				</a>
			</div>
		</Flex>
	)
}

ImageDownload.defaultProps = {
	type: 'Image',
}

ImageDownload.propTypes = {
	source: PropTypes.string.isRequired,
	title: PropTypes.string,
	type: PropTypes.string,
	imageWidth: PropTypes.string,
	width: PropTypes.string,
}
