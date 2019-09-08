import React, { Component } from 'react';
import Quotes from './Quotes';

// input validation

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
			<div>
				<form action='submit'>
					<h2>What are you grateful for today?</h2>

					<label htmlFor='date'>Date</label>
					<input type='date' name='date' onChange={handleChange} value={date} />

					<label htmlFor='firstThanks'>1.</label>
					<input
						type='text'
						name='firstThanks'
						placeholder="Ex. I am grateful for Dug's company"
						onChange={handleChange}
						value={firstThanks}
					/>

					<label htmlFor='secondThanks'>2.</label>
					<input
						type='text'
						name='secondThanks'
						placeholder="Ex. I am grateful for Dug's company"
						onChange={handleChange}
						value={secondThanks}
					/>

					<label htmlFor='thirdThanks'>3.</label>
					<input
						type='text'
						name='thirdThanks'
						placeholder="Ex. I am grateful for Dug's company"
						onChange={handleChange}
						value={thirdThanks}
					/>

					<p className="errorMessage">{inputError}</p>

					<button onClick={handleClick}>Log this entry</button>
				</form>

				{/* <Quotes /> */}
			</div>
		);
	}
}

export default JournalForm;
