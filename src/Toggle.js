import React, {Component} from 'react';

class Toggle extends Component{
	constructor(props){
		super(props);
		this.state={istoggle:true};
		//bind handle click to this.
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(prevState => ({
			istoggle: !prevState.istoggle
		}));
	}

	render(){
		return (
			<div>
				<button onClick={this.handleClick}>
				{this.state.istoggle ? 'ON' : 'OFF'}
				</button>
			</div>
		);
	}
}
export default Toggle;