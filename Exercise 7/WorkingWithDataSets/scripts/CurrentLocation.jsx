import React from 'react';

export default class CurrentLocation extends React.Component {

  render() {
	let classFavName='';
	if(this.address!="Location not found"){
		if(this.props.favourite){
			
			classFavName='glyphicon glyphicon-star';
			
		}
		else{
			
			classFavName='glyphicon glyphicon-star-empty';
		
		}
		
	}
    return (
      <div className="col-xs-12 col-md-6 col-md-offset-3 current-location">
        
		<h4 id="save-location">{this.props.address}</h4>
		<span className={classFavName} onClick={this.toggleFavourite.bind(this)} aria-hidden="true"/>
	  </div>
    )
  }
  toggleFavourite(){
	this.props.onFavouriteToggle(this.props.address);
  }
}
