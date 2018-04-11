import React from 'react'
import { render } from 'react-dom'

import Animate from '../src/index'
import { bounceOut } from 'eases'

const containerEl = document.createElement('div')
document.body.appendChild(containerEl)

class Template extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			from: 100,
			to: 0,
			id: 0,
		}
	}
	componentDidMount(){
		setTimeout(() => {
			this.setState({
				stop: true
			})
		}, 600)
	}
	render(){
		return (
			<Animate {...this.state} easing={bounceOut}>
				{x => {
					console.log(x)
					return (
						<div style={{
							transform: `translateX(${x}px)`,
							display: `inline-block`,
						}}>X</div>
					)
				}}
			</Animate>
		)
	}
}

render(<Template />, containerEl)