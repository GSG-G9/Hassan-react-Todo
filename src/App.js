import React, { Component } from 'react';
import data from './Utils/data';
import './App.css';
import Header from './Component/Header';

import Container from './Component/Container';
export default class App extends Component {
	state = data;
	handleSearch = () => {};
	handleChangeTheme = () => {};
	handleChangeDisplay = () => {};

	render() {
		return (
			<>
				<Header
					handleSearch={this.handleSearch}
					handleChangeTheme={this.handleChangeTheme}
					handleChangeDisplay={this.handleChangeDisplay}
				/>
				<Container lists={this.state.lists} />
			</>
		);
	}
}
