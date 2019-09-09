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
				<p className="quote">{this.state.quotes.content}</p>
				<p className="author">- {this.state.quotes.author}</p>
			</blockquote>
		);
	}
}

export default Quotes;
