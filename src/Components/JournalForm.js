import React, { Component } from 'react';
import Quotes from './Quotes';

class JournalForm extends Component {
	render() {
		const {
			handleChange,
			firstThanks,
			secondThanks,
			thirdThanks,
			handleClick,
			date,
			inputError
		} = this.props;

		return (
			<div className='journalForm'>
				<form action='submit'>
					<h2>What are you grateful for today?</h2>

					<label htmlFor='date' className='date'>
						Date:
					</label>
					<input type='date' name='date' onChange={handleChange} value={date} />

					<label htmlFor='firstThanks'>1.</label>
					<input
						type='text'
						name='firstThanks'
						placeholder="ex. Dug the Pug visits HackerYou"
						onChange={handleChange}
						value={firstThanks}
					/>

					<label htmlFor='secondThanks'>2.</label>
					<input
						type='text'
						name='secondThanks'
						placeholder="ex. No TTC delays"
						onChange={handleChange}
						value={secondThanks}
					/>

					<label htmlFor='thirdThanks'>3.</label>
					<input
						type='text'
						name='thirdThanks'
						placeholder="ex. Dinner with friends"
						onChange={handleChange}
						value={thirdThanks}
					/>

					<p className='errorMessage'>{inputError}</p>

					<button onClick={handleClick}>Log entry</button>
				</form>

				<Quotes />
			</div>
		);
	}
}

export default JournalForm;
