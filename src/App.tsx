import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import SearchNavBar from './Components/nav/SearchNavBar';
import { CssBaseline } from '@material-ui/core';
import { Route } from 'react-router-dom';
import { MainMenu } from './Components/mainMenu/MainMenu';
import { Footer } from './Components/footer/Footer';
import { OfferedServices } from './Components/offeredServices/OfferedServices';
import BookingForm from './Components/booking/BookingForm';

class App extends Component
{
	state = {
		values: []
	};


	componentDidMount(){
		axios.get('https://localhost:5001/api/values')		
		.then((response) =>
			this.setState({
				values: response.data})
		)
	}


	render(){
		return(		
			<Fragment>
				<CssBaseline/>
				<SearchNavBar/>
				
				<Route exact path = '/' component={MainMenu} />
				<Route path='/grid' component={OfferedServices}/>
				<Route path='/booking' component={BookingForm}/>
				
				<Footer title='Serendipity Studio' description='We are pleased with your visit'/>
			</Fragment>
		)
	}	
}

export default App;
