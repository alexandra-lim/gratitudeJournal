import React, { Component } from 'react';
import firebase from '../firebase';
import Header from './Header';
import JournalForm from './JournalForm';
import JournalEntry from './JournalEntry';
import Footer from './Footer';
import Swal from 'sweetalert2';
import moment from 'moment';
import { animateScroll as scroll } from 'react-scroll';
import '../styles/App.scss';

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
			inputError = 'Input fields cannot be blank.';
		}

		if (inputError) {
			this.setState({ inputError });
			return false;
		}

		return true;
	};

	// scroll to bottom
	scrollToBottom = () => {
		scroll.scrollToBottom();
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

			scroll.scrollToBottom();
		}
	};

	// delete journal entry
	deleteEntry = entryId => {
		Swal.fire({
			title: 'Are you sure you want to delete this entry?',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3498db',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then(result => {
			if (result.value) {
				this.state.dbRef.child(entryId).remove();
				Swal.fire('Deleted!', 'Your entry has been deleted.', 'success');
			}
		});
	};

	// render on page
	render() {
		return (
			<div className='wrapper'>
				<Header />

				<main>
					<section className='formImage'>
						<img
							className='mountainImage'
							src={require('../assets/mountains.jpg')}
							alt='Mountain tops cast in a blue light'
						/>

						<JournalForm
							handleChange={this.handleChange}
							handleClick={this.handleClick}
							date={this.state.date}
							firstThanks={this.state.firstThanks}
							secondThanks={this.state.secondThanks}
							thirdThanks={this.state.thirdThanks}
							inputError={this.state.inputError}
						/>
					</section>

					{/* journal entry */}
					<ul className='entries'>
						{this.state.journal.map(entry => {
							return (
								<JournalEntry
									key={entry.id}
									date={moment(entry.log.date).format('LL')}
									firstThanks={entry.log.firstThanks}
									secondThanks={entry.log.secondThanks}
									thirdThanks={entry.log.thirdThanks}
									removeEntry={() => this.deleteEntry(entry.id)}
								/>
							);
						})}
					</ul>
				</main>

				{/* Footer */}
				<Footer />
			</div>
		);
	}
}

export default App;
