import React, { Component } from 'react';
// import axios from 'axios';
// import Qs from 'qs';

class Quotes extends Component {
	constructor() {
		super();
		this.state = {
			quotes: []
		};
	}

	componentDidMount() {
		// axios({
		//     url: 'https://proxy.hackeryou.com',
		//     method: 'GET',
		//     dataResponse: 'json',
		//     params: {
		//         reqUrl: 'http://api.forismatic.com/api/1.0/',
		//         method: 'getQuote',
		//         format: 'json',
		//         lang: 'en',
		//         proxyHeaders: {
		//             'header_params': 'value'
		//         }
		//     }
		// }).then((res) => {
		//     console.log(res);
		//     // res = res.data.quotes;
		//     // this.setState ({quotes: res})
		// });
		//     axios({
		//         url: 'http://proxy.hackeryou.com',
		//         dataResponse: 'json',
		//         paramsSerializer: function (params) {
		//             return Qs.stringify(params, { arrayFormat: 'brackets' })
		//         },
		//         params: {
		//             reqUrl: 'http://api.forismatic.com/api/1.0/',
		//             params: {
		//                 queryParam: 'value'
		//             },
		//             proxyHeaders: {
		//                 'header_params': 'value'
		//             },
		//             xmlToJSON: false
		//         }
		//     }).then((res) => {
		//         console.log(res);
		//     });
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
