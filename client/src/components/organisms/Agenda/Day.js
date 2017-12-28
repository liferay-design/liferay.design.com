import { Aux, Text } from 'components/atoms'

import PropTypes from 'prop-types'
import React from 'react'
import classes from './Agenda.scss'

export const Day = ({ current, day, onClick }) => {
	function renderDayToggler() {
		if (day) {
			return (
				<div className={classes.dayToggle} onClick={onClick}>
					<Text>
						{day.format('dddd')}
						<span> {day.format('MMM')}</span>
						<span> {day.format('DD')}</span>
					</Text>
				</div>
			)
		}

		return <div className={classes.noDay} />
	}
	return (
		<Aux>
			{current ? (
				<Text align="center">
					{day.format('dddd')}&nbsp;
					{day.format('MMM')}&nbsp;
					{day.format('DD')}&nbsp;
				</Text>
			) : (
				renderDayToggler()
			)}
		</Aux>
	)
}

Day.propTypes = {
	current: PropTypes.bool,
	day: PropTypes.object,
	onClick: PropTypes.func,
}

export default Day
