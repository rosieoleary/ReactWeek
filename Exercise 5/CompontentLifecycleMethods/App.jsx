import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			count: 0
		}
		console.log('Constructor has been called');
		console.log('Initial Count is: '+this.state.count);
	}
	increase(){
	this.setState({count: this.state.count+1});
	}
	 
	shouldComponentUpdate(newProps,newState){
		console.log('shouldComponentUpdate?');
		if(newState.count<5){
			console.log('Condition met: Component should update');
			return true;
		}
		else{
			console.log('Condition not met: Component should NOT update and has been removed');
			ReactDOM.unmountComponentAtNode(content);
			return false;
		}
	}
	componentWillMount(){
		console.log('componentWillMount: Component is about to mount');	
	}
	componentWillUpdate(newProps,newState){
		console.log('componentWillUpdate: Component is about to update');
	}
	componentWillUnmount(){
		console.log('componentWillUnmount: Component is about to be removed');
	}
	componentWillReceiveProps(newProps){
		console.log('componentWillReceiveProps: Component will get new props!');
	}
	render(){
		var backgroundStyle = { 
			padding: 50, 
			border: "#333 2px dotted", 
			width: 250, 
			height: 100, 
			borderRadius: 10, 
			textAlign: "center" 
		}; 
		var numberStyle = { 
			fontSize: 24 
		}
		return(
			<div style={backgroundStyle}>
				<p style={numberStyle}>{this.state.count}</p>
				<p>Please inspect the console</p>
				<button onClick={this.increase.bind(this)}>Increase</button>
			
			</div>
			
		);
	}
	componentDidMount(){
		console.log('componentDidMount: Component just mounted');
	}
	componentDidUpdate(currentProps,currentState){
		console.log('componentDidUpdate: Component just updated');
	}
	
}