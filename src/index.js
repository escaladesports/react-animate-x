import React from 'react'
import Animate from 'animate-x'
import equal from 'fast-deep-equal'

class ReactAnimate extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			current: props.from,
			id: 0,
		}
	}
	start(props){
		if(this.anim){
			this.anim.stop()
		}
		if(props.animating === false) return
		this.anim = new Animate({
				...props,
				onStep: current => {
					this.setState({ current })
				}
			}).start()
	}
	componentDidMount(){
		this.start(this.props)
	}
	componentWillUnmount(){
		if(this.anim){
			this.anim.stop()
		}
	}
	componentWillReceiveProps(newProps){
		if(!equal(this.props, newProps)){
			this.start(newProps)
		}
	}
	render(){
		return this.props.children(this.state.current)
	}
}

export default ReactAnimate