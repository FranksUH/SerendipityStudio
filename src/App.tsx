import React, { Component, Fragment } from 'react';
import './App.css';
import SearchNavBar from './Components/nav/SearchNavBar';
import { CssBaseline } from '@material-ui/core';
import { Footer } from './Components/footer/Footer';
import configRoutes  from './routes-config';

class App extends Component
{
	render(){
		return(		
			<Fragment>
				<CssBaseline/>
				<SearchNavBar/>
				{configRoutes()}
				<Footer title='Serendipity Studio' description='We are pleased with your visit'/>
			</Fragment>
		)
	}	
}

export default App;
