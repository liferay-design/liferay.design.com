import PropTypes from 'prop-types'
import React from 'react'
import { colors } from 'theme'

const Flexbox = ({
	as,
	align,
	background,
	backgroundImage,
	children,
	className,
	direction,
	flexWrap,
	height,
	justify,
	margin,
	name,
	padding,
	position,
	width,
	style,
	...props
}) => {
	const As = as 

	const styles = {
		...style,
		alignItems: align,
		background: background,
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: direction,
		flexWrap,
		height,
		justifyContent: justify,
		margin,
		padding,
		position,
		width,
	}

	if (background) {
		styles.backgroundColor = colors[background] || background
	}

	if (backgroundImage) {
		styles.background = `url(${backgroundImage}) center/cover` || background
	}

	return (
		<As className={className} id={name} name={name} style={styles} {...props}>
			{children && children}
		</As>
	)
}

Flexbox.defaultProps = {
	direction: 'row',
	flexWrap: 'nowrap',
	as: 'div',
}

Flexbox.propTypes = {
	align: PropTypes.string,
	background: PropTypes.string,
	backgroundImage: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	direction: PropTypes.string,
	flexWrap: PropTypes.string,
	height: PropTypes.string,
	height: PropTypes.string,
	justify: PropTypes.string,
	margin: PropTypes.string,
	name: PropTypes.string,
	padding: PropTypes.string,
	position: PropTypes.string,
	style: PropTypes.object,
	width: PropTypes.string,
}

export default Flexbox
