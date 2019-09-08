import React, { Component } from 'react';
import firebase from './firebase';
import JournalForm from './Components/JournalForm';
import JournalEntry from './Components/JournalEntry';
import Footer from './Components/Footer';
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
			inputError: ''
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

	// input validation
	validate = () => {
		let inputError = '';

		if (
			this.state.date.length === 0 ||
			this.state.firstThanks.length === 0 ||
			this.state.secondThanks.length === 0 ||
			this.state.thirdThanks.length === 0
		) {
			inputError = 'Input fields cannot be blank';
		}

		if (inputError) {
			this.setState({inputError});
			return false;
		}

		return true;
	};

	// handle click event
	handleClick = event => {
		event.preventDefault();
		const isValid = this.validate();
		if (isValid) {
			this.setState({
				date: '',
				firstThanks: '',
				secondThanks: '',
				thirdThanks: ''
			});

			this.state.dbRef.push({
				date: this.state.date,
				firstThanks: this.state.firstThanks,
				secondThanks: this.state.secondThanks,
				thirdThanks: this.state.thirdThanks
			});
		}
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
						inputError={this.state.inputError}
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
					{/* Footer */}
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
