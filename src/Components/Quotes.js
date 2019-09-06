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
		Axios.get(
			'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand'
		).then(res => {
			console.log(res);
		});
	}

	render() {
		return (
			<div className='App'>
				<h3>Quotes?</h3>
			</div>
		);
	}
}

export default Quotes;
