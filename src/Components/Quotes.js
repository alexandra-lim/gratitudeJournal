import React, { Component } from 'react';
import Axios from 'axios';

class Quotes extends Component {
	constructor() {
		super();
		this.state = {
			quotes: []
		};
	}

	componentDidMount() {
		Axios.get('https://api.quotable.io/random').then(res => {
			console.log(res);
			const results = res.data;
			this.setState({
				quotes: results
			});
		});
	}

	render() {
		return (
			<div>
				<blockquote>{this.state.quotes.content}</blockquote>
				<p>{this.state.quotes.author}</p>
			</div>
		);
	}
}

export default Quotes;
