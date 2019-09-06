import React, { Component } from 'react';
import axios from 'axios';

class Quotes extends Component {
constructor() {
    super();
    this.state = {
        quotes: [],
    }
}

componentDidMount() {
    axios({
        url: 'http://proxy.hackeryou.com',
        method: 'GET',
        dataResponse: 'json',
        data: {
            reqUrl: 'http://api.forismatic.com/api/1.0/',
            method: 'getQuote',
            data: 'json',
            lang: 'en',
            proxyHeaders: {
                'header_params': 'value'
            },
            xmlToJson: false,
        }
    }).then((res) => {
        console.log(res);
        res = res.data.quotes;
        this.setState ({quotes: res})
    });
}

render() {
    return (
        <div className="App">
            <h3>Quotes?</h3>
        </div>
    );
}
}

export default Quotes;