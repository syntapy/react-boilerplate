import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

export class Clock extends React.Component {
	state: any
	timer: any
	interval: number

	constructor(props: any) {
		super(props)
		this.interval = 200
		this.state = {
			date: new Date()
		}
	}

	updateTimer() {
		this.timer = setTimeout(() => this.tick(), this.getTimeDiff())
	}

	componentDidMount() {
		this.updateTimer()
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	getTimeDiff(): number {
		let now_ms: number = Date.now()
		let future_ms: number = this.interval*Math.floor((now_ms + this.interval) / this.interval)
		let dateFuture: Date = new Date(future_ms)
		return dateFuture.getTime() - Date.now()
	}

	tick() {
		let date: Date = new Date()
		this.setState({
			date: date
		})

		this.updateTimer()
	}

	render() {
		return (
			<div className="clock">
				<h1>Hello Nuclear Reactors</h1>
				<p>The time is: {this.state.date.toISOString()}</p>
			</div>
		)
	}
}
