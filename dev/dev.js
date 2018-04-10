import React from 'react'
import { render } from 'react-dom'
import Animate from '../src/index'

const containerEl = document.createElement('div')
document.body.appendChild(containerEl)

class Template extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			from: 0,
			to: 100,
		}
	}
	componentDidMount(){
		setTimeout(() => {
			this.setState({
				from: 0,
				to: 200,
			})
		}, 600)
	}
	render(){
		return (
			<Animate {...this.state}>
				{x => (
					<div style={{
						transform: `translateX(${x}px)`
					}}>X</div>
				)}
			</Animate>
		)
	}
}

render(<Template />, containerEl)