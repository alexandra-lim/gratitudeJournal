import React, { Component } from 'react';
import firebase from './firebase';
import JournalForm from './Components/JournalForm';
import JournalEntry from './Components/JournalEntry';
import './App.scss';

// set state
class App extends Component {
	constructor() {
		super();
		this.state = {
			dbRef: firebase.database().ref(),
			journal: [],
			date: '',
			firstThanks: '',
			secondThanks: '',
      thirdThanks: '',
      formChanged: false,
		};
	}

	// once page is loaded, add entry to firebase
	componentDidMount() {
		this.state.dbRef.on('value', response => {
			const newState = [];
			const data = response.val();
			for (let key in data) {
				newState.push({
					log: data[key],
					id: key
				});
			}
			this.setState({
				journal: newState
			});
		});
	}

	// handle input change
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	// handle click event
	handleClick = event => {
		event.preventDefault();
		this.state.dbRef.push({
			date: this.state.date,
			firstThanks: this.state.firstThanks,
			secondThanks: this.state.secondThanks,
			thirdThanks: this.state.thirdThanks
		});
		this.setState({
			date: '',
			firstThanks: '',
			secondThanks: '',
			thirdThanks: ''
		});
	};

	// delete journal entry
	deleteEntry = entryId => {
		this.state.dbRef.child(entryId).remove();
  };

	// render on page
	render() {
		return (
			<div className='wrapper'>
				<div className='App'>
					<h1>Gratitude Journal</h1>
					<JournalForm
						handleChange={this.handleChange}
            handleClick={this.handleClick}
            date={this.state.date}
            firstThanks={this.state.firstThanks}
            secondThanks={this.state.secondThanks}
            thirdThanks={this.state.thirdThanks}
					/>

					{/* journal entry */}
					{this.state.journal.map(entry => {
						return (
							<JournalEntry
								key={entry.id}
								date={entry.log.date}
								firstThanks={entry.log.firstThanks}
								secondThanks={entry.log.secondThanks}
								thirdThanks={entry.log.thirdThanks}
								removeEntry={() => this.deleteEntry(entry.id)}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default App;
