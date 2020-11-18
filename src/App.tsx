import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { NavBar } from './Components/nav/NavBar';
import MediaCard from './Components/mainMenu/cards';
import { Container, Grid, GridList } from '@material-ui/core';
import SingleLineGridList from './Components/mainMenu/gridList';

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
			<div className="App">
				<NavBar/>
				<SingleLineGridList/>
	 		</div>
		)
	}	
}

export default App;
