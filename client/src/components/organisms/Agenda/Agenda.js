import { Flex, Heading, Text } from 'components/atoms'
import React, { Component } from 'react'

import Talk from './Talk'
import classes from './Agenda.scss'
import scheduleArray from './schedule'

export class Agenda extends Component {
	constructor() {
		super()

		this.state = {
			currentAgenda: scheduleArray[1],
		}
	}
	toggleDay(toggleDirection) {
		const currentIndex = this.state.currentAgenda.id
		const scheduleLength = scheduleArray.length - 1

		let updatedIndex

		if (toggleDirection === 'previous') {
			updatedIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex
		} else {
			updatedIndex = currentIndex < scheduleLength ? currentIndex + 1 : currentIndex
		}

		this.setState({ currentAgenda: scheduleArray[updatedIndex] })
	}
	render() {
		return (
			<div className={classes.agendaContainer}>
				<Flex className={classes.heading} justify="flex-start" width="100%">
					<Heading level={2} bottomBorder>
						Agenda
					</Heading>

					<Text color="black" type="p" width="30%">
						Orci varius natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus. Integer aliquam quis magna.
					</Text>
				</Flex>

				<Flex justify="space-around">
					<div className={classes.dayToggle} onClick={() => this.toggleDay('previous')}>
						<Text>
							Monday <span>Jan 22</span>
						</Text>
					</div>

					<div className={classes.schedule}>
						{this.state.currentAgenda.talks.map((data, i) => (
							<Talk data={data} key={i} />
						))}
					</div>

					<div className={classes.dayToggle} onClick={() => this.toggleDay('next')}>
						<Text>
							Wednesday <span>Jan 24</span>
						</Text>
					</div>
				</Flex>
			</div>
		)
	}
}

export default Agenda
