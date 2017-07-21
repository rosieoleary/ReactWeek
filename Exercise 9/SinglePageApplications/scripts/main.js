import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import App from './App';
import Home from './mainScripts/Home';
import Films from './filmScripts/Films';
import FilmDescription from './filmScripts/FilmDescription';
import Actors from './actorScripts/Actors';
import ActorDetails from './actorScripts/ActorDetails';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/films" component={Films}>
				<Route path="/films/:filmName" component= {FilmDescription}/>
			</Route>
			<Route path="/actors" component={Actors}>
				<Route path="/actors/:actorName" component={ActorDetails}/>
			</Route>
		</Route>
	</Router>,document.querySelector('#app')
);
