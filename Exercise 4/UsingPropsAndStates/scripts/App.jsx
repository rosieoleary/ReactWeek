import React from 'react';
import CurrentLocation from './CurrentLocation';
import Map from './Map';

export default class App extends React.Component{
	
	constructor(){
		super();
		this.state = {
			
			currentAddress:'Anchorage',
			mapCoords:{
				lat:53.4740612,
				lng:-2.2864044
			}
	
		}
		
	}
	
	render(){
		return(
			<div>
				<h1>A Google Map Location</h1>
				<Map lat={this.state.mapCoords.lat} lng={this.state.mapCoords.lng}/>
				<CurrentLocation address={this.state.currentAddress}/>
			</div>
		);
		
	}
}
