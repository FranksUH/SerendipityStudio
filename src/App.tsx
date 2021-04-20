import React, { Component, Fragment } from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import { Footer } from './Components/footer/Footer';
import configRoutes  from './routes-config';
import HeaderNavBarConnector from './Containers/HeaderNavBarConnector';

class App extends Component
{
	render(){
		return(		
			<Fragment>
				<CssBaseline/>
				<HeaderNavBarConnector/>
				{configRoutes()}
				<Footer title='Serendipity Studio' description='We are pleased with your visit'/>
			</Fragment>
		)
	}	
}

export default App;
