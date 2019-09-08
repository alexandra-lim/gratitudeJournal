import React, { Component } from 'react';
import Axios from 'axios';

class Quotes extends Component {
	constructor() {
		super();
		this.state = {
			quotes: []
		};
	}

    // API call to Quotes API
	componentDidMount() {
		Axios.get('https://api.quotable.io/random').then(res => {
			const results = res.data;
			this.setState({
				quotes: results
			});
		});
	}

	render() {
		return (
			<blockquote>
				<h3>{this.state.quotes.content}</h3>
				<p>{this.state.quotes.author}</p>
			</blockquote>
		);
	}
}

export default Quotes;
