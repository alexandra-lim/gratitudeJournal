import React, { Component } from 'react';
import firebase from './firebase';
import Header from './Components/Header';
import JournalForm from './Components/JournalForm';
import JournalEntry from './Components/JournalEntry';
import Footer from './Components/Footer';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './App.scss';

// delete confirmation sweet alert
// const MySwal = withReactContent(Swal);

// set state
class App extends Component {
	constructor() {
		super();
		this.state = {
			dbRef: firebase.database().ref(),
			journal: [],
			user: null,
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
			inputError = 'Input fields cannot be blank.';
		}

		if (inputError) {
			this.setState({ inputError });
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
				thirdThanks: '',
				inputError: ''
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
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then(result => {
			if (result.value) {
				this.state.dbRef.child(entryId).remove();
				Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
			}
		});
	};

	// render on page
	render() {
		return (
			<div className='wrapper'>
				<div className='App'>
					<Header />

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
