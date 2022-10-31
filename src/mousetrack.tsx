import * as React from 'react'

interface MouseTrackProps {
	children: React.ReactNode
}

export class MouseTrack extends React.Component<MouseTrackProps> {
	state: any

	constructor(props: MouseTrackProps) {
		super(props)
		this.handleMouseMove = this.handleMouseMove.bind(this)
		this.state = { x: 0, y: 0 }
	}

	handleMouseMove = (event: React.MouseEvent) => {
		this.setState({
			x: event.clientX,
			y: event.clientY,
		})
	}

	render() {
		return (
			<div className="h-screen" onMouseMove={this.handleMouseMove}>
				<h1>
					The mouse position is ({this.state.x}, {this.state.y})
					{this.props.children}
				</h1>
			</div>
		)
	}
}
