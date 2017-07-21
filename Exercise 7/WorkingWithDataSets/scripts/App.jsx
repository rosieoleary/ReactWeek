import React from 'react';
import CurrentLocation from './CurrentLocation';
import Map from './Map';
import Search from './Search';
import FavouritesList from './FavouritesList';

export default class App extends React.Component {
  constructor() {
    super();
	
	var favourites=[];
	
	if(localStorage.favourites){
		favourites =JSON.parse(localStorage.favourites);
	}

    this.state = {
		favourites : favourites,
		currentAddress: 'QA Manchester',
		mapCoordinates: {
        lat: 53.475586,
        lng: -2.241402
		}
    }
  }
  favouriteToggle(currentAddress){
		if(this.isAddressInFavourites(currentAddress)){
			this.removeFromFavourites(currentAddress);
		}
		else{
			this.addToFavourites(currentAddress);
		}
	}
	isAddressInFavourites(currentAddress){
		let favourites=this.state.favourites;
		let i =0;
		
		while (i<favourites.length){
			if (favourites[i].address===currentAddress){
				return true;
			}
			i=i+1;
		}
		return false;	  
	}
	removeFromFavourites(currentAddress){
		let favourites=this.state.favourites;
		let index = -1;
		for (let j=0;j<favourites.length; j++){
			if (favourites[j].address===currentAddress){
				index=j;
				break;
			}
		}
		if(index!==-1){
			favourites.splice(index,1);
			console.log("remove from favourites");
			this.setState({favourites : favourites});
			localStorage.favourites=JSON.stringify(favourites);
		}
	
	}
	addToFavourites(currentAddress){
		let favourites = this.state.favourites;
		favourites.push({
			address: currentAddress, 
			timestamp:Date.now()
		});
		console.log("add to favourites");
		this.setState({favourites: favourites});
		localStorage.favourites=JSON.stringify(favourites);
	}

  searchForAddress(address) {
    let self = this;
  
    GMaps.geocode({
      address: address,
      callback: function(results, status) {
        if(status !== 'OK') {
          self.setState( {
            currentAddress: "Location not found"
          });
          return;
        }

        let latlng = results[0].geometry.location;

        self.setState({
          currentAddress: results[0].formatted_address,
          mapCoordinates: {
            lat: latlng.lat(),
            lng: latlng.lng()
          }
        });
      }
    });
}

  render() {
    return (
      <div>
        <h1>Your Google Map Locations</h1>
        <Search onSearch={this.searchForAddress.bind(this)} />
        <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
        <CurrentLocation favourite={this.isAddressInFavourites(this.state.currentAddress)} onFavouriteToggle={this.favouriteToggle.bind(this)} address={this.state.currentAddress} />
		<FavouritesList favouriteLocations={this.state.favourites} activeLocationAddress={this.state.currentAddress} onClick={this.searchForAddress.bind(this)} />
		
	  </div>
    );
  }
}

