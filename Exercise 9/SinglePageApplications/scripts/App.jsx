import React from 'react';
import {Header} from './mainScripts/Header';
import {Footer} from './mainScripts/Footer';


export default class App extends React.Component{
	
		render(){
			
			return( 
				<div>
					<Header/>
					<main className="row">
						{this.props.children}
					</main>
					<Footer/>
				
				</div>);
			
		}
	
}